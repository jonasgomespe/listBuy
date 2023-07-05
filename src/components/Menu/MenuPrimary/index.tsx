import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export const MenuPrimary = () => {

    return (
        <View style={style.menu}>
            <SimpleLineIcons name="menu" size={30} color="black" />
        </View>
    )
}

const style = StyleSheet.create({
    menu:{
        position:'absolute',
        top:45,
        left:20,
        backgroundColor:'transparent',
        padding:8,
        borderRadius:100
    }
})