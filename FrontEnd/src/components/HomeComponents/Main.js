import styles from "./Main.module.css";
import JobsList from "../Reutilized/JobsList";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [jobs, setJobs] = useState([])

  const api= axios.create({
    baseURL: "http://localhost:3000/api"
  })

  useEffect(( ) => {
    api
      .get('/jobs')
      .then((response) => setJobs(response.data))
      .catch((err) => {
        console.log("ops! an error happened")
      })

  }, []);
  

  return (
    <main className={styles.main}>
      <div>
        <h1>Últimas vagas enviadas</h1>
         <JobsList Dummy_Data={jobs}/>
        <div className={styles.button}>
          <button>Ver Mais Vagas</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
