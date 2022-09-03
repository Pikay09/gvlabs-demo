import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


export const Purple = () => {

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
        duration: 2, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top top',
          end: 'bottom 99%',
          pin: true  ,
          preventOverlaps: true,
          scrub: true,
          toggleActions: 'play reverse none reverse',
          markers: true,
        }
      });

    });

  });

 useEffect(()=>{
          gsap.fromTo(".secs2",{y:100 , autoAlpha: 0, scale:0.5}, {
        duration: 1,
        autoAlpha: 1,
        scale: 0.8,
        opacity: 1,
        ease: "none", y:-100,
        scrollTrigger: {
          trigger: ".secs2",
          start: "top 10%",
          end: "bottom 10%",
          toggleActions: "reverse",
          scrub: 4,
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
        <div className="App-section-3" ref={addToRefs}>
            <div className="content">
              <div className='secs2'>
                <h1>
                PERFORMANCE BASED ASSET GENERATION
                </h1>
              </div>
                <div>
                  <img width={360} src="./banner-3-img-square.png" alt=""/>
                <h2>
                    Content is King. We plan and shoot data driven content to deliver measurable results for your business.
                </h2>  
                <h2>
                    Production
                </h2> 
                <img  height={160} src='./larrie.jpg' alt=''/>
                </div>
            </div>
        </div>
        
    )
}