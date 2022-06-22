import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

    const [qty, setQty] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([])
    
    const incrementQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decrementQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) {
                return 1;
            }
            return prevQty - 1;
        });
    }

    const onAdd = (product, quantity) => {
        const exist = cartItems.find((item) => item.slug === product.slug);

        if(exist) {
            setCartItems(
                cartItems.map((item) => 
                    item.slug === product.slug 
                    ? {...exist, quantity: exist.quantity + quantity} 
                    : item
                )
            );
        } else {
            setCartItems([...cartItems, {...product, quantity: quantity}]);
        }
    }

    return (
        <Context.Provider value={{ 
            qty, 
            incrementQty, 
            decrementQty, 
            showCart,
            setShowCart,
            cartItems,
            onAdd,
        }}>
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);