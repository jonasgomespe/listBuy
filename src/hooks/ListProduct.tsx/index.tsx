import { useContext } from "react";
import { AddProductListContext } from "../../context/addProductList";

const useListProduct = () => {
    const { addProduct, setAddProduct, clearData } = useContext(AddProductListContext);
    
    function setDeleteProduct(id:number){
        clearData();
        const filterValue = addProduct.filter(response => response.id != id)
        
        setAddProduct([...filterValue]);
    }

    return {addProduct, setAddProduct, setDeleteProduct};
}

export default useListProduct;