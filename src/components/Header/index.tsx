import React from "react";
import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';

const Header = () => {
    return (
        <View style={style.container}>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        height:200,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        backgroundColor:'#B3F527',
    }
})

export default Header;