import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Header from "../../components/Header";
import { Input } from "../../components/Inputs";
import { MenuPrimary } from "../../components/Menu/MenuPrimary";
import { ListProduct } from "../../components/ListProduct/"; 
import { ListProductAction } from "../../components/ListProduct/ListProductAction";
import { Result } from "../../components/Result";
import { Flex } from "../../components/Flex";
import { Box } from "../../components/Box";
import { TextInputMask } from 'react-native-masked-text';
import { useListProduct } from "../../hooks/ListProduct.tsx";
import { AddItem } from "../../components/AddItem";

export const Home = () => {

    const [price, setPrice] = useState<number | undefined>(0);
    const [addProduct, setAddProduct] = useListProduct([]);

    function onPriceProduct(value:any){
        const valueInput = value || 0;
        setPrice(valueInput);
    }

    function addProductList(){
        setAddProduct({valor: price})
    }

    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <Header />
            <MenuPrimary />
            <Input placeHolder="Pesquisar registro" cssStyle={{marginTop:-50}} />
            <ListProduct.Root CSSstyle={{marginTop:20}}>
                <ListProduct.Content CSSstyle={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                    <ListProduct.Icon size={35} icon="shopping-cart" />
                    <View>
                        <View>
                            <Text style={{fontSize:15, color:'#BDBDBD'}}>
                                Feijão
                            </Text>
                        </View>
                        <View>    
                            <TextInputMask
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: '',
                                }}
                                value={String(price)}
                                onChangeText={onPriceProduct}
                                style={{fontSize:23, fontWeight:'bold', maxWidth:120, width:120}}
                            />
                        </View>
                    </View>
                    <ListProductAction onIntertPlus={addProductList} />
                </ListProduct.Content>
            </ListProduct.Root>

            <Flex CSSstyle={{width:'100%',marginLeft:15, marginTop:-10, justifyContent:'flex-start', alignItems:'center'}}>
                <Box CSSstyle={{padding:10}}>
                    <Result 
                        CSSstyle={style.resultStyle} 
                        titleSize={15} 
                        fontSizeResult={22} 
                        titleColorResult="#A8F600"
                    />
                </Box>
                <Box CSSstyle={{padding:10}}>
                    <Result 
                        CSSstyle={style.resultStyle} 
                        titleSize={15} 
                        fontSizeResult={22} 
                        titleColorResult="#FF8B03"
                    />
                </Box>
                <Box>
                    <AddItem />
                </Box>
            </Flex>
        </View>
    )
}

const style = StyleSheet.create({
    resultStyle:{
        borderRadius:5, 
        width:150, 
        backgroundColor:'#fff', 
        padding:5, 
        paddingLeft:10,
        fontSize:25
    },
})