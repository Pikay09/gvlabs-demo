import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


export const BlueSec = () => {

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


  useEffect(()=>{
          gsap.fromTo(".secs3",{y:200 , autoAlpha: 0.2,scale:0.5}, {
        duration: 2,
        autoAlpha: 1,
        scale: 1,
        opacity: 1,
        ease: "none", y:-200,
        scrollTrigger: {
          trigger: ".secs3",
          start: "top 10%",
          end: "bottom 10%",
          toggleActions: "reverse",
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
        <div className="App-section-4" ref={addToRefs}>
            <div className="content">
              <div className='secs3'>
                <h1>
                WE BUILD APPS
                </h1>
              </div>
                
                <img width={360} src="./app-bg.png" alt=""/>
                <img className='images' src='./fingerprint.jpg' alt=''/>
                <h2>
                    Whether it is to capture the first mover advantage, raise funds or to simplyfy business processes, we build your customisable app to spec from prototype to publication on the Android & Apple stores. 
                </h2>  
                <h2>
                    Tech
                </h2> 
            </div>
        </div>
        
    )
}