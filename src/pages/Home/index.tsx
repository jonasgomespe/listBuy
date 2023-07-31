import React, { useContext, useEffect, useState } from "react";
import { View, Text, StatusBar } from 'react-native';
import { Header } from "../../components/Header";
import { Input } from "../../components/Inputs";
import { MenuPrimary } from "../../components/Menu/MenuPrimary";
import { ListProduct } from "../../components/ListProduct/"; 
import { Result } from "../../components/Result";
import { Flex } from "../../components/Flex";
import { Box } from "../../components/Box";
import { AddItem } from "../../components/AddItem";
import { style } from './style/style';
import { FormListBuy } from "../../components/Form/FormListBuy";
import { InputIcon } from "../../components/Inputs/InputIcon";
import { AddProductListContext } from "../../context/addProductList";
import { ListProductIcon } from "../../components/ListProduct/ListProductIcon";
import { RegistProduct } from "../../components/RegistProduct";

export const Home = () => {

    const [sumPrice, setSumPrice] = useState(0.0); 

    const { 
        showModalProductList, 
        setShowModalProductList,
        addProduct
    } = useContext(AddProductListContext);

    useEffect(() => {
        if(addProduct){
            let sumPrinceProduct = 0.0;

            for(let i = 0; i < addProduct.length; i++){                
                if(addProduct[i]){
                    let removeLetter = addProduct[i].princeProduct;
                    removeLetter = addProduct[i].princeProduct?.replace(/R\$/g, '');
                    if(removeLetter) {
                        removeLetter = removeLetter.replace(',', '.');
                        sumPrinceProduct += (Number(removeLetter) * Number(addProduct[i].amount));
                    }
                }
            }

            setSumPrice(sumPrinceProduct);
        }

    },[addProduct])


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
                                <RegistProduct 
                                    key={response.id}
                                    id={response.id}
                                    title={response.name} 
                                    amount={response.amount}
                                    price={response.princeProduct ? response.princeProduct : '0'}
                                />
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
                        titleResult="Valor disponivel"
                        amountPayable="R$ 1.000,00"
                        CSSstyle={style.resultStyle} 
                        titleSize={15} 
                        fontSizeResult={20} 
                        titleColorResult="#A8F600"
                    />
                </Box>
                <Box CSSstyle={{padding:10}}>
                    <Result
                        titleResult="Valor total"
                        amountPayable={String(sumPrice)}   
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