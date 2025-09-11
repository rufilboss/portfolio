import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setShowTop(scrolled > 200);
      setShowBottom(scrolled < maxScroll - 200);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (to) => {
    const top = to === 'top' ? 0 : document.documentElement.scrollHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      {showTop && (
        <button className="scroll-fab scroll-top" onClick={() => scrollTo('top')} aria-label="Scroll to top">↑</button>
      )}
      {showBottom && (
        <button className="scroll-fab scroll-bottom" onClick={() => scrollTo('bottom')} aria-label="Scroll to bottom">↓</button>
      )}
    </>
  );
}

export default ScrollToTop;
