import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PublicationGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'research', label: 'Research Papers' },
    { id: 'newsletter', label: 'Newsletter' },
    { id: 'blog', label: 'Blog Posts' },
    { id: 'technical', label: 'Technical Articles' }
  ];

  const filteredPublications = useMemo(() => {
    if (activeFilter === 'all') return publications;
    return publications.filter(pub => pub.category === activeFilter);
  }, [activeFilter, publications]);

  // Helper: fetch and parse RSS feeds (Substack + Hashnode) without extra deps
  const fetchRSS = async (feedUrl, source) => {
    const resolvedFeed = feedUrl || (source === 'substack'
      ? (process.env.REACT_APP_SUBSTACK_FEED_URL || 'https://rufilboss.substack.com/feed')
      : (process.env.REACT_APP_HASHNODE_FEED_URL || 'https://rufilboss.hashnode.dev/rss.xml'));

    const candidates = [
      { url: resolvedFeed, type: 'xml' },
      { url: `https://api.allorigins.win/raw?url=${encodeURIComponent(resolvedFeed)}`, type: 'xml' },
      { url: `https://cors.isomorphic-git.org/${resolvedFeed}`, type: 'xml' },
      { url: `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(resolvedFeed)}`, type: 'json' }
    ];

    const tryFetch = async (candidate) => {
      const response = await fetch(candidate.url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      if (candidate.type === 'json') {
        return { kind: 'json', data: await response.json() };
      }
      return { kind: 'xml', data: await response.text() };
    };

    let parsedItems = null;
    let lastErr = null;

    for (const candidate of candidates) {
      try {
        const payload = await tryFetch(candidate);
        if (payload.kind === 'json') {
          const jsonItems = payload.data.items || [];
          parsedItems = jsonItems.map((item, idx) => {
            const title = item.title || 'Untitled';
            const rawDescription = (item.description || '').replace(/<[^>]+>/g, '');
            const keywords = extractKeywords(title, rawDescription);
            const tags = (item.categories && item.categories.length ? item.categories : keywords);
            const readTime = item.readTime || item.read_time || estimateReadTime(rawDescription);
            return {
              id: `${source}-${idx}-${item.guid || item.link || idx}`,
              title,
              description: rawDescription.slice(0, 200),
              date: item.pubDate || '',
              url: item.link || '#',
              readTime,
              tags,
              category: source === 'hashnode' ? 'technical' : 'newsletter',
              type: source === 'hashnode' ? 'Technical Article' : 'Newsletter',
              featured: false,
              source
            };
          });
          break;
        } else {
          const xmlText = payload.data;
          const parser = new DOMParser();
          const doc = parser.parseFromString(xmlText, 'application/xml');
          const items = Array.from(doc.querySelectorAll('item'));
          parsedItems = items.map((item, idx) => {
            const title = item.querySelector('title')?.textContent || 'Untitled';
            const rawDescription = item.querySelector('description')?.textContent?.replace(/<[^>]+>/g, '') || '';
            const keywords = extractKeywords(title, rawDescription);
            const tagsFound = Array.from(item.querySelectorAll('category')).map((c) => c.textContent).filter(Boolean);
            const tags = tagsFound.length ? tagsFound : keywords;
            const readTime = item.querySelector('readingtime')?.textContent || item.querySelector('readtime')?.textContent || estimateReadTime(rawDescription);
            return {
              id: `${source}-${idx}-${item.querySelector('guid')?.textContent || item.querySelector('link')?.textContent || idx}`,
              title,
              description: rawDescription.slice(0, 200),
              date: item.querySelector('pubDate')?.textContent || '',
              url: item.querySelector('link')?.textContent || '#',
              readTime,
              tags,
              category: source === 'hashnode' ? 'technical' : 'newsletter',
              type: source === 'hashnode' ? 'Technical Article' : 'Newsletter',
              featured: false,
              source
            };
          });
          break;
        }
      } catch (err) {
        lastErr = err;
      }
    }

    if (!parsedItems) {
      throw lastErr || new Error('Failed to fetch feed');
    }

    return parsedItems;
  };

  const estimateReadTime = (text) => {
    const words = text ? text.trim().split(/\s+/).length : 0;
    if (!words) return '';
    return Math.max(1, Math.round(words / 200));
  };

  // Extract top 5 keywords from title + description
  const extractKeywords = (title, description) => {
    const stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
      'from', 'as', 'is', 'was', 'are', 'were', 'been', 'be', 'have', 'has', 'had', 'do', 'does',
      'did', 'will', 'would', 'should', 'could', 'may', 'might', 'must', 'can', 'this', 'that',
      'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'what', 'which', 'who',
      'when', 'where', 'why', 'how', 'all', 'each', 'every', 'both', 'few', 'more', 'most',
      'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too',
      'very', 'just', 'now', 'then', 'here', 'there', 'about', 'into', 'through', 'during',
      'before', 'after', 'above', 'below', 'up', 'down', 'out', 'off', 'over', 'under', 'again',
      'further', 'once', 'get', 'got', 'go', 'goes', 'going', 'come', 'came', 'coming', 'see',
      'saw', 'seen', 'know', 'knew', 'known', 'think', 'thought', 'take', 'took', 'taken',
      'give', 'gave', 'given', 'make', 'made', 'say', 'said', 'tell', 'told', 'ask', 'asked'
    ]);

    const combined = `${title} ${description}`.toLowerCase();
    const words = combined
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3 && !stopWords.has(word));

    const wordFreq = {};
    words.forEach(word => {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });

    const sorted = Object.entries(wordFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word]) => word.charAt(0).toUpperCase() + word.slice(1));

    return sorted.length > 0 ? sorted : ['Article'];
  };

  // Fetch Hashnode articles - try multiple methods
  const fetchHashnode = async () => {
    const rssUrl = 'https://rufilboss.hashnode.dev/rss.xml';
    
    // Try multiple CORS proxies and methods
    const methods = [
      // Method 1: Direct RSS with CORS proxy
      async () => {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const xmlText = await response.text();
        return parseHashnodeRSS(xmlText);
      },
      // Method 2: RSS2JSON API
      async () => {
        const jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (data.status !== 'ok') throw new Error('RSS2JSON error');
        return parseHashnodeJSON(data.items || []);
      },
      // Method 3: Another CORS proxy
      async () => {
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const xmlText = await response.text();
        return parseHashnodeRSS(xmlText);
      },
      // Method 4: Try GraphQL as last resort
      async () => {
        const query = `
          query GetPublicationPosts($host: String!) {
            publication(host: $host) {
              posts(first: 20) {
                edges {
                  node {
                    title
                    brief
                    slug
                    publishedAt
                    readTimeInMinutes
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
        `;
        const response = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            query, 
            variables: { host: 'rufilboss.hashnode.dev' } 
          })
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (data.errors) throw new Error(data.errors[0]?.message);
        const posts = data.data?.publication?.posts?.edges?.map(e => e.node) || [];
        if (posts.length === 0) throw new Error('No posts found');
        return posts.map((post, idx) => {
          const title = post.title || 'Untitled';
          const description = post.brief || '';
          const hashnodeTags = post.tags?.map(t => t.name) || [];
          const keywords = extractKeywords(title, description);
          const tags = hashnodeTags.length > 0 ? hashnodeTags.slice(0, 5) : keywords;
          return {
            id: `hashnode-${idx}-${post.slug}`,
            title,
            description: description.slice(0, 200),
            date: post.publishedAt || new Date().toISOString(),
            url: `https://rufilboss.hashnode.dev/${post.slug}`,
            readTime: post.readTimeInMinutes || estimateReadTime(description),
            tags,
            category: 'technical',
            type: 'Technical Article',
            featured: false,
            source: 'hashnode'
          };
        });
      }
    ];

    // Helper: Parse Hashnode RSS XML
    const parseHashnodeRSS = (xmlText) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xmlText, 'application/xml');
      const items = Array.from(doc.querySelectorAll('item'));
      return items.map((item, idx) => {
        const title = item.querySelector('title')?.textContent || 'Untitled';
        const rawDescription = item.querySelector('description')?.textContent?.replace(/<[^>]+>/g, '') || '';
        const keywords = extractKeywords(title, rawDescription);
        const tagsFound = Array.from(item.querySelectorAll('category')).map((c) => c.textContent).filter(Boolean);
        const tags = tagsFound.length > 0 ? tagsFound.slice(0, 5) : keywords;
        const readTime = item.querySelector('readingtime')?.textContent || item.querySelector('readtime')?.textContent || estimateReadTime(rawDescription);
        return {
          id: `hashnode-${idx}-${item.querySelector('guid')?.textContent || item.querySelector('link')?.textContent || idx}`,
          title,
          description: rawDescription.slice(0, 200),
          date: item.querySelector('pubDate')?.textContent || '',
          url: item.querySelector('link')?.textContent || '#',
          readTime,
          tags,
          category: 'technical',
          type: 'Technical Article',
          featured: false,
          source: 'hashnode'
        };
      });
    };

    // Helper: Parse Hashnode JSON from RSS2JSON
    const parseHashnodeJSON = (items) => {
      return items.map((item, idx) => {
        const title = item.title || 'Untitled';
        const rawDescription = (item.description || '').replace(/<[^>]+>/g, '');
        const keywords = extractKeywords(title, rawDescription);
        const tags = (item.categories && item.categories.length ? item.categories.slice(0, 5) : keywords);
        return {
          id: `hashnode-${idx}-${item.guid || item.link || idx}`,
          title,
          description: rawDescription.slice(0, 200),
          date: item.pubDate || '',
          url: item.link || '#',
          readTime: item.readTime || item.read_time || estimateReadTime(rawDescription),
          tags,
          category: 'technical',
          type: 'Technical Article',
          featured: false,
          source: 'hashnode'
        };
      });
    };

    // Try each method until one works
    let lastError = null;
    for (const method of methods) {
      try {
        const result = await method();
        if (result && result.length > 0) {
          console.log(`Hashnode fetch succeeded with ${result.length} articles`);
          return result;
        }
      } catch (err) {
        lastError = err;
        console.warn('Hashnode fetch method failed:', err.message);
        continue;
      }
    }

    throw lastError || new Error('All Hashnode fetch methods failed');
  };

  // Compute ms until next Sunday 00:00 local
  const getMsUntilNextSunday = () => {
    const now = new Date();
    const day = now.getDay();
    const daysUntilSunday = (7 - day) % 7 || 7;
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(0, 0, 0, 0);
    return nextSunday - now;
  };

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);

    const researchPlaceholder = {
      id: 'researchgate-upcoming',
      type: 'Research Paper',
      title: 'Upcoming publication on ResearchGate',
      description: 'A new research paper is coming soon. Stay tuned!',
      date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }),
      readTime: 'Coming soon',
      tags: ['Research', 'Engineering'],
      category: 'research',
      featured: true,
      url: '#',
      source: 'researchgate'
    };

    try {
      const results = await Promise.allSettled([
        fetchRSS(undefined, 'substack'),
        fetchHashnode()
      ]);

      const substackResult = results[0];
      const hashnodeResult = results[1];

      if (substackResult.status === 'rejected') {
        console.error('Substack fetch failed:', substackResult.reason);
      }
      if (hashnodeResult.status === 'rejected') {
        console.error('Hashnode fetch failed:', hashnodeResult.reason);
      }

      const successes = results
        .filter(r => r.status === 'fulfilled')
        .map(r => r.value)
        .flat();

      console.log('Fetched articles:', {
        substack: substackResult.status === 'fulfilled' ? substackResult.value.length : 0,
        hashnode: hashnodeResult.status === 'fulfilled' ? hashnodeResult.value.length : 0,
        total: successes.length
      });

      const combined = successes
        .map(item => ({
          ...item,
          dateObj: item.date ? new Date(item.date) : new Date()
        }))
        .sort((a, b) => b.dateObj - a.dateObj)
        .slice(0, 10)
        .map(item => ({
          ...item,
          date: item.dateObj.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
        }));

      if (combined.length === 0) {
        setPublications(prev => prev.length ? prev : [researchPlaceholder]);
        setError('Unable to load publications right now. Please try again later.');
      } else {
        setPublications([researchPlaceholder, ...combined]);
        setError(null); // Clear any previous errors
      }
    } catch (err) {
      console.error('Error fetching publications:', err);
      setPublications(prev => prev.length ? prev : [researchPlaceholder]);
      setError('Unable to load publications right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let sundayTimeout;
    let weeklyInterval;

    // Initial fetch
    fetchAll();

    // Schedule next Sunday refresh
    sundayTimeout = setTimeout(() => {
      fetchAll();
      weeklyInterval = setInterval(fetchAll, 7 * 24 * 60 * 60 * 1000);
    }, getMsUntilNextSunday());

    return () => {
      if (sundayTimeout) clearTimeout(sundayTimeout);
      if (weeklyInterval) clearInterval(weeklyInterval);
    };
  }, [fetchAll]);

  const handleFilterClick = (categoryId) => {
    setActiveFilter(categoryId);
  };

  const handleReadMore = (url) => {
    if (!url || url === '#') return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="publications" className="publication-gallery-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Publications & Articles</h2>
          <p className="section-subtitle">
            Sharing knowledge through research papers, technical articles, and blog posts
          </p>
        </div>

        <div className="newsletter-cta">
          <div>
            <h4>Newsletter & Research Updates</h4>
            <p>Subscribe to get my Substack newsletters, Hashnode deep-dives, and upcoming ResearchGate publications.</p>
          </div>
          <div className="cta-actions">
            <a className="btn-primary" href="https://rufilboss.substack.com" target="_blank" rel="noopener noreferrer">Subscribe on Substack</a>
            <a className="btn-secondary" href="https://rufilboss.hashnode.dev/" target="_blank" rel="noopener noreferrer">Read on Hashnode</a>
          </div>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <Row>
          {loading && (
            <Col xs={12} className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Fetching latest articles...</p>
            </Col>
          )}

          {error && (
            <Col xs={12} className="text-center py-5">
              <p className="text-danger mb-2">{error}</p>
              <button className="btn-primary" onClick={fetchAll}>Retry</button>
            </Col>
          )}

          {!loading && !error && filteredPublications.map((publication) => (
            <Col key={publication.id} lg={6} className="mb-4">
              <div className={`publication-card ${publication.featured ? 'featured' : ''}`}>
                <div className="publication-header">
                  <span className="publication-type">{publication.type}</span>
                  <span className="publication-date">{publication.date}</span>
                </div>
                
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-description">{publication.description}</p>
                
                <div className="publication-meta">
                  <span className="read-time">
                    {publication.readTime ? `${publication.readTime} min` : ''}
                  </span>
                  <div className="publication-tags">
                    {(publication.tags || []).map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="read-more-btn"
                  onClick={() => handleReadMore(publication.url)}
                  disabled={!publication.url || publication.url === '#'}
                >
                  {publication.url && publication.url !== '#' ? 'Read More →' : 'Coming Soon'}
                </button>
              </div>
            </Col>
          ))}

          {!loading && !error && filteredPublications.length === 0 && (
            <Col xs={12} className="text-center py-5">
              <p className="text-muted">No publications found for this category yet.</p>
            </Col>
          )}
        </Row>

        <div className="publication-stats text-center">
          <Row>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{publications.length}</span>
                <span className="stat-label">Total Publications</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{publications.filter(p => p.category === 'research').length}</span>
                <span className="stat-label">Research Papers</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{publications.filter(p => p.category === 'blog').length}</span>
                <span className="stat-label">Blog Posts</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{publications.filter(p => p.featured).length}</span>
                <span className="stat-label">Featured Articles</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PublicationGallery;
