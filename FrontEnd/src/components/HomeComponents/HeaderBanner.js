import styles from './HeaderBanner.module.css'
const HeaderBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.form}>
                <h1>A maneira mais fácil de encontrar seu novo emprego</h1>
                <p>Conecte-se de forma gratuita as melhores empresas e consiga o emprego dos seus sonhos</p>
                <form>
                    <input type="text" name="job" placeholder="Digite o cargo" />
                    <select name="region">
                        <option value="">Todos os estados</option>
                    </select>
                    <select name="category">
                        <option value="">Categoria</option>
                    </select>
                    <input type="submit" value="Pesquisar" />
                </form>
            </div>
        </div>
    )
}

export default HeaderBanner