import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


export const Frame = () => {

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
          start: 'top top',
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
          gsap.fromTo(".secs7",{ autoAlpha: 0, scale:0.2}, {
        duration: 1,
        autoAlpha: 0.9,
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".secs7",
          start: "top 10%",
          end: "bottom 10%",
          toggleActions: "play",
          scrub: 3,
        },
      });

  },[]);


  useEffect(()=>{
          gsap.to(".secs9", {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "none", y:69,
        scrollTrigger: {
          trigger: ".secs9",
          start: "top top",
          toggleActions: "play",
          scrub: 2,
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
            <div className="secs7">
              <h1 >
              WHAT MAKES US DIFFERENT?
              </h1>
            </div>
              <img width={360} src="./gvl-frame-n-2@2x-8.png" alt=""/>
          </div>
      </div>
  )
}