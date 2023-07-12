import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ResultProps{
    CSSstyle?: StyleProp<ViewStyle>
    titleSize?:number
    titleColorResult?: string
    fontSizeResult?: number
}

export const Result = ({CSSstyle, titleSize, fontSizeResult, titleColorResult}: ResultProps) => {

    return (
        <View style={CSSstyle}>
            <Text style={{fontSize: titleSize}}>
                Valor disponível
            </Text>
            <Text style={{...style.result, fontSize:fontSizeResult, color:titleColorResult}}>
                R$ 1.900,00
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    result: {
        fontSize:15,
        fontWeight:'bold'
    }
})