import JobsList from "../Reutilized/JobsList";
import styles from "./Search.module.css";
import SeeMoreButton from "./SeeMoreButton";
const Search = (props) => {
  const dummy_data = props.dummy_data;
  return (
    <>
      <main className={styles.main}>
        <section>
          <h1>Busque a sua vaga</h1>
          <div>
            <form>
              <label htmlFor="position" hidden>
                Cargo
              </label>
              <input id="position" type="text" placeholder="Digite o cargo" />
              <select name="region">
                <option value="">Todos os estados</option>
              </select>
              <select name="category">
                <option value="">Categoria</option>
              </select>
              <button>Pesquisar</button>
            </form>
            <fieldset>
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
      <JobsList Dummy_Data={dummy_data} />
      <SeeMoreButton />
      </main>
    </>
  );
};

export default Search;
