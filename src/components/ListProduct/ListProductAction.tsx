import React, { useState } from "react";
import { TextInput, Text, View, Pressable, StyleSheet } from "react-native";

interface ListProductActionProps{
    onInputChange?: () => void
}

export const ListProductAction = ({onInputChange}:ListProductActionProps) => {

    const [amount, setAmount] = useState(0);

    function onClickPlus(){
        if(amount <= 9999) setAmount(amount+1);
    }  
    
    function onClickLess(){
        if(amount > 0) setAmount(amount-1);
    }  

    function onInputChanges(valor:string){
        if(Number(valor) > 0 && Number(valor) <= 10000) setAmount(Number(valor));
        if(valor == '') setAmount(0);
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

const style = StyleSheet.create({
    containerProduct:{
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center'
    },
    styleButtonPlus:{
        backgroundColor:'#AEFF03',
        width:40,
        height:40,
        borderRadius:50,
        margin:10
    },
    styleButtonLess:{
        backgroundColor:'#FF8B03',
        width:40,
        height:40,
        borderRadius:50,
        margin:10
    },
    titleButton:{
        fontSize:35,
        color:'#fff',
        textAlign:'center',
        lineHeight:40,
    },
    registerProduct:{
        textAlign:'center', 
        fontSize:20, 
        fontWeight:'bold', 
        color:'#A8A8A8',
        width:55,
        maxWidth:70
    }
})