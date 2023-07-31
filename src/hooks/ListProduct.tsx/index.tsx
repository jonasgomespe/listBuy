import { useContext } from "react";
import { AddProductListContext } from "../../context/addProductList";

const useListProduct = () => {
    const { addProduct, setAddProduct, clearData } = useContext(AddProductListContext);
    
    function setDeleteProduct(id:number){
        clearData();
        const filterValue = addProduct.filter(response => response.id != id)
        
        setAddProduct([...filterValue]);
    }

    function clearListProduct(){
        clearData();
    }

    return {addProduct, setAddProduct, setDeleteProduct, clearListProduct};
}

export default useListProduct;