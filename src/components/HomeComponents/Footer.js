import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const face_logo = <FontAwesomeIcon icon={faLinkedin} />;
  const insta_logo = <FontAwesomeIcon icon={faInstagram} />;
  const linkedin_logo = <FontAwesomeIcon icon={faFacebook} />;

  return (
    <footer className={styles.footer}>
        <div className={styles.flex_box}>
        <div className={styles.brand}>
        <img src="img/logo.png" alt="Character climbing an arrow" />
        <h2>JobFinder</h2>
        <p>A maneira mais fácil de encontrar seu próximo emprego.</p>
      </div>
      <div className={styles.nav}>
        <nav>
        <h2>Artigos recentes</h2>
          <ul>
            <li>
              <a>Como conseguir o primeiro emprego em tempos de crise?</a>
              <p>05 de fevereiro de 2019</p>
            </li>
             <li>
              <a>Como conseguir o primeiro emprego em tempos de crise?</a>
              <p>05 de fevereiro de 2019</p>
            </li>
            <li>
              <a>Como conseguir o primeiro emprego em tempos de crise?</a>
              <p>05 de fevereiro de 2019</p>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.contact}>
        <h2>Nos encontre nas redes sociais</h2>
        <a><span>{face_logo}</span> Facebook</a>
        <a><span>{insta_logo}</span> Instagram</a>
        <a><span>{linkedin_logo}</span> Linkedin</a>
      </div>

      </div>
      <div className={styles.copy}>
        <h3>&copy; horaDeCodar - 2022</h3>
      </div>
    </footer>
  );
};

export default Footer;
