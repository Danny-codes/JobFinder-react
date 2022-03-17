import styles from "./Main.module.css";
import JobsList from "../Reutilized/JobsList";

const Dummy_Data = [
  {
    path: "img/facebooklogo.png",
    name: "Facebook",
    position: "Developer",
    location: "Menio Park, California",
    type: "CLT",
    id: "1",
  },
  {
    path: "img/googlelogo.png",
    name: "Google",
    position: "FrontEndDeveloper",
    location: "Mountain View, California",
    type: "PJ",
    id: "2",
  },
  {
    path: "img/ibmlogo.png",
    name: "IBM",
    position: "Intern",
    location: "Armonk, New York",
    type: "Home Office",
    id: "3",
  },
  {
    path: "img/ibmlogo.png",
    name: "IBM",
    position: "Intern",
    location: "Armonk, New York",
    type: "Home Office",
    id: "4",
  },
  {
    path: "img/facebooklogo.png",
    name: "Facebook",
    position: "Developer",
    location: "Menio Park, California",
    type: "CLT",
    id: "1",
  },
];

const Main = () => {

  return (
    <main className={styles.main}>
      <div>
        <h1>Últimas vagas enviadas</h1>
         <JobsList Dummy_Data={Dummy_Data}/>
        <div className={styles.button}>
          <button>Ver Mais Vagas</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
