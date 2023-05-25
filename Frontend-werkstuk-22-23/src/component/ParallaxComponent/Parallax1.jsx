import { Parallax } from "react-parallax";
import { animated, useSpring, useInView } from "@react-spring/web";
import { motion } from "framer-motion";
//images
import bg from "../../assets/bg.jpg";
import clouds from "../../assets/clouds.png";
import ParallaxText from "./Parallaxtext";
import imageI from "../../assets/Groupe.png";
import Volger from "../../assets/volger.png";
import Tijd from "../../assets/tijd.png";
//
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useFrame, Canvas } from "@react-three/fiber";
import { useGLTF, Text } from "@react-three/drei";

const HeadEgypt = "/egyptian_head/scene.gltf";

function Object(props) {
  const gltf = useGLTF(HeadEgypt, true);
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime();
    }
  });
  return <primitive object={gltf.scene} {...props} ref={ref} />;
}
function Parallax1() {
  const h1Ref = useRef(null);
  useEffect(() => {
    const splitText = new SplitType(h1Ref.current);
    splitText.split();

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.5,
    });
  }, []);

  const imageAnim = useSpring({
    from: { x: -300 },
    to: { x: 0 },
    delay: 1000,
    config: { duration: 500 },
  });
  const [image1, image11] = useInView(
    () => ({
      from: { x: 400 },
      to: { x: 0 },
      config: { tension: 200, friction: 10 },
    }),
    {
      rootMargin: "-20% ",
    }
  );
  const [text, springs1] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-50% 0%",
    }
  );

  const [timeline, springs2] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      delay: 5,
    }),
    {
      rootMargin: "-40% ",
    }
  );
  return (
    <>
      <Parallax strength={-600} blur={{ min: -5, max: 10 }} bgImage={bg}>
        <div className="content">
          <div className="het-oude-egypte">
            <ParallaxText baseVelocity={-5}>
              𓈖𓆓 𓊽𓉐𓉐 𓈖𓏲𓇯𓂝𓏴𓃾 𓉐𓃾𓂝𓃻𓁶𓃾 𓌓𓁶𓌓𓆓𓂝𓃾 𓌅𓂧𓌅𓀠 𓀠𓇯𓈖𓃾 𓇯𓂧
            </ParallaxText>
            <ParallaxText baseVelocity={5}>
              𓈖𓆓 𓊽𓉐𓉐 𓈖𓏲𓇯𓂝𓏴𓃾 𓉐𓃾𓂝𓃻𓁶𓃾 𓌓𓁶𓌓𓆓𓂝𓃾 𓌅𓂧𓌅𓀠 𓀠𓇯𓈖𓃾 𓇯𓂧
            </ParallaxText>
          </div>

          <h1 ref={h1Ref} className="char">
            Het oude Egypte
          </h1>
          <div className="inleiding">
            <animated.div style={{ ...imageAnim }}>
              <img src={imageI} alt="" />
            </animated.div>
            <animated.div ref={text} style={springs1}>
              <p>
                Het oude Egypte was een van de meest fascinerende beschavingen
                uit de geschiedenis, met een rijke cultuur en een lange
                geschiedenis die duizenden jaren teruggaat. Bezoekers van deze
                website kunnen verwachten meer te leren over deze fascinerende
                beschaving, inclusief de architectuur, kunst, religie, van de
                oude Egyptenaren.
              </p>
            </animated.div>
          </div>
          <animated.div ref={image1} style={image11}>
            <img className="volger" src={Volger} alt="" />
          </animated.div>
          <animated.div ref={timeline} style={springs2} className="timeline">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring" }}
            >
              <img src={Tijd} alt="" />
            </motion.div>
          </animated.div>
          
          <Canvas style={{ height: "70vh", width: "100vw" }}>
            <ambientLight />
            <Object position={[0, -2.58, 0]} scale={[0.025, 0.025, 0.025]} />
            <Text
              position={[3, 2.9, 1]}
              fontSize={0.18}
              anchorX="right"
              fontWeight="bold"
            >
              De Egyptische hoofdstandbeelden zijn iconische symbolen van de
              oude Egyptische cultuur en tonen vakmanschap en grootsheid.
            </Text>
          </Canvas>
        </div>
        <motion.div whileHover={{ y: 200 }} transition={{ type: "spring" }}>
          <div id="clouds">
            <img src={clouds} alt="" />
          </div>
        </motion.div>
      </Parallax>
    </>
  );
}

export default Parallax1;
