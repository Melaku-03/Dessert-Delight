import { createContext, useEffect, useState } from "react";
import data from "../assets/data";
import { icons } from "../assets/data";

export const DataContext = createContext(null);

const DataContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [isConfirmed, setIsConfirmed] = useState(false);
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) setCartItems(prev => ({ ...prev, [itemId]: 1 }));
        else setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFormCart = (itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const deleteFormCart = (itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: 0 }));
    }
    const getTotalAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item]) {
                const itemInfo = data.find(product => product.id === Number(item));
                total += itemInfo.price * cartItems[item];
            }
        }
        return total;
    }

    const contextValue = { data, icons, cartItems, removeFormCart, addToCart, deleteFormCart, setCartItems, getTotalAmount, isConfirmed, setIsConfirmed };
    return (
        <DataContext.Provider value={contextValue}>
            {props.children}
        </DataContext.Provider>
    );
};


export default DataContextProvider;
