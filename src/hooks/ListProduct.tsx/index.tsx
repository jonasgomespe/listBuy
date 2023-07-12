import {useState, useEffect} from "react";

export const useListProduct = (valueInitial:any) => {
    const [listProduct, setListProduct] = useState(valueInitial);
    
    useEffect(()=>{
    },[listProduct])

    const setInsertValue = (newValue:any) => {
        setListProduct([...listProduct, newValue]);
    }

    return [listProduct, setInsertValue];
}