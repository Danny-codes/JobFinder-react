import styles from './Form.module.css'
import axios from 'axios'
import {useRef } from 'react'
const Form = () => {
    const titleRef = useRef()
    const descriptionRef = useRef()
    const companyRef = useRef()
    const contractRef = useRef()
    const locationtRef = useRef()

          const sendJobHandler = (e) => {
              e.preventDefault()

            const api= axios.create({
                baseURL: "http://localhost:3000/api"
              })
            
                api
                  .post('/jobs', {
                      title: titleRef.current.value,
                      description: descriptionRef.current.value,
                      company: companyRef.current.value,
                      type: contractRef.current.value,
                      location: locationtRef.current.value
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
                <label htmlFor='title'>Título da vaga *</label>
                <input ref={titleRef} type='text'  id='title' placeholder='Insira o título da vaga'/>
                <label htmlFor='title'>Descrição da vaga *</label>
                <textarea ref={descriptionRef}  type='text-field'  id='title' placeholder='Insira a descrição da vaga'/>
                <label htmlFor='company'>Nome da empresa *</label>
                <input ref={companyRef} type='text'  id='company' placeholder='Insira o nome da empresa'/>
                <label htmlFor='location'>Endereço</label>
                <input ref={locationtRef} type='text'  id='endereco' placeholder='Insira o endereço da empresa'/>
                <label htmlFor='contract'>Tipo de contratação *</label>
                <select ref={contractRef} name='contract' id='contract'>
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