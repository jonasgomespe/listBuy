import React, { ReactNode } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";


interface ListProductRootProps {
    children: ReactNode,
    CSSstyle?: object
}

export const ListProductRoot = ({children, CSSstyle}:ListProductRootProps) => {

    return (
        <SafeAreaView style={{...style.container, ...CSSstyle}}>
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
        margin:20,
        height:'60%',
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 10,
        shadowRadius: 4,
        elevation: 5, // 
    },
    scroll:{
        width:'100%'
    }
})