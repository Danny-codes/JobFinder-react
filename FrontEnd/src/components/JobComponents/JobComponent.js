import styles from "./JobComponent.module.css";
import { useContext, useEffect, useState } from "react";
import JobsContext from "../../store/job-slice";
import HTMLReactParser from 'html-react-parser'
import { useParams } from "react-router-dom";
import EmailForm from "../EmailComponents/EmailForm";

const JobComponent =  () => {
  window.scrollTo(0, 0)
  const ctx = useContext(JobsContext);
  const [job, setJob] = useState({role : '', company: '', contract: '', state: '', description: ''});

  const id = useParams()
  
  useEffect(() => {
    ctx.api
    .get("jobs/selected/" + id.id)
    .then((response) => setJob(response.data))
    .catch((error) => console.log(error));
  }, [ctx.api, id.id])

  const applyButtonHandler = () => {
    ctx.showingModal(true)
  }
    
  return (
    <main className={styles.main}>
      <div className={styles.flex}>
        <div>
          <h2>{job.role}</h2>
          <span>{job.company}</span>
        </div>
        <div className={styles.contract}>
          <p>{job.contract}</p>
        </div>
      </div>

      <hr />
      <div>
        <h3>{job.state}</h3>
      {HTMLReactParser(job.description)}
      </div>
      <button onClick={applyButtonHandler}>Candidate-se</button>
      {ctx.showModal && <EmailForm /> }
    </main>
  );
};

export default JobComponent;
