import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi I'm Ilyas Rufai <br/>
          Welcome To <br />
          My Portfolio Site
        </SectionTitle>
        <SectionText>
        I'm a DevOps Enginer with an inview of helping companies and 
        startups delivers better software by automation using modern tools.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;