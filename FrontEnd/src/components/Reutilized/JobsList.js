import styles from "./JobsList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JobsList = (props) => {
  const marker = <FontAwesomeIcon icon={faMapMarkerAlt} />;

  console.log(props.data);
  return (
    <ul className={styles.ul}>
      {props.data &&
        props.data.map((job) => (
          <li key={job.id}>
            <Link to={'/job/' + job.id}>
              <div className={styles.flex_box}>
                <div className={styles.name}>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <div className={styles.location}>
                  <p>
                    {marker} {job.state}
                  </p>
                </div>
                <div className={styles.type}>
                  <span>{job.contract}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default JobsList;
