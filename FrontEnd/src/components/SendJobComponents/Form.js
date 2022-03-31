import styles from "./Form.module.css";
import { useRef, useContext, useEffect, useState } from "react";
import JobsContext from "../../store/job-slice";
import SuccessModel from "./SuccessModel";
import { Editor } from "@tinymce/tinymce-react";
import AuthContext from "../../store/authContext";

const Form = () => {
  const Jobsctx = useContext(JobsContext);
  const AuthCtx = useContext(AuthContext)
  const [id, setId] = useState()
  const roleRef = useRef();
  const descriptionRef = useRef(null)
  const companyRef = useRef();
  const contractRef = useRef();
  const statetRef = useRef();
  const categoryRef = useRef();

  const sendJobHandler = (e) => {
    e.preventDefault();

    AuthCtx.api
      .post("/jobs", {
        role: roleRef.current.value.toLowerCase(),
        description: descriptionRef.current.getContent(),
        company: companyRef.current.value.toLowerCase(),
        contract: contractRef.current.value,
        state: statetRef.current.value,
        category: categoryRef.current.value,
      })
      .then((response) => setId(response.data.id))
      .catch((err) => {
        console.log("ops! an error happened");
      });

      Jobsctx.showingModal();

   // e.target.reset();

    console.log(AuthCtx.token)
   
  };
  const token = AuthCtx.getToken()

  console.log('piu' + token)

  return (
    <main>
      <div className={styles.main}>
        <h1>Preencha os dados da vaga</h1>
        <form onSubmit={sendJobHandler}>
          <label htmlFor="title">Cargo *</label>
          <input
            ref={roleRef}
            type="text"
            id="title"
            placeholder="Insira o cargo da vaga"
          />
          <label htmlFor="title">Descrição da vaga *</label>
          <Editor
            onInit={(evt, editor) => descriptionRef.current = editor}
            initialValue="<p>Your Job Description</p>"
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <label htmlFor="company">Nome da empresa *</label>
          <input
            ref={companyRef}
            type="text"
            id="company"
            placeholder="Insira o nome da empresa"
          />
          <label htmlFor="location">Cidade *</label>
          <select ref={statetRef} name="location" id="location">
            <option>Escolha uma Cidade</option>
            <option>São Paulo</option>
            <option>Campinas</option>
            <option>Sumaré</option>
            <option>Guarulhos</option>
            <option>Campinas</option>
            <option>Paulinia</option>
            <option>Outro</option>
          </select>
          <label htmlFor="category">Categoria *</label>
          <select ref={categoryRef} name="category" id="category">
            <option>Escolha uma Categoria</option>
            <option>TI</option>
            <option>Consultoria</option>
            <option>Construção</option>
            <option>Serviços Gerais</option>
            <option>Comercio</option>
            <option>Logistica</option>
            <option>Outro</option>
          </select>
          <label htmlFor="contract">Tipo de contratação *</label>
          <select ref={contractRef} name="contract" id="contract">
            <option>Escolha uma opção</option>
            <option>PJ</option>
            <option>CLT</option>
            <option>Free Lancer</option>
          </select>
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </div>
      {Jobsctx.showModal && <SuccessModel id={id}/>}
    </main>
  );
};

export default Form;
