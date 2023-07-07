import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export const MenuPrimary = () => {
    return (
        <View style={style.containerMenu}>
            <View>
                <SimpleLineIcons name="menu" size={30} color="black" />
            </View>
            <View>
                <Text style={style.titlePages}>Lista de compras</Text>
            </View>
            <View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    containerMenu:{
        position:'absolute',
        top:45,
        left:20,
        backgroundColor:'transparent',
        width:'90%',
        padding:8,
        borderRadius:100,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    titlePages:{
        fontSize:30
    }
})