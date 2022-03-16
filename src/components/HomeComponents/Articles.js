import styles from "./Articles.module.css";

const dummy_articles = [
    {
        id: '1',
        name: 'Article title',
        date: '05 de Fevereiro de 2019 | 10 comentários',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: 'img/blog1.jpg'
    },
    {
        id: '2',
        name: 'Article title',
        date: '05 de Fevereiro de 2019 | 10 comentários',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: 'img/blog2.jpg'
    },
    {
        id: '3',
        name: 'Article title',
        date: '05 de Fevereiro de 2019 | 10 comentários',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: 'img/blog3.jpg'
    },
    
]

const Articles = () => {
  return (
    <section className={styles.section}>
        <div className={styles.textDiv}>
          <h2>Últimos artigos do nosso blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <div className={styles.flex}> 
        {dummy_articles.map(article => {
             return <article key={article.id}>
             <div key={article.id} className={styles.article}>
               <img src={article.img} alt="d"/>
               <h2>{article.name}</h2>
               <span>{article.date}</span>
               <p>
                 {article.text}
               </p>
             <button>Ler Post</button>
             </div>
           </article>
           
        })}
        </div>
        
    </section>
  );
};

export default Articles;
