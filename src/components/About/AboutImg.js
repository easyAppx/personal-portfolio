import React, {useRef,useEffect } from "react";
import lottie from 'lottie-web';
export default function AboutImg(){

    const container = useRef(null)
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./edu3.json')
      });
      return () => {
        lottie.destroy();
      };
    }, [])
    return (
      <div className="container w-3/4" ref={container}></div>
    );
  
}
