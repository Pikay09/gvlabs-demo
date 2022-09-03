import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


export const Purplish = () => {

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
          end: 'bottom 80%',
          pin: true  ,
          preventOverlaps: true,
          scrub: true,
        }
      });

    });

  }, []);


  useEffect(()=>{
          gsap.fromTo(".secs4",{y:200 , autoAlpha: 0.2,scale:0.5}, {
        duration: 2,
        autoAlpha: 1,
        scale: 1,
        opacity: 1,
        ease: "none", y:-200,
        scrollTrigger: {
          trigger: ".secs4",
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
        <div className="App-section-5" ref={addToRefs}>
            <div className="content">
              <div className='secs4'>
                <h1>
                WEB3 CONSULTANCY
                </h1>
              </div>
              <div>
                <img width={360} src="./banner-2-square.png" alt=""/>
                <h2>
                    We charter the uncharted with properly mapped out strategies that sets your project up for success.
                </h2>  
                <h2>
                    Web3 Consultancy
                </h2> 
                <img width={360} src='./firo.jpg' alt=''/>
              </div>
            </div>
        </div>
        
    )
}