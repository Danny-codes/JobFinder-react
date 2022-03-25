import styles from "./Main.module.css";
import JobsList from "../Reutilized/JobsList";
import { useContext } from "react";
import JobsContext from "../../store/job-slice";
import { Link } from "react-router-dom";

const Main = () => {
  const ctx = useContext(JobsContext)
  
  return (
    <main className={styles.main}>
      <div>
        <h1>Últimas vagas enviadas</h1>
         <JobsList data={ctx.latestJobsList}/>
        <div className={styles.button}>
          <Link to='/find-job'>Ver Mais Vagas</Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
