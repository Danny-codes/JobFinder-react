import styles from './Form.module.css'

const Form = () => {
    
    return(
        <main className={styles.main}>
            <h1>Preencha os dados da vaga</h1>
            <form>
                <label htmlFor='title'>Título da vaga *</label>
                <input type='text'  id='title' placeholder='Insira o título da vaga'/>
                <label htmlFor='title'>Descrição da vaga *</label>
                <textarea  type='text-field'  id='title' placeholder='Insira a descrição da vaga'/>
                <label htmlFor='company'>Nome da empresa *</label>
                <input type='text'  id='company' placeholder='Insira o nome da empresa'/>
                <label htmlFor='contract'>Tipo de contratação *</label>
                <select name='contract' id='contract'>
                    <option>Escolha uma opção</option>
                    <option>PJ</option>
                    <option>CLT</option>
                    <option>Insira o nome da empresa</option>
                </select>
                <div> 

                    <button>Enviar</button>
                </div>
            </form>
        </main>
    )
}

export default Form