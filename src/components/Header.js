import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <nav>
                <div>
                <img id="logo" src="img/logo.png" alt="JobFinder" />
                <ul>
                    <li><a>Encontrar vaga</a></li>
                    <li><a>Enviar vaga</a></li>
                    <li><a>Contato</a></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header