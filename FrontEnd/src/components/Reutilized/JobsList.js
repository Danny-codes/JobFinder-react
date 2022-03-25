import styles from './JobsList.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const JobsList = (props) => {
    const marker = <FontAwesomeIcon icon={faMapMarkerAlt} />;

    console.log(props.data)
    return (
        <ul className={styles.ul}>
          {props.data && props.data.map((item) => (
            <li key={item.id}>
              <a>
                <div className={styles.flex_box}>
                    <div className={styles.name}>
                      <h3>{item.company}</h3>
                      <p>{item.role}</p>
                    </div>
                  <div className={styles.location}>
                    <p>
                      {marker} {item.state}
                    </p>
                  </div>
                  <div className={styles.type}>
                    <span>{item.contract}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
    )
}

export default JobsList