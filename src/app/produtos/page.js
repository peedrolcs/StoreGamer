"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import { useState } from "react";

import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

import styles from "./page.module.css";

export default function Produtos() {

    const [busca, setBusca] = useState("");

    const produtosFiltrados = products.filter((produto) =>
        produto.nome
            .toLowerCase()
            .includes(busca.toLowerCase())
    );

    return (
        <main className={styles.container}>

            <h1 className={styles.title}>
                Produtos Gamer
            </h1>

            <Link
                href="/carrinho"
                className={styles.cartButton}
            >
                <FaShoppingCart />
                Ir para o Carrinho
            </Link>

            <input
                type="text"
                placeholder="Buscar produto..."
                value={busca}
                onChange={(e) =>
                    setBusca(e.target.value)
                }
                className={styles.search}
            />

            <div className={styles.grid}>

                {produtosFiltrados.map((produto) => (

                    <ProductCard
                        key={produto.id}
                        produto={produto}
                    />

                ))}

            </div>

        </main>
    );
}