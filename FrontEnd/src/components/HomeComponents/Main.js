import styles from "./Main.module.css";
import JobsList from "../Reutilized/JobsList";
import { useContext } from "react";
import JobsContext from "../../store/job-slice";

const Main = () => {
  const ctx = useContext(JobsContext)
  
  return (
    <main className={styles.main}>
      <div>
        <h1>Últimas vagas enviadas</h1>
         <JobsList Dummy_Data={ctx.latestJobsList}/>
        <div className={styles.button}>
          <button>Ver Mais Vagas</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
