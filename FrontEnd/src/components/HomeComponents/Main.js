import styles from "./Main.module.css";
import JobsList from "../Reutilized/JobsList";
import { useContext, useEffect } from "react";
import JobsContext from "../../store/job-slice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { jobsActions } from "../../store/jobs-slice";
import { fetchJobs } from "../../store/jobs-actions";

const Main = () => {
  const ctx = useContext(JobsContext)
  const dispatch = useDispatch()
  const latestJob = useSelector(state => state.jobs.latestJobsList)

  useEffect(() => {
    dispatch(fetchJobs())
  }, []) 
  
  return (
    <main className={styles.main}>
      <div>
        <h1>Últimas vagas enviadas</h1>
         <JobsList data={latestJob}/>
        <div className={styles.button}>
          <Link to='/find-job'>Ver Mais Vagas</Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
