"use client";
import Link from "next/link";

import { useState } from "react";

import { useParams } from "next/navigation";

import products from "@/data/products";
import styles from "./page.module.css";

import { useCart } from "@/context/CartContext";

export default function ProdutoDetalhe() {

    const params = useParams();

    const { addToCart } = useCart();
    const [mensagem, setMensagem] = useState("");

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
                    onClick={() => {
                        addToCart(produto);

                        setMensagem("✅ Produto adicionado ao carrinho!");

                        setTimeout(() => {
                            setMensagem("");
                        }, 2000);
                    }}
                >
                    Adicionar ao Carrinho
                </button>

                {mensagem && (
                    <p className={styles.success}>
                        {mensagem}
                    </p>
                )}

                <Link
                    href="/produtos"
                    className={styles.continueButton}
                >
                    Continuar Comprando
                </Link>

                <Link
                    href="/carrinho"
                    className={styles.cartButton}
                >
                    🛒 Ir para o Carrinho
                </Link>

            </div>

        </main>
    );
}