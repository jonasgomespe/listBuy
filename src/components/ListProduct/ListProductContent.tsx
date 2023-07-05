import React, { ReactNode } from "react";
import { View, StyleSheet, StyleProp } from 'react-native';

interface ListProductContentProps {
    children:ReactNode,
    CSSstyle:any
}

export const ListProductContent = ({children,CSSstyle}: ListProductContentProps) => {
    const styleCSS = {...style.container, ...CSSstyle};
    console.log(styleCSS);
    return (
        <View style={styleCSS}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:"rgba(0,0,0,0.1)"
    }
}) 