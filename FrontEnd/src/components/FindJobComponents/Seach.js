import JobsList from "../Reutilized/JobsList";
import styles from "./Search.module.css";
import SeeMoreButton from "./SeeMoreButton";
import { useState, useRef, useContext } from "react";
import JobsContext from "../../store/job-slice";
import { useParams } from "react-router-dom";

const Search = () => {
  let data;
  const {prev} = useParams()
  const [searched, setSearched] = useState(false);

  const ctx = useContext(JobsContext);

  const roleRef = useRef();
  const stateRef = useRef();
  const categoryRef = useRef();
  const cltRef = useRef();
  const pjRef = useRef();
  const freeRef = useRef();



  const submitHandler = (e) => {
    e.preventDefault();
    !searched && setSearched(true);

    const filterData = {
      role: roleRef.current.value,
      state: stateRef.current.value,
      category: categoryRef.current.value,
      contractRef: cltRef.current.value
    }
    
    ctx.filterJobs(filterData);

    console.log(filterData)
  };

    if(!searched && !prev){
      data = ctx.latestJobsList
    }else{
       data = ctx.filteredJobs
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
              <input
                ref={roleRef}
                id="position"
                type="text"
                placeholder="Digite o cargo"
              />
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
            <fieldset >
              <div>
                <label htmlFor="clt">CLT</label>
                <input ref={cltRef}type="checkbox" id="clt" value="CLT" />
              </div>

              <div className={styles.middle}>
                <label htmlFor="pj">PJ</label>
                <input ref={pjRef}type="checkbox" id="pj" value="PJ" />
              </div>

              <div>
                <label htmlFor="free">Free Lancer</label>
                <input ref={freeRef}type="checkbox" id="free" value="Free Lancer" />
              </div>
            </fieldset>
          </div>
        </section>
        <JobsList data={data} />
        <SeeMoreButton />
      </main>
    </>
  );
};

export default Search;
