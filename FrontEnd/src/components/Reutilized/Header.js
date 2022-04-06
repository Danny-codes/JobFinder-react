import styles from './Header.module.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import AuthContext from '../../store/authContext';


import { useState, useContext } from 'react';

const Header = () => {
    const ctx = useContext(AuthContext)
    const bars = <FontAwesomeIcon icon={faBars} />;
    const close = <FontAwesomeIcon icon={faTimes} />;

    const [showMenu, setShowMenu] = useState()

    const barsClickHandler = () => {
        if(showMenu){
            setShowMenu(false)
        }
       else{
           setShowMenu(true)
       }
    }

    return(
        <header className={styles.header}>
            <div className={styles.header_content}>
                <div className={styles.logodiv}>
                <Link to='/'><div class={styles.logo} id="logo" alt="JobFinder" /></Link>
                </div>
                <div className={styles.navigation}>
                <button onClick={barsClickHandler}>{!showMenu ? bars : close}</button>
                <nav className={showMenu ? styles.navshowing : styles.notshow}>
                    <li><Link to='/find-job'>Encontrar vaga</Link></li>
                    {ctx.loggedIn && <li><Link to='/send-job'>Enviar vaga</Link></li>}
                    {!ctx.loggedIn && <li><Link to='/signIn'>Página do Recrutador</Link></li>}
                </nav>
                </div>
            </div>
        </header>
    )
}

export default Header