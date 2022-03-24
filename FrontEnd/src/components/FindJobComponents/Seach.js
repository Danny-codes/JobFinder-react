import JobsList from "../Reutilized/JobsList";
import styles from "./Search.module.css";
import SeeMoreButton from "./SeeMoreButton";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Search = () => {
  const [jobs, setJobs] = useState([]);
  const roleRef = useRef()
  const stateRef = useRef()
  const categoryRef = useRef()
  const contractRef = useRef()


  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  useEffect(() => {
    api
      .get("/jobs")
      .then((response) => setJobs(response.data))
      .catch((err) => {
        console.log("ops! an error happened");
      });
  }, []);

  const submitHandler = (e) => { 
    e.preventDefault()

      api
        .post('/jobs/filtered', {
          role: roleRef.current.value,
          state: stateRef.current.value,
          category: categoryRef.current.value,
          contract: categoryRef.current.value
        })
        .then(response => {
          setJobs(response.data) 
          console.log(response)} )
        .catch(error => console.log(error))
    }
  
  return (
    <>
      <main className={styles.main}>
        <section>
          <h1>Busque a sua vaga</h1>
          <div>
            <form onSubmit={submitHandler}>
              <label htmlFor="position" hidden>
                Cargo
              </label>
              <input  ref={roleRef} id="position" type="text" placeholder="Digite o cargo" />
              <select ref={stateRef} name="region">
                <option value="">Todos os estados</option>
                <option>São Paulo</option>
                <option>Campinas</option>
                <option>Sumaré</option>
                <option>Guarulhos</option>
                <option>Campinas</option>
                <option>Paulinia</option>
                <option>Outro</option>
              </select>
              <select ref={categoryRef} name="category">
                <option value="">Todas Categorias</option>
                <option>TI</option>
                <option>Consultoria</option>
                <option>Construção</option>
                <option>Serviços Gerais</option>
                <option>Comercio</option>
                <option>Logistica</option>
                <option>Outro</option>
              </select>
              <button>Pesquisar</button>
            </form>
            <fieldset ref={contractRef}>
              <div>
                <label htmlFor="clt">CLT</label>
                <input type="checkbox" id="clt" value="CLT" />
              </div>

              <div className={styles.middle}>
                <label htmlFor="pj">PJ</label>
                <input type="checkbox" id="pj" value="PJ" />
              </div>

              <div>
                <label htmlFor="free">Free Lancer</label>
                <input type="checkbox" id="free" value="Free Lancer" />
              </div>
            </fieldset>
          </div>
        </section>
        <JobsList Dummy_Data={jobs} />
        <SeeMoreButton />
      </main>
    </>
  );
};

export default Search;
