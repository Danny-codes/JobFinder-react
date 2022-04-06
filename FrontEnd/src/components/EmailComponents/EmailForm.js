import styles from "./EmailSend.module.css";
import { useContext, useRef } from "react";

import { Editor } from "@tinymce/tinymce-react";

import JobsContext from "../../store/job-slice";

const EmailForm = (props) => {
  const emailRef = useRef();
  const contentRef = useRef(null);

  const ctx = useContext(JobsContext);

  const submittingHandler = (e) => {
    e.preventDefault();

    ctx.api
      .post("/email", {
        candidateEmail: emailRef.current.value,
        recruiterEmail: "test@gmail.com",
        subject: "VAGA",
        text: contentRef.current.getContent(),
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <main className={styles.div}>
      <div className={styles.background} onClick={ctx.hidingModal}></div>
      <div className={styles.box}>
        <div className={styles.flexItems}>
        <h3>Envie um email para o Recrutador!</h3>
        <button onClick={ctx.hidingModal} id="close">X</button>
        </div>
        <form onSubmit={submittingHandler}>
          <label htmlFor="email">Seu Email:</label>
          <input
            type="email"
            ref={emailRef}
            id="email"
            placeholder="Digite seu endereço de email"
          />
          <label htmlFor="text">Copie e cole seu curriculo aqui:</label>
          <Editor
          id="text"
            onInit={(evt, editor) => (contentRef.current = editor)}
            initialValue="Seu curriculo"
            init={{
              height: 200,
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
          <button id="send">Enviar</button>
        </form>
      </div>
    </main>
  );
};

export default EmailForm;
