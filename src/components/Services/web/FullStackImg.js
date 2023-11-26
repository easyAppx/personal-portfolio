import React, {useRef,useEffect} from "react";
import lottie from 'lottie-web';

export default function FrontendImg(){
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./htmldev.json')
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
