import Input from "../Reutilized/Inputs";
import { useRef, useContext } from "react";
import AuthContext from "../../store/authContext";
import styles from './LoginForm.module.css'
import { Link } from "react-router-dom";
const LoginForm = () => {
    const ctx = useContext(AuthContext)

    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault()

        ctx.api
        .post('/auth', {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        })
        .then((response) => {console.log(response.data)})
        .catch(err => console.log(err))

        console.log(emailRef)
    }

  return (
    <main className={styles.main}>
      <h1>Login</h1>
      <form>
        <input
          ref={emailRef}
          type="email"
          id="email"
          placeholder="Insira o seu Email"
        />
        <input
          ref={passwordRef}
          type="password"
          id="password"
          placeholder="Insira a sua senha"
        />
        <button onSubmit={submitHandler}>Entrar</button>
      </form>
      <div>
        <Link to={'/signUp'}>Cadastrar</Link>
      </div>
    </main>
  );
};

export default LoginForm;
