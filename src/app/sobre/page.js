import styles from "./page.module.css";

export default function Sobre() {
    return (
        <main className={styles.container}>

            {/* Título */}
            <section className={styles.hero}>

                <h1>Sobre a Store Gamer</h1>

                <p>
                    Tecnologia, desempenho e inovação para
                    elevar sua experiência nos jogos.
                </p>

            </section>

            {/* História */}
            <section className={styles.section}>

                <h2>Nossa História</h2>

                <p>
                    A Store Gamer nasceu para oferecer produtos de alta
                    qualidade para gamers que buscam desempenho,
                    conforto e tecnologia para elevar sua experiência
                    nos jogos.
                </p>
            </section>

            {/* Missão, Visão e Valores */}
            <section className={styles.cards}>

                <div className={styles.card}>
                    <h3>Missão</h3>

                    <p>
                        Oferecer produtos tecnológicos de
                        qualidade para gamers.
                    </p>
                </div>

                <div className={styles.card}>
                    <h3>Visão</h3>

                    <p>
                        Ser referência no mercado de
                        equipamentos gamers.
                    </p>
                </div>

                <div className={styles.card}>
                    <h3>Valores</h3>

                    <p>
                        Qualidade, inovação e compromisso
                        com nossos clientes.
                    </p>
                </div>

            </section>

            {/* Diferenciais */}
            <section className={styles.section}>

                <h2>Por que escolher a Store Gamer?</h2>

                <ul className={styles.list}>
                    <li>✓ Produtos de alta qualidade</li>
                    <li>✓ Entrega rápida para todo o Brasil</li>
                    <li>✓ Atendimento especializado</li>
                    <li>✓ Ambiente seguro para compras</li>
                </ul>

            </section>

        </main>
    );
}