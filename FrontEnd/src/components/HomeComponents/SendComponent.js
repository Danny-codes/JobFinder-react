import styles from './SendComponent.module.css'

const SendComponent = () => {

    return(
        <section className={styles.section}>
            <div >
                <h3>Envie uma vaga que será vista por milhares de candidatos</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Enviar Vaga</button>
            </div>
        </section>
    )
}

export default SendComponent