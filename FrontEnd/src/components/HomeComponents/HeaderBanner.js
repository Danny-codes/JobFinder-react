import styles from "./HeaderBanner.module.css";
import { useContext, useRef } from "react";
import JobsContext from "../../store/job-slice";
import { useNavigate } from "react-router-dom";

const HeaderBanner = () => {
  const navigate = useNavigate()
  const roleRef = useRef()
  const stateRef = useRef()
  const categoryRef = useRef()

  const ctx = useContext(JobsContext)

  const submitingHandler =  (e) => {
    e.preventDefault()
    const filterData = {
      role: roleRef.current.value,
      state: stateRef.current.value,
      category: categoryRef.current.value
    }
     ctx.filterJobs(filterData)
     navigate('/find-job/prev')
  }

  return (
    <div className={styles.banner}>
      <div className={styles.form}>
        <h1>A maneira mais fácil de encontrar seu novo emprego</h1>
        <p>
          Conecte-se de forma gratuita as melhores empresas e consiga o emprego
          dos seus sonhos
        </p>
        <form onSubmit={submitingHandler}>
          <input ref={roleRef} type="text" name="job" placeholder="Digite o cargo" />
          <select ref={stateRef} name="region">
            <option value="">Todos os estados</option>
            <option>MJ</option>
            <option>RJ</option>
            <option>PR</option>
            <option>SP</option>
            <option>AM</option>
            <option>PA</option>
            <option>Outro</option>
          </select>
          <select ref={categoryRef} name="category">
            <option value="">Categoria</option>
            <option>TI</option>
            <option>Consultoria</option>
            <option>Construção</option>
            <option>Serviços Gerais</option>
            <option>Comercio</option>
            <option>Logistica</option>
            <option>Outro</option>
          </select>
          <input type="submit" value="Pesquisar" />
        </form>
      </div>
    </div>
  );
};

export default HeaderBanner;
