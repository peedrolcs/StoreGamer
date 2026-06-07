// Importa o componente Link do Next.js
// Ele permite navegar entre páginas sem recarregar o site
import Link from "next/link";

// Importa alguns ícones da biblioteca React Icons
import {
  FaHome,
  FaGamepad,
  FaInfoCircle,
  FaShoppingCart,
  FaEnvelope
} from "react-icons/fa";

// Importa os estilos CSS deste componente
import styles from "./Header.module.css";

// Componente Header
export default function Header() {

  // O return é o que será exibido na tela
  return (

    // Cabeçalho principal
    <header className={styles.header}>

      {/* Logo da loja */}
      <h1 className={styles.logo}>
        <FaGamepad />
        Store Gamer
      </h1>

      {/* Menu de navegação */}
      <nav className={styles.nav}>

        {/* Link para Home */}
        <Link href="/">
          <FaHome />
          Home
        </Link>

        {/* Link para Produtos */}
        <Link href="/produtos">
          <FaGamepad />
          Produtos
        </Link>

        {/* Link para Sobre */}
        <Link href="/sobre">
          <FaInfoCircle />
          Sobre
        </Link>

        {/* Link para Carrinho */}
        <Link href="/carrinho">
          <FaShoppingCart />
          Carrinho
        </Link>

        <Link href="/contato">
          <FaEnvelope />
          Contato
        </Link>

      </nav>

    </header>
  );
}