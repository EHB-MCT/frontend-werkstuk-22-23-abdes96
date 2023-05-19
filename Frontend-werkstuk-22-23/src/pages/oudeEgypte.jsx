import ParallaxText from "../component/ParallaxComponent/Parallaxtext";
import "../styles/HetOudeEgypte.css";
import imageI from "../assets/Groupe.png";
import Volger from "../assets/volger.png";
import Volger1 from "../assets/volger1.png";
import Denijl from "../assets/denijl.jpg";
import bg from "../assets/bg.jpg";
import clouds from "../assets/clouds.png";
import Tijd from "../assets/tiijd.png";
import Image from "../assets/image.png";
import { Parallax } from "react-parallax";
import { animated, useSpring, useInView } from "@react-spring/web";
import { motion, useScroll } from "framer-motion";
import Navbar from "../component/navbar";
import { useRef } from "react";
import texti from "../assets/texti.png";
import Arch from "../assets/architectuur.png";
import Goden from "../assets/goden.png";
import Piramide from "../assets/piramide.png";
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
      rootMargin: "-20% ",
    }
  );

  const [ref, springs] = useInView(
    () => ({
      from: { x: -500, opacity: 0 },
      to: { x: 0, opacity: 1 },
      config: { tension: 200, friction: 10 },
    }),
    {
      rootMargin: "-40% 0% ",
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
      delay: 5,
    }),
    {
      rootMargin: "-40% ",
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
      rootMargin: "-50% 0%",
    }
  );
  const [ref3, springs3] = useInView(
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

  const refsvg = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refsvg,
    offset: [0, 1],
  });

  return (
    <>
      <Navbar showOnScroll={false} />

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
        <Parallax strength={200} blur={{ min: -5, max: 6 }} bgImage={Denijl}>
          <div className="content1">
            <div className="firstsection">
              <animated.div ref={ref} style={springs}>
                <div>
                  <h2>De nijl</h2>
                  <img className="volger2" src={Volger1} alt="" />
                </div>
              </animated.div>
              <animated.div ref={ref} style={springs}>
                <p>
                  De Nijl is de langste rivier ter wereld en stroomt door elf
                  landen in Afrika. Het is de levensader van Egypte en heeft een
                  enorme invloed op de geschiedenis, cultuur en economie van het
                  land. De Nijl stroomt door de woestijn en zorgt voor
                  vruchtbaar land langs zijn oevers. Dit heeft geleid tot de
                  ontwikkeling van een bloeiende landbouwsector, die nog steeds
                  een belangrijke rol speelt in de economie van Egypte. De Nijl
                  is ook van groot belang voor de transportsector, waarbij de
                  rivier fungeert als belangrijke vaarroute voor vracht- en
                  passagiersvervoer. Daarnaast biedt de rivier ook mogelijkheden
                  voor toerisme, waarbij bezoekers kunnen genieten van cruises
                  op de Nijl en de prachtige landschappen langs de oevers.
                </p>
              </animated.div>
              <animated.div ref={ref3} style={springs3}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring" }}
                >
                  <div id="denijl">
                    <img src={Image} alt="" />
                  </div>
                </motion.div>
              </animated.div>
            </div>
            <div className="secondsection">
              <div className="denijl1">
                <div id="img">
                  <img id="textil" src={texti} alt="" />
                  <h2>De samenleving</h2>
                </div>
                <div ref={refsvg} className="denijlPath">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="500.9"
                    height="2000.506"
                    viewBox="0 0 1048.9 4152.506"
                    opacity={0.7}
                  >
                    <g
                      id="Groupe_80"
                      data-name="Groupe 80"
                      transform="translate(-522.496 -477.901)"
                    >
                      <motion.line
                        id="Ligne_14"
                        data-name="Ligne 14"
                        y1="15"
                        x2="520"
                        transform="translate(552 3554)"
                        fill="none"
                        stroke="#000"
                        strokeWidth="5"
                        style={{ pathLength: scrollYProgress }}
                      />
                      <motion.line
                        y1="15"
                        x2="720"
                        transform="translate(600 4618)"
                        fill="none"
                        stroke="#000"
                        strokeWidth="5"
                        style={{ pathLength: scrollYProgress }}
                      />

                      <motion.line
                        style={{ pathLength: scrollYProgress }}
                        id="Ligne_16"
                        data-name="Ligne 16"
                        x2="405"
                        transform="translate(555 4085)"
                        fill="none"
                        stroke="#000"
                        strokeWidth="5"
                      />

                      <motion.path
                        id="Tracé_58"
                        data-name="Tracé 58"
                        d="M5713.28,1866.318c-882.582,232.009-133.388,289.024-595.135,635.084-272.895,204.521,303.933,203.311,99.362,480.159-362.384,271.08,181.192,298.475-146.123,465.737,304.753,460.6-76.485,511.678,146.123,836.31,251.331,46.141-204.572,380.666-204.572,380.666s-251.331,271.08-52.6,478.716-339.005,461.413,52.6,870.917"
                        transform="translate(-4142.52 -1385.999)"
                        fill="none"
                        stroke="#000"
                        strokeWidth="5"
                        style={{ pathLength: scrollYProgress }}
                      />

                      <motion.path
                        id="Tracé_60"
                        data-name="Tracé 60"
                        d="M4972.268,1866.318c-110.7,29.1-16.731,36.253-74.648,79.659-34.229,25.653,38.123,25.5,12.463,60.227-45.454,34,22.728,37.438-18.328,58.418,38.226,57.774-9.594,64.18,18.328,104.9,31.525,5.788-25.66,47.747-25.66,47.747s-31.524,34-6.6,60.046-42.521,57.875,6.6,109.24"
                        transform="matrix(0.087, 0.996, -0.996, 0.087, 2535.615, -2500.135)"
                        fill="none"
                        stroke="#000"
                        strokeWidth="5"
                        style={{ pathLength: scrollYProgress }}

                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <img className="volger2" src={Volger} alt="" />{" "}
                  <p>
                    De samenleving van het oude Egypte was georganiseerd rond de
                    farao en religie. Het was sterk hiërarchisch met
                    verschillende klassen van mensen. De oude Egyptenaren waren
                    bekwaam in ambachten en bouwden indrukwekkende monumenten.
                    Hun economie was goed georganiseerd en landbouw speelde een
                    belangrijke rol. Het was een diepgaande en rijke cultuur met
                    invloeden die nog steeds voelbaar zijn vandaag de dag.
                  </p>
                </div>
              </div>

              <div className="denijl2">
                <div className="leftnijl">
                  <div>
                    <img className="volger2" src={Volger1} alt="" />
                    <p>
                      Het oude Egypte is vooral bekend door zijn kunstwerken die
                      over musea in de hele wereld zijn verspreid en ook in
                      Egypte zelf te bewonderen zijn. De Egyptische kunst bleef
                      goed bewaard omdat de Egyptenaren veel waarde hechtten aan
                      religie en het leven na de dood, waarvoor duurzame
                      materialen werden gekozen, zodat de monumenten en
                      sculpturen de tand des tijds zouden kunnen doorstaan.
                      Zoals echter uit het voorgaande blijkt, kunnen de resten
                      die bewaard zijn gebleven een enigszins vertekend beeld
                      geven.
                    </p>
                  </div>
                  <h2>Architectuur</h2>
                </div>

                <div id="img">
                  <img id="textil" src={Arch} alt="" />
                </div>
              </div>
              <div className="denijl2">
                <div id="img">
                  <img id="textil" src={Piramide} alt="" />
                  <h2>Piramide Gizeh</h2>
                </div>
                <div>
                  <img className="volger2" src={Volger} alt="" />{" "}
                  <p>
                    De Grote Piramide van Gizeh, ook bekend als de Piramide van
                    Cheops, is een wonder van de oude techniek gelegen in Gizeh,
                    Egypte. Het werd meer dan 4.500 jaar geleden gebouwd,
                    tijdens de Oude Rijk periode van het oude Egypte, en is de
                    oudste en grootste van de drie piramides in Gizeh.
                  </p>
                </div>
              </div>
              <div className="denijl2">
                <div className="leftnijl">
                  <div>
                    <img className="volger2" src={Volger1} alt="" />
                    <p>
                      De goden van het oude Egypte waren honderden goden en
                      godinnen die werden vereerd door de Egyptenaren. De meest
                      bekende waren Ra, Osiris, Isis en Horus. Ze hadden
                      verschillende rollen en verantwoordelijkheden in de
                      Egyptische mythologie en werden vereerd in tempels en
                      heiligdommen. Hun verhalen zijn nog steeds een bron van
                      fascinatie.
                    </p>
                  </div>
                  <h2>Architectuur</h2>
                </div>

                <div id="img">
                  <img id="textil" src={Goden} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
}
export default HetOudeEgypte;
