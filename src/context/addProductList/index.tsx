import React,{ createContext, useState, ReactNode } from "react";
import { LisProduct } from "../../types/ListProduct/ListProduct";

interface AddProductListProps {
    setShowModalProductList:(value:boolean) => void
    showModalProductList:boolean
    addProduct: LisProduct[]
    setAddProduct: (value:LisProduct[]) => void
}

const AddProductListContext = createContext<AddProductListProps>({
    showModalProductList: false,
    setShowModalProductList: () => {},
    addProduct:[],
    setAddProduct: () => {}
});

const AddProductProvider = ({ children }: {children: ReactNode}) => {

    const [showModalProductList, setShowModalProductList] = useState(false);
    const [addProduct, setAddProduct] = useState<LisProduct[]>([]);

    return (
        <AddProductListContext.Provider value={{showModalProductList, setShowModalProductList, addProduct, setAddProduct}}>
            {children}
        </AddProductListContext.Provider>
    )
}

export { AddProductListContext, AddProductProvider };