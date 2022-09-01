
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); 


export const FrameAnimate = () => {

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
           gsap.fromTo("secs8", {
        autoAlpha: 1
      }, {
        duration: 0.9, 
        autoAlpha: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: "secs8",
          start: "top",
          end:"bottom",
          pin: true  ,
          pinType : 'fixed',
          pinSpacing: false,
          preventOverlaps: true,
          toggleActions: 'play pause resume reverse',
        }
      });

  },[]);

    useEffect(()=>{
        gsap.fromTo(".secs6", {
        duration: 1,
        autoAlpha: 1,
        opacity: 0,
        y: 200,
        ease: "elastic",
        scrollTrigger: {
            trigger: ".secs6",
            start: "top 5%",
            end: "center",
            toggleActions: "play pause",
            scrub: 3,
        },
        }, {
        duration: 1,
        autoAlpha: 0,
        scale: 1,
        y: -690,
        ease: "none",
        scrollTrigger: {
            trigger: ".secs6",
            start: "top 30%",
            end: "center",
            toggleActions: "play",
            scrub: 3,
            pin:true,
        },
        });
  },[]);



  useEffect(()=>{
          gsap.to(".framez", {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power1.inOut", y:420,
        scrollTrigger: {
          trigger: ".framez",
          start: "top 10%",
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
            <div className="secs8">
              <h1 >hello worlds..</h1> 
            </div>
            <div>
              <img width={360} src="./gvl-frame-n-2@2x-8.png" alt=""/>
              <div className="framez">
                <p className="secs6">WE CONNECT DOTS WITH OUR.</p>
              </div> 
            </div>
          </div>
      </div>
  )
}