import React, { ElementRef, useState } from "react";
import { TextInput, Text, View, Pressable, StyleSheet } from "react-native";

// interface ListProductActionProps{
//     value:string
// }

export const ListProductAction = () => {

    const [amount, setAmount] = useState(0);

    function onClickPlus(){
        setAmount(amount+1);
    }  
    
    function onClickLess(){
        if(amount > 0) setAmount(amount-1);
    }  

    function handleInputChange(valor:string){
        if(Number(valor) > 0){
            setAmount(Number(valor));
        }else{
            setAmount(0);
        }
    }   
    
    return (
        <View style={style.containerProduct}>
            <Pressable
                onPress={onClickLess}
                style={style.styleButtonLess}
            >
                <Text style={style.titleButton}>-</Text>
            </Pressable>

                <TextInput keyboardType="decimal-pad" onChangeText={handleInputChange} style={style.registerProduct} value={String(amount)} />

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
        lineHeight:40
    },
    registerProduct:{
        textAlign:'center', fontSize:20, fontWeight:'bold', color:'#A8A8A8'
    }
})