import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from 'react-native';

export const AddItem = () => {

    return (
        <Pressable 
            style={style.button}
        >
            <Text style={style.titleButton}>
                +
            </Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button:{
        backgroundColor:'#fff',
        borderRadius:50,
        shadowColor:'rgba(0,0,0,0.4)',
        shadowRadius:10,
        elevation:10,
        width:60,
        height:60,
    },
    titleButton:{
        fontSize:55,
        color:'#AEFF03',
        textAlign:'center',
        lineHeight:63,
        fontWeight:'bold'
    }
})