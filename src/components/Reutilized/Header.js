import styles from './Header.module.css'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className={styles.header}>
            <nav>
                <div>
                <img id="logo" src="img/logo.png" alt="JobFinder" />
                <ul>
                    <li><Link to='find-job'>Encontrar vaga</Link></li>
                    <li><Link to='send-job'>Enviar vaga</Link></li>
                    <li><Link to=''>Contato</Link></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header