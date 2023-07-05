import React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Header from "../../components/Header";
import { Input } from "../../components/Inputs";
import { MenuPrimary } from "../../components/Menu/MenuPrimary";
import { ListProduct } from "../../components/ListProduct/"; 
import { ListProductAction } from "../../components/ListProduct/ListProductAction";

export const Home = () => {

    
    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <Header />
            <MenuPrimary />
            <Input placeHolder="Pesquisar registro" cssStyle={{marginTop:-30}} />
            <ListProduct.Root>
                <ListProduct.Content CSSstyle={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <ListProduct.Icon size={35} icon="shopping-cart" />
                    <View>
                        <Text style={{fontSize:15}}>
                            Feijão
                        </Text>
                        <Text style={{fontSize:25,fontWeight:'bold'}}>
                            R$ 300,00
                        </Text>
                    </View>
                    <ListProductAction />
                </ListProduct.Content>
            </ListProduct.Root>
        </View>
    )
}

const style = StyleSheet.create({
    titulo:{
        fontSize:45,
        backgroundColor:'#ccc',
    }
})