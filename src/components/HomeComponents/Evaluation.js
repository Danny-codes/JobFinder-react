import { faFemale } from "@fortawesome/free-solid-svg-icons";
import styles from "./Evaluation.module.css";

const Evaltuation = () => {
  const Dummy_evaluations = [
    {
      id: '1',
      gender: "female",
      name: "Bruna",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: '2',
      gender: "male",
      name: "Tiago",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: '3',
      gender: "female",
      name: "Bianca",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: '4',
      gender: "male",
      name: "Pedro",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h2>Veja o que os candidatos dizem</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {Dummy_evaluations.map((evaluation) => {
        return <div key={evaluation.id} className={styles.depoiment}>
          <div className={styles.comment}>
            <p>{evaluation.text}</p>
          </div>
          <div className={styles.avatar}>
            {evaluation.gender === 'female' && <img src="img/avatar2.png" alt="avatar" />}
            {evaluation.gender !== 'female' && <img src="img/avatar1.png" alt="avatar" />}
            <span>{evaluation.name}</span>
          </div>
        </div>;
      })}
    </section>
  );
};

export default Evaltuation;
