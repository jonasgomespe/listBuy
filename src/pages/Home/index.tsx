import React, { useState, useContext } from "react";
import { View, Text, StatusBar } from 'react-native';
import { Header } from "../../components/Header";
import { Input } from "../../components/Inputs";
import { MenuPrimary } from "../../components/Menu/MenuPrimary";
import { ListProduct } from "../../components/ListProduct/"; 
import { ListProductAction } from "../../components/ListProduct/ListProductAction";
import { Result } from "../../components/Result";
import { Flex } from "../../components/Flex";
import { Box } from "../../components/Box";
import { TextInputMask } from 'react-native-masked-text';
import { AddItem } from "../../components/AddItem";
import { style } from './style/style';
import { FormListBuy } from "../../components/Form/FormListBuy";
import { InputIcon } from "../../components/Inputs/InputIcon";
import { AddProductListContext } from "../../context/addProductList";
import { ListProductIcon } from "../../components/ListProduct/ListProductIcon";

export const Home = () => {

    const [price, setPrice] = useState<number | undefined>(0);
    const { 
        showModalProductList, 
        setShowModalProductList,
        addProduct
    } = useContext(AddProductListContext);

    function onPriceProduct(value:any){
        const valueInput = value || 0;
        setPrice(valueInput);
    }

    function addProductCart() {
        setShowModalProductList(!showModalProductList);
    }

    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <Header />
            <MenuPrimary />
            <Input placeHolder="Pesquisar registro" icon={
                <InputIcon nameIcon='search' />
            } cssStyle={{marginTop:-50}} />
            <ListProduct.Root CSSstyle={{marginTop:20}}>
                {
                    addProduct.length > 0 ?
                        addProduct.map(response => {
                            return (
                                <ListProduct.Content key={response.name} CSSstyle={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                                    <ListProduct.Icon size={35} icon="shopping-cart" />
                                        <View>
                                            <View>
                                                <Text style={{fontSize:15, color:'#BDBDBD'}}>
                                                    {response.name}
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
                                                    value={response.princeProduct}
                                                    onChangeText={onPriceProduct}
                                                    style={{fontSize:23, fontWeight:'bold', maxWidth:120, width:120}}
                                                />
                                            </View>
                                        </View>
                                    <ListProductAction amountProduct={response.amount} />
                                </ListProduct.Content>
                            )
                        })
                    :
                        <Flex CSSstyle={{ width:'100%', marginTop:'25%', alignItems:'center', justifyContent:'center'}}>
                            <Box>
                                <Box>
                                    <Text style={{marginBottom:-30, color:'#E7E7E7', textAlign:'center', fontSize:30, fontWeight:'bold'}}>
                                        Nenhum registro
                                    </Text>
                                </Box>
                                <Box>
                                    <ListProductIcon icon='list' color="#E7E7E7" size={250} />
                                </Box>
                            </Box>
                        </Flex>
                }
            </ListProduct.Root>

            <Flex CSSstyle={{width:'100%', marginTop:-10, justifyContent:'center', alignItems:'center'}}>
                <Box CSSstyle={{padding:10}}>
                    <Result 
                        CSSstyle={style.resultStyle} 
                        titleSize={15} 
                        fontSizeResult={20} 
                        titleColorResult="#A8F600"
                    />
                </Box>
                <Box CSSstyle={{padding:10}}>
                    <Result 
                        CSSstyle={style.resultStyle} 
                        titleSize={15} 
                        fontSizeResult={20} 
                        titleColorResult="#FF8B03"
                    />
                </Box>
                <Box>
                    <AddItem onEventClick={addProductCart} />
                </Box>
            </Flex>

            <FormListBuy />
            
        </View>
    )
}