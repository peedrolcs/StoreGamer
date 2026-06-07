import { CartProvider } from "@/context/CartContext";
// Importa os estilos globais
import "./globals.css";

// Importa o Header
import Header from "@/components/Header";

// Layout principal
export default function RootLayout({ children }) {

  return (

    <html lang="pt-BR">

      <body>

        <CartProvider>

          <Header />

          {children}

        </CartProvider>

      </body>

    </html>
  );
}