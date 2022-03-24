import styles from "./HeaderBanner.module.css";
const HeaderBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.form}>
        <h1>A maneira mais fácil de encontrar seu novo emprego</h1>
        <p>
          Conecte-se de forma gratuita as melhores empresas e consiga o emprego
          dos seus sonhos
        </p>
        <form>
          <input type="text" name="job" placeholder="Digite o cargo" />
          <select name="region">
            <option value="">Todos os estados</option>
            <option>São Paulo</option>
            <option>Campinas</option>
            <option>Sumaré</option>
            <option>Guarulhos</option>
            <option>Campinas</option>
            <option>Paulinia</option>
            <option>Outro</option>
          </select>
          <select name="category">
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
