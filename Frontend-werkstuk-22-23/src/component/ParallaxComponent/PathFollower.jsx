import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

    

function PathFollower() {
    const pathRef = useRef(null);
  

    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin);
      
        const path = pathRef.current;
        const pathLength = path.getTotalLength();
      
        gsap.set(".follower", { transformOrigin: "center" });
        gsap.to(".follower", {
          motionPath: {
            path: path,
            align: path,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: pathLength,
          },
          duration: 3,
          repeat: -1,
          ease: "power1.inOut",
        });
      }, []);

    return (
        <div>
          <svg width="500" height="2500">
            <path
              ref={pathRef}
              d="M5883.987,2304c-546.764,143.73-575.731-92.094-861.786,122.292-169.06,126.7,213.635,71.462,86.9,242.97-224.5,167.935,86.9,239.4-115.87,343.017,188.8,285.347-47.383,316.987,90.523,518.1,155.7,28.585-126.733,235.824-126.733,235.824s-155.7,167.936-32.588,296.567-210.016,285.848,32.588,539.537" transform="translate(-4863.495 -2301.582)"
              fill="none"
              stroke="black"
              strokeWidth="4
              "
            />
            <circle className="follower" r="10" fill="green" />
          </svg>
       
          <svg xmlns="http://www.w3.org/2000/svg" width="1021.128" height="2302.451" viewBox="0 0 1021.128 2302.451">
  <path id="Tracé_58" data-name="Tracé 58" d="M5883.987,2304c-546.764,143.73-575.731-92.094-861.786,122.292-169.06,126.7,213.635,71.462,86.9,242.97-224.5,167.935,86.9,239.4-115.87,343.017,188.8,285.347-47.383,316.987,90.523,518.1,155.7,28.585-126.733,235.824-126.733,235.824s-155.7,167.936-32.588,296.567-210.016,285.848,32.588,539.537" transform="translate(-4863.495 -2301.582)" fill="none" stroke="#000" stroke-width="5"/>
</svg>



        </div>
      );
      
  }
  export default PathFollower;
  