import Link from "next/link";
import styles from "./ProductCard.module.css";

export default function ProductCard({ produto }) {
  return (
    <div className={styles.card}>

      <img
        src={produto.imagem}
        alt={produto.nome}
        className={styles.image}
      />

      <h2>{produto.nome}</h2>

      <p className={styles.price}>
        R$ {produto.preco}
      </p>

      <Link
        href={`/produto/${produto.id}`}
        className={styles.button}
      >
        Ver Detalhes
      </Link>

    </div>
  );
}