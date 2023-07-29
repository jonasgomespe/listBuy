import React,{ createContext, useState, ReactNode } from "react";
import { LisProduct } from "../../types/ListProduct/ListProduct";

interface AddProductListProps {
    setShowModalProductList:(value:boolean) => void
    showModalProductList:boolean
    addProduct: LisProduct[]
    setAddProduct: (value:LisProduct[]) => void
    clearData: () => void
}

const AddProductListContext = createContext<AddProductListProps>({
    showModalProductList: false,
    setShowModalProductList: () => {},
    addProduct:[],
    setAddProduct: () => {},
    clearData: () => {}
});

const AddProductProvider = ({ children }: {children: ReactNode}) => {

    const [showModalProductList, setShowModalProductList] = useState(false);
    const [addProduct, setAddProduct] = useState<LisProduct[]>([]);

    function clearData(){
        setAddProduct([]);
    }

    return (
        <AddProductListContext.Provider value={
            {
                showModalProductList, 
                setShowModalProductList, 
                addProduct, 
                setAddProduct,
                clearData
            }
        }>
            {children}
        </AddProductListContext.Provider>
    )
}

export { AddProductListContext, AddProductProvider };