"use client";

import { useState } from "react";

import { useCart } from "@/context/CartContext";

import styles from "./page.module.css";

export default function Carrinho() {

    const { cart, removeFromCart } = useCart();
    const [mensagem, setMensagem] = useState("");
    const [compraFinalizada, setCompraFinalizada] = useState(false);

    const total = cart.reduce(
        (acc, item) => acc + item.preco,
        0
    );

    return (
        <main className={styles.container}>

            <h1>Meu Carrinho</h1>

            {mensagem && (
                <p className={styles.removeMessage}>
                    {mensagem}
                </p>
            )}

            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    {cart.map((item, index) => (

                        <div
                            key={`${item.id}-${index}`}
                            className={styles.item}
                        >

                            <img
                                src={item.imagem}
                                alt={item.nome}
                                className={styles.image}
                            />

                            <div className={styles.info}>

                                <h3>{item.nome}</h3>

                                <p>
                                    R$ {item.preco.toFixed(2)}
                                </p>

                                <button
                                    onClick={() => {

                                        removeFromCart(item.id);

                                        setMensagem(
                                            ` ${item.nome} removido do carrinho!`
                                        );

                                        setTimeout(() => {
                                            setMensagem("");
                                        }, 2000);

                                    }}
                                >
                                    Remover
                                </button>

                            </div>

                        </div>

                    ))}

                    <h2>
                        Total: R$
                        {total.toFixed(2)}
                    </h2>
                </>
            )}
            <button
                className={styles.checkoutButton}
                onClick={() => {

                    setCompraFinalizada(true);

                    setMensagem("");

                }}
            >
                Finalizar Compra
            </button>
            {compraFinalizada && (

                <p className={styles.successMessage}>

                     Compra realizada com sucesso!

                    <br />

                    Obrigado por comprar na Store Gamer.

                </p>

            )}

        </main>
    );
}