import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout } from "../src/components/Layout";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Voici mon blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ​
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue sur mon blog</h1>​
        <h2>bla bla </h2>
      </main>
      ​
      <footer className={styles.footer}>
        <p> pas d'idée</p>
      </footer>
    </div>
  );
};

export default Home;
