import styles from "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Dummy_Data = [
  {
    path: "img/facebooklogo.png",
    name: "Facebook",
    position: "Developer",
    location: "Menio Park, California",
    type: "CLT",
    id: "1",
  },
  {
    path: "img/googlelogo.png",
    name: "Google",
    position: "FrontEndDeveloper",
    location: "Mountain View, California",
    type: "PJ",
    id: "2",
  },
  {
    path: "img/ibmlogo.png",
    name: "IBM",
    position: "Intern",
    location: "Armonk, New York",
    type: "Home Office",
    id: "3",
  },
];

const Main = () => {
  const marker = <FontAwesomeIcon icon={faMapMarkerAlt} />;

  return (
    <main className={styles.main}>
      <div>
        <h1>Últimas vagas enviadas</h1>
        <ul>
          {Dummy_Data.map((item) => (
            <li>
              <a>
                <img src={item.path} alt={item.name} />
                <div className={styles.name}>
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </div>
                <div className={styles.location}>
                  <p>
                    {marker} {item.location}
                  </p>
                </div>
                <div className={styles.type}>
                  <span>{item.type}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
