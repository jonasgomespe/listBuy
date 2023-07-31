import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ResultProps{
    CSSstyle?: StyleProp<ViewStyle>
    titleResult: string
    amountPayable: string
    titleSize?:number
    titleColorResult?: string
    fontSizeResult?: number
}

export const Result = ({titleResult, amountPayable, CSSstyle, titleSize, fontSizeResult, titleColorResult}: ResultProps) => {

    return (
        <View style={CSSstyle}>
            <Text style={{fontSize: titleSize}}>
                {titleResult}
            </Text>
            <Text style={{...style.result, fontSize:fontSizeResult, color:titleColorResult}}>
                {amountPayable}
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