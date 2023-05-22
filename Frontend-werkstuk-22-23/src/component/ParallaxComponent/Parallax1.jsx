import { Parallax } from "react-parallax";
import { animated, useSpring, useInView } from "@react-spring/web";
import { motion } from "framer-motion";
import bg from '../../assets/bg.jpg';
import clouds from "../../assets/clouds.png";
import ParallaxText from "./Parallaxtext";
import imageI from "../../assets/Groupe.png";
import Volger from "../../assets/volger.png";
import Tijd from "../../assets/tijd.png";


function Parallax1() {
  const imageAnim = useSpring({
    from: { x: -300 },
    to: { x: 0 },
    delay: 1000, 
    config: { duration: 500 }
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

          <h1>Het oude Egypte</h1>
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
