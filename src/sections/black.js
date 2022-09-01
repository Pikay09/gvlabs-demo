import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


export const Black = () => {

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
        ease: 'circ',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top +=10',
          pin: true  ,
          pinType : 'fixed',
          pinSpacing: false,
          preventOverlaps: true,
          toggleActions: 'play pause resume reverse',
        }
      });

    });

  }, []);


  useEffect(()=>{
          gsap.fromTo(".secs",{y:-200 , autoAlpha: 0.2, scale:0.2}, {
        duration: 1,
        autoAlpha: 1,
        scale: 1,
        opacity: 1,
        ease: "none", y:69,
        scrollTrigger: {
          trigger: ".secs",
          start: "top top",
          toggleActions: "reverse ",
          scrub: 3,
        },
      });

  },[]);


  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };




  ScrollTrigger.refresh()

    return (
        <div className="App-section" ref={addToRefs}>
            <div className="content">
              <div className="secs">
                <h1 >
                DRIVING DIGITAL TRANSFORMATION
                </h1>
              </div>
                <img width={360} src="./gvl-frame-n-2@2x-8.png" alt=""/>
                <h2>
                    Your Digital Transformation Journey Starts Here.
                </h2>  
                <h2>
                    DT Consultancy . Branding . Marketing . Production . Tech . Web3 Consultancy
                </h2> 
            </div>
        </div>
        
    )
}
