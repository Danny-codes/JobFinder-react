import { useRef,useContext } from "react";
import styles from './LoginForm.module.css'
import AuthContext from "../../store/authContext";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const ctx = useContext(AuthContext)
    const navigate = useNavigate()

    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();

    const submitHandler = async(e) => {
        e.preventDefault()

        await ctx.api
        .post('/user', {
            email: emailRef.current.value,
            name: nameRef.current.value,
            password: passwordRef.current.value,
        })
        .then((response) => {ctx.settingToken(response.data.token)})
        .catch(err => console.log(err))

        const token = ctx.getToken()

        if(token !== undefined){
          navigate('/send-job')
        }
    }

  return (
    <main className={styles.main}>
      <h1>Cadastre-se</h1>
      <form onSubmit={submitHandler}>
        <input
          ref={nameRef}
          type="text"
          id="name"
          placeholder="Insira o seu Nome Completo"
        />
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
        <button>Cadastrar</button>
      </form>
    </main>
  );
};

export default SignUp;