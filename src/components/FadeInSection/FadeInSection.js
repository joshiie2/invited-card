import React from "react";

import "assets/jss/material-kit-react/views/landingPageSections/productCss.scss";

const FadeInSection = (Props) => {
  const domRef = React.useRef();
  const { children } = Props;

  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <section ref={domRef} className={isVisible ? " is-visible" : ""}>
      {children}
    </section>
  );
};

export default FadeInSection;