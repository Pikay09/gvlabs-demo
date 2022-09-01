import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


export const Sponsors = () => {
  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    
    gsap.from(headerRef.current, {
      autoAlpha: 0, 
      ease: 'none',
      delay: 1
    });

    revealRefs.current.forEach((el, index) => {
        
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 0.9, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top +=100',
          pin: true  ,
          pinType : 'fixed',
          pinSpacing: false,
          preventOverlaps: true,
          toggleActions: 'play pause resume reverse',
        }
      });

    });

  }, []);


  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };
ScrollTrigger.refresh()


    return (
        <div>
            <div className='App-section-sponsors' ref={addToRefs}>Sponsors</div>
            <div className='App-section-sponsors-2' ref={addToRefs}>Clients</div>  
            <div className='App-section-sponsors-3' ref={addToRefs}>LetsChat</div> 
        </div>
    )
}