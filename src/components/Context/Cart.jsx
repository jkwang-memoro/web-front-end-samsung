import React, {useContext, createContext} from 'react';
import {any, shape, string, number, func, arrayOf, exact } from 'porp-types';

const CartContext = createContext({});

//context wrapper component
export const CartProvider = ({value, children}) => {
    return 
    <CartContext.Provider value={value}> 
        {children} 
    </CartContext.Provider>;
};

//커스텀 훅
export const useCart = () =>  {
    const value = useContext (CartContext);
    if (!value){
        throw new Error(
            'CartContext 내부에서 사용하세요~'
        )
    }
    return value;
};

CartProvider.porpTypes = {
    value: shape({
        title: string,
        products: arrayOf(exact({
            id: string,
            photo: string,
            name: string,
            price: number,
            amount: number,
            maxAmount: number,
        }).isRequired),
        totalPrice: number.isRequired,
        onUpdate: func,
    }),
    children: any,
}