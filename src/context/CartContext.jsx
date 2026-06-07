"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart((prev) => [...prev, product]);
    }

    function removeFromCart(id) {

        setCart((prev) => {

            const index = prev.findIndex(
                (item) => item.id === id
            );

            if (index === -1) return prev;

            const updatedCart = [...prev];

            updatedCart.splice(index, 1);

            return updatedCart;
        });
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}