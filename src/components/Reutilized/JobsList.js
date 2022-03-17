import styles from './JobsList.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const JobsList = (props) => {
    const marker = <FontAwesomeIcon icon={faMapMarkerAlt} />;

    return (
        <ul className={styles.ul}>
          {props.Dummy_Data.map((item) => (
            <li key={props.Dummy_Data.id}>
              <a>
                <div className={styles.flex_box}>
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
                </div>
              </a>
            </li>
          ))}
        </ul>
    )
}

export default JobsList