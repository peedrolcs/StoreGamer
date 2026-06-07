import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

import styles from "./page.module.css";

export default function Contato() {

  return (

    <main className={styles.container}>

      {/* Informações */}
      <section className={styles.info}>

        <h1>Entre em Contato</h1>

        <p>
          Estamos sempre prontos para ajudar você.
        </p>

        <div className={styles.contactItem}>
          <FaEnvelope />
          <span>contato@storegamer.com</span>
        </div>

        <div className={styles.contactItem}>
          <FaPhone />
          <span>(62) 99999-9999</span>
        </div>

        <div className={styles.contactItem}>
          <FaMapMarkerAlt />
          <span>Goiânia - GO</span>
        </div>

      </section>

      {/* Formulário */}
      <section className={styles.formContainer}>

        <h2>Envie uma Mensagem</h2>

        <form className={styles.form}>

          <input
            type="text"
            placeholder="Seu nome"
          />

          <input
            type="email"
            placeholder="Seu e-mail"
          />

          <textarea
            placeholder="Digite sua mensagem"
          />

          <button type="submit">
            Enviar Mensagem
          </button>

        </form>

      </section>

    </main>

  );
}