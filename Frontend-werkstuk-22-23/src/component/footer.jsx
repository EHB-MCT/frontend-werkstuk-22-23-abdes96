import "../styles/Footer.css";
import wiki from "../assets/wikiwallF.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={wiki} alt="" />
        <div className="text">
          <p>
            Wikiwallis een online encyclopedie die ernaar streeft informatie te
            bieden in alle erkende talen ter wereld, die vrij herbruikbaar,
            objectief en verifieerbaar is. Het project is gebaseerd op vijf
            basisprincipes. De Nederlandstalige versie startte op 19 juni 2001
            en is met meer dan 2,1 miljoen artikelen de op vijf na grootste van
            circa 330 taalversies.
          </p>
          <p>
            De encyclopedie is vrij bewerkbaar. Dat houdt in dat iedereen tekst
            en afbeeldingen kan toevoegen of aanpassen, met inachtneming van de
            basisregels. Voor de bewerkers zijn er diverse hulppagina’s
            beschikbaar. Er is ook een snelcursus voor nieuwelingen. Zaken
            uitproberen kan in de zandbak en vragen kunnen gesteld worden bij de
            helpdesk. Voor privacyvragen kunt u hier terecht.
          </p>
        </div>
      </div>
      <div className="footer-placeholder" />
    </>
  );
}

export default Footer;
