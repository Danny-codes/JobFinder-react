import styles from "./Estatistic.module.css";

const Estatistics = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h2>Estatísticas do JobFinder</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.data}>
        <div>
            <span>150</span>
            <p>Vagas abertas</p>
        </div>
        <div>
        <span>250</span>
            <p>Candidatos contratados</p>
        </div>
        <div>
        <span>50</span>
            <p>Empresas Participantes</p>
        </div>
        <div>
        <span>550</span>
            <p>Candidatos</p>
        </div>
      </div>
    </section>
  );
};

export default Estatistics;
