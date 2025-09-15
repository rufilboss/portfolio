import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ 
      fontSize: '1.5rem', 
      color: 'var(--text-secondary)',
      fontWeight: '500',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typewriter
        options={{
          strings: [
            "Engineering Student",
            "Research Assistant",
            "Software Engineer",
            "Technical Writer",
            "Open Source Contributor",
            "Problem Solver",
            "Innovation Enthusiast",
            "Future Researcher"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 100,
          cursor: "|",
          wrapperClassName: "typewriter-wrapper",
          cursorClassName: "typewriter-cursor"
        }}
      />
    </div>
  );
}

export default Type;
