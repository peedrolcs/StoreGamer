"use client";

import { useParams } from "next/navigation";

import products from "@/data/products";
import styles from "./page.module.css";

import { useCart } from "@/context/CartContext";

export default function ProdutoDetalhe() {

  const params = useParams();

  const { addToCart } = useCart();

  const produto = products.find(
    (p) => p.id === Number(params.id)
  );

  if (!produto) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <main className={styles.container}>

      <img
        src={produto.imagem}
        alt={produto.nome}
        className={styles.image}
      />

      <div>

        <h1>{produto.nome}</h1>

        <p className={styles.price}>
          R$ {produto.preco}
        </p>

        <p>{produto.descricao}</p>

        <button
          className={styles.button}
          onClick={() => addToCart(produto)}
        >
          Adicionar ao Carrinho
        </button>

      </div>

    </main>
  );
}