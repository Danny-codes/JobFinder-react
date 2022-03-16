import styles from './Header.module.css'

import HeaderBanner from './HeaderBanner'

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
            <HeaderBanner />
        </header>
    )
}

export default Header