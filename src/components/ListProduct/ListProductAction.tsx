import React, { useState, useEffect } from "react";
import { TextInput, Text, View, Pressable } from "react-native";
import { style } from './style/';

interface ListProductActionProps{
    getAmountProduct?:string,
    onEventDeleteProduct?: () => void
    amountValueProduct?:(value:string) => void
}

export const ListProductAction = ({amountValueProduct, onEventDeleteProduct, getAmountProduct}:ListProductActionProps) => {

    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if(getAmountProduct){
            setAmount(Number(getAmountProduct));
        }
    },[getAmountProduct])

    useEffect(() => {
        if(amount < 0){
            if(onEventDeleteProduct) onEventDeleteProduct();
        }
    },[amount])

    function onClickPlus(){
        if(amount <= 9999){
            setAmount(amount+1);
            if(amountValueProduct) amountValueProduct(String(amount+1));
        } 
    }  
    
    function onClickLess(){
        setAmount(amount-1);
        if(amountValueProduct) amountValueProduct(String(amount-1));
    }  

    function onInputChanges(value:string){
        if(Number(value) > 0 && Number(value) <= 10000) setAmount(Number(value));

        if(value == '') setAmount(0);
    }   

    return (
        <View style={style.containerProduct}>
            <Pressable
                onPress={onClickLess}
                style={style.styleButtonLess}
            >
                <Text style={style.titleButton}>-</Text>
            </Pressable>

                <TextInput 
                    maxLength={10000} 
                    keyboardType="decimal-pad" 
                    onChangeText={onInputChanges} 
                    style={style.registerProduct} 
                    value={String(amount)} 
                />

            <Pressable 
                onPress={onClickPlus}
                style={style.styleButtonPlus}
            >
                <Text style={style.titleButton}>+</Text>
            </Pressable>
        </View>
    )
}