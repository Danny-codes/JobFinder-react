import { useRef, useContext } from "react";
import AuthContext from "../../store/authContext";
import styles from './LoginForm.module.css'
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate()
     const ctx = useContext(AuthContext)
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = async(e) => {
        e.preventDefault()

        await ctx.api
        .post('/auth', {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        })
        .then((response) => { ctx.settingToken(response.data.token)})
        .catch(err => console.log(err));

        const token = ctx.getToken()

       if(token !== undefined){
         navigate('/send-job')
       }

    }

  return (
    <main className={styles.main}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
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
        <button>Entrar</button>
      </form>
      <div>
        <Link to={'/signUp'}>Cadastrar</Link>
      </div>
    </main>
  );
};

export default LoginForm;
