import { useContext, useEffect, useState } from "react";
// import { AddProductListContext } from "../../context/addProductList";

const useListProductAction = () => {
    // const { addProduct, setAddProduct, clearData } = useContext(AddProductListContext);
    const [amount,setAmount] = useState(0);

    useEffect(() => {
        if(amount < 1){
            onEventDeleteProduct();
        }
    },[])

    function onClickPlus(){
        // if(amount <= 9999) setAmount(amount+1);
        if(amount <= 9999) setAmount(amount+1);
    } 

    function onClickLess(){
        if(amount > 0){
            setAmount(amount-1);
        }else{
            if(onEventDeleteProduct){
                setAmount(0);
                onEventDeleteProduct;
            }
        }
    }  

    function onChangesAmount(valor:string){
        if(Number(valor) > 0 && Number(valor) <= 10000) setAmount(Number(valor));
            if(valor == '') setAmount(0);
    } 

    function onEventDeleteProduct():void{}

    return {amount, onClickPlus, onClickLess, onChangesAmount, onEventDeleteProduct};
}

export default useListProductAction;