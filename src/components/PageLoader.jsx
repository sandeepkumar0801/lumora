import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageLoader = ({ onAnimationComplete }) => {
  const h1Ref = useRef(null);
  const h3Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const h1Letters = h1Ref.current.textContent.split("");
    h1Ref.current.textContent = ""; // Clear the text content

    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Animate each letter of the <h1> element
    h1Letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      h1Ref.current.appendChild(span);

      tl.from(
        span,
        {
          opacity: 0,
          y: 20,
          duration: 0.5, // Duration for each letter
          ease: "power3.out",
        },
        index * 0.1 // Stagger delay for each letter
      );
    });

    // Animate the <h3> element
    tl.from(
      h3Ref.current,
      {
        opacity: 0,
        y: 20,
        duration: 1.5, // Increased duration for <h3>
        ease: "power3.out",
      },
      "+=0.5" // Add a slight delay after the <h1> animation
    );

    // Animate the container to move up
    tl.to(
      containerRef.current,
      {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
      },
      "+=0.5" // Add a slight delay after the <h3> animation
    );

    // Call the callback when the PageLoader animations are complete
    tl.call(onAnimationComplete);
  }, [onAnimationComplete]);

  return (
    <div ref={containerRef} className="w-full h-screen fixed bg-greenTheme z-[50]">
      <div className="flex flex-col w-full h-full text-[#cb9967] leading-[70px] justify-center items-center">
        <h1 ref={h1Ref} className="text-[9vw]">
          Lumora
        </h1>
        <h3 ref={h3Ref} className="text-[2.9vw]">
          for a better way of life
        </h3>
      </div>
    </div>
  );
};

export default PageLoader;