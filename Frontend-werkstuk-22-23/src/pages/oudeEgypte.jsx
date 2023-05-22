import "../styles/HetOudeEgypte.css";
import Navbar from "../component/navbar";
import Parallax1 from "../component/ParallaxComponent/Parallax1";
import Parallax2 from "../component/ParallaxComponent/Parallax2";
import { motion } from "framer-motion";
import useEgypt from "../service/Api";
import { TypeAnimation } from "react-type-animation";

function HetOudeEgypte() {
  const { data, loading, error } = useEgypt();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar showOnScroll={false} />

      <div className="outer1">
        <Parallax1 />
        <Parallax2 />

        <div className="Egypt">
          <h2> Egypte vandaag </h2>

          {loading && <p>Loading data...</p>}
          {error && <p>Error loading data: {error.message}</p>}
          {data &&
            data.map((country) => (
              <div className="country-container" key={country.name.common}>
                <div className="flag-container">
                  <img
                    src={country.flags.svg}
                    alt="Country flag"
                    className="flag"
                  />
                </div>
                <p>Capital: {country.capital[0]}</p>
                <div className="info-container">
                  <TypeAnimation
                    className="black-text"
                    cursor={true}
                    sequence={[ `Language: ${country.languages.ara}` ]}
                  />
                  <TypeAnimation
                    className="black-text"
                    cursor={true}
                    sequence={[ `Continent: ${country.region}` ]}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
export default HetOudeEgypte;
