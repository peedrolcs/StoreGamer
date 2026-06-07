"use client";

import { useCart } from "@/context/CartContext";

import styles from "./page.module.css";

export default function Carrinho() {

    const { cart, removeFromCart } = useCart();

    const total = cart.reduce(
        (acc, item) => acc + item.preco,
        0
    );

    return (
        <main className={styles.container}>

            <h1>Meu Carrinho</h1>

            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    {cart.map((item, index) => (

                        <div
                            key={`${item.id}-${index}`}
                            className={styles.item}
                        >

                            <h3>{item.nome}</h3>

                            <p>
                                R$ {item.preco}
                            </p>

                            <button
                                onClick={() =>
                                    removeFromCart(item.id)
                                }
                            >
                                Remover
                            </button>

                        </div>

                    ))}

                    <h2>
                        Total: R$
                        {total.toFixed(2)}
                    </h2>
                </>
            )}

        </main>
    );
}