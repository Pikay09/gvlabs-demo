import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


export const Orange = () => {

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
          end: 'bottom 30%',
          pin: true  ,
          preventOverlaps: true,
          scrub: true,
          toggleActions: 'play pause none reverse',
        }
      });

    });

  }, []);


  useEffect(()=>{
          gsap.fromTo(".secs1",{y:200 , autoAlpha: 0.2,scale:0.5}, {
        duration: 2,
        autoAlpha: 1,
        scale: 1,
        opacity: 1,
        ease: "none", y:-69,
        scrollTrigger: {
          trigger: ".secs1",
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
        <div className="App-section-2" ref={addToRefs}>
            <div className="content">
              <div className='secs1'>
                <h1>
                WE BUILD BRANDS
                </h1>
              </div>
              <div>
                <img style={{padding:"20px"}} width={360} src="./banner-2-square.png" alt=""/>
                <h2>
                    You don't have to break the bank to build a great brand.
                    Iconic brands are built over time with strategic evolution.
                </h2>  
                <h2>
                    Branding
                </h2> 
                <img className='images' src='./yolo.jpg' alt=''/>
              </div>
            </div>
        </div>
    )
}