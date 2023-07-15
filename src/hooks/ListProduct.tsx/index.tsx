import { useContext } from "react";
import { AddProductListContext } from "../../context/addProductList";

const useListProduct = () => {
    const { addProduct, setAddProduct } = useContext(AddProductListContext);

    return {addProduct, setAddProduct};
}

export default useListProduct;