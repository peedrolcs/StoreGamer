import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>

      <section className={styles.hero}>
        <h1>Equipamentos para elevar seu nível</h1>

        <p>
          Os melhores periféricos gamers para quem
          busca desempenho e qualidade.
        </p>

        <Link
          href="/produtos"
          className={styles.button}
        >
          Ver Produtos
        </Link>
      </section>

      <section className={styles.benefits}>
        <div className={styles.card}>
           Alta Performance
        </div>

        <div className={styles.card}>
          Entrega Rápida
        </div>

        <div className={styles.card}>
          Compra Segura
        </div>
      </section>

    </main>
  );
}