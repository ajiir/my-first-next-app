import Head from "next/head";
import styles from "../styles/Home.module.css";

import Player from "../components/Player";

export default function Home() {
  const videoJsOptions = {
    techOrder: ["youtube"],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: "https://www.youtube.com/watch?v=AwRiLr6xeJM",
        type: "video/youtube",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Миний тухай</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Сайн байна уу? <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>Өөрийн тухай товч танилцуулга</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Миний тухай &rarr;</h3>
            <p>
              Намайг Эрдэнэчимидийн Алтанхуяг гэдэг. 1989 онд төрсөн Программист
              мэргэжилтэй.
            </p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>ТОГЛОГЧИД &rarr;</h3>
            <p>ABU, Tierney, Bellerin Leno, ajiir, Huyagaa</p>
          </a>

          <Player {...videoJsOptions} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ajiir-about.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
