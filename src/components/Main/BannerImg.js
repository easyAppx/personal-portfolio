import lottie from 'lottie-web';
import React, {useRef,useEffect } from "react";

export default function BannerImg(){
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./banner.json')
    });
    return () => {
      lottie.destroy();
    };
  }, [])
  return (
    <div className="App">
      <div className="container" ref={container}></div>
    </div>
  );
}