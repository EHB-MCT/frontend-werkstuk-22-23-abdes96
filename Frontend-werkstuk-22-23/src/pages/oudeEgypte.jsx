import ParallaxText from "../component/Parallaxtext";
import "../styles/HetOudeEgypte.css";
import imageI from "../assets/Groupe.png";
import Volger from "../assets/volger.png";
import bg from "../assets/bg.jpg";
import bg2 from "../assets/bg2.jpg";
import Tijd from "../assets/tiijd.png";
import Image from "../assets/image.png";
import { Parallax } from "react-parallax";
import { animated, useSpring, useInView } from "@react-spring/web";
import { motion } from "framer-motion";

function HetOudeEgypte() {
  const image = useSpring({
    from: { x: -300 },
    to: { x: 0 },
  });

  const [image1, image11] = useInView(
    () => ({
      from: { x: 400 },
      to: { x: 0 },
      config: { tension: 200, friction: 10 },
    }),
    {
      rootMargin: "0% ",
    }
  );

  const [ref, springs] = useInView(
    () => ({
      from: { x: -400 },
      to: { x: 0 },
      config: { tension: 200, friction: 10 },
    }),
    {
      rootMargin: "-40% ",
    }
  );

  const [ref1, springs1] = useInView(
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
      rootMargin: "-20% ",
    }
  );
  const [reff, springss] = useInView(
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
      rootMargin: "-50% ",
    }
  );

  return (
    <div className="outer1">
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
            <animated.div style={{ ...image }}>
              <img src={imageI} alt="" />
            </animated.div>
            <animated.div ref={reff} style={springss}>
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
          <animated.div ref={ref1} style={springs1} className="timeline">
            <motion.div
              whileHover={{ scale: 1.2 }}
              animate={{ x: 50, y: -30 }}
              transition={{ type: "spring" }}
            >
              <img src={Tijd} alt="" />
            </motion.div>
          </animated.div>
        </div>
      </Parallax>
      <Parallax strength={300} blur={{ min: 0, max: 10 }} bgImage={bg2}>
        <div className="content1">
          <div>
            <h2>De nijl</h2>
            <img className="volger2" src={Volger} alt="" />
          </div>
          <div id="nijl">
            <p>
              De Nijl is de langste rivier ter wereld en stroomt door elf landen
              in Afrika. Het is de levensader van Egypte en heeft een enorme
              invloed op de geschiedenis, cultuur en economie van het land. De
              Nijl stroomt door de woestijn en zorgt voor vruchtbaar land langs
              zijn oevers. Dit heeft geleid tot de ontwikkeling van een
              bloeiende landbouwsector, die nog steeds een belangrijke rol
              speelt in de economie van Egypte. De Nijl is ook van groot belang
              voor de transportsector, waarbij de rivier fungeert als
              belangrijke vaarroute voor vracht- en passagiersvervoer. Daarnaast
              biedt de rivier ook mogelijkheden voor toerisme, waarbij bezoekers
              kunnen genieten van cruises op de Nijl en de prachtige
              landschappen langs de oevers.
            </p>          </div>

            <div>            <img src={Image} alt="" />
</div>
        </div>
      </Parallax>
    </div>
  );
}
export default HetOudeEgypte;
