import React, { ReactNode } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";


interface ListProductRootProps {
    children: ReactNode
}

export const ListProductRoot = ({children}:ListProductRootProps) => {

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scroll}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'flex-start',
        borderRadius:25,
        backgroundColor:'#fff',
        padding:15,
        marginTop:39,
        margin:20,
        height:'60%',
        shadowColor: 'rgba(0,0,0,0.6)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 10,
        shadowRadius: 4,
        elevation: 10, // 
    },
    scroll:{
        width:'100%'
    }
})