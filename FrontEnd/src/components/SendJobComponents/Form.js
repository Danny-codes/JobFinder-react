import styles from './Form.module.css'
import axios from 'axios'
import {useRef } from 'react'
const Form = () => {
    const roleRef = useRef()
    const descriptionRef = useRef()
    const companyRef = useRef()
    const contractRef = useRef()
    const statetRef = useRef()
    const categoryRef = useRef()


          const sendJobHandler = (e) => {
              e.preventDefault()

            const api= axios.create({
                baseURL: "http://localhost:3000/api"
              })
            
                api
                  .post('/jobs', {
                      role: roleRef.current.value,
                      description: descriptionRef.current.value,
                      company: companyRef.current.value,
                      contract: contractRef.current.value,
                      state: statetRef.current.value,
                      category: categoryRef.current.value
                  })
                  .then((response) => console.log('certo'))
                  .catch((err) => {
                    console.log("ops! an error happened")
                  })
          }
    
    return(
        <main className={styles.main}>
            <h1>Preencha os dados da vaga</h1>
            <form onSubmit={sendJobHandler}>
                <label htmlFor='title'>Cargo *</label>
                <input ref={roleRef} type='text'  id='title' placeholder='Insira o cargo da vaga'/>
                <label htmlFor='title'>Descrição da vaga *</label>
                <textarea ref={descriptionRef}  type='text-field'  id='title' placeholder='Insira a descrição da vaga'/>
                <label htmlFor='company'>Nome da empresa *</label>
                <input ref={companyRef} type='text'  id='company' placeholder='Insira o nome da empresa'/>
                <label htmlFor='location'>Cidade *</label>
                <select ref={statetRef} name='location' id='location'>
                    <option>Escolha uma Cidade</option>
                    <option>São Paulo</option>
                    <option>Campinas</option>
                    <option>Sumaré</option>
                    <option>Guarulhos</option>
                    <option>Campinas</option>
                    <option>Paulinia</option>
                    <option>Outro</option>
                </select>
                <label htmlFor='category'>Categoria *</label>
                <select ref={categoryRef} name='category' id='category'>
                    <option>Escolha uma Categoria</option>
                    <option>TI</option>
                    <option>Consultoria</option>
                    <option>Construção</option>
                    <option>Serviços Gerais</option>
                    <option>Comercio</option>
                    <option>Logistica</option>
                    <option>Outro</option>
                </select>
                <label htmlFor='contract'>Tipo de contratação *</label>
                <select ref={contractRef} name='contract' id='contract'>
                    <option>Escolha uma opção</option>
                    <option>PJ</option>
                    <option>CLT</option>
                    <option>Free Lancer</option>
                </select>
                <div> 

                    <button>Enviar</button>
                </div>
            </form>
        </main>
    )
}

export default Form