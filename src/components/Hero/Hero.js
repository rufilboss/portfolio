import Link from 'next/link';
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Ilyas Rufai <br/>
          Welcome To <br />
          My Portfolio Site
        </SectionTitle>
        <SectionText>
        I'm a DevOps Engineer with an inview of helping companies and 
        startups deliver better software by automating the deployment stuffs with modern tools.
        </SectionText>
        <Link href={'https://linktr.ee/rufilboy'}>
        <Button onClick={props.handleClick}>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;