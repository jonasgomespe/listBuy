import React,{ createContext, useState, useEffect, ReactNode } from "react";
import {} from 'react-native';


interface AddProductListProps {
    setAddProductList:(value:boolean) => void;
    addProductList:boolean;
}

interface ProductListProps {
    children:ReactNode
}

const AddProductListContext = createContext<AddProductListProps>({
    addProductList: false,
    setAddProductList: () => {}
});

const AddProductProvider = ({ children }: ProductListProps) => {

    const [addProductList, setAddProductList] = useState(false);

    return (
        <AddProductListContext.Provider value={{addProductList, setAddProductList}}>
            {children}
        </AddProductListContext.Provider>
    )
}

export { AddProductListContext, AddProductProvider };