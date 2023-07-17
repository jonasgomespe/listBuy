import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { Box } from '../../Box';
import { style } from './Style/index';
import { Input, InputMask } from './../../Inputs/index';
import { Button } from '../../Button';
import { ModalAlert } from '../../Modal';
import { AddProductListContext } from '../../../context/addProductList';
import { Flex } from '../../Flex';
import useListProduct from '../../../hooks/ListProduct.tsx';
import { AlertModal } from '../../AlertModal';

export const FormListBuy = () => {

    const { addProduct, setAddProduct } = useListProduct();
    const { showModalProductList, setShowModalProductList } = useContext(AddProductListContext);

    const [nameProduct, setNameProduct] = useState('');  
    const [priceProduct, setPriceProduct] = useState('0');
    const [amount, setAmount] = useState('');
    const [showAlertModa, setShowAlertModa] = useState(false);

    function onEventClosed() {
        setShowModalProductList(!showModalProductList);
    }

    function addProductList(){
        setAddProduct([...addProduct, {
            name:nameProduct, 
            princeProduct:priceProduct, 
            amount:amount
        }]);
        showAlertModal();
        clearInputs();
    }

    function clearInputs() {
        setNameProduct('');
        setPriceProduct('0');
        setAmount('');
    }

    function showAlertModal() {
        setShowAlertModa(!showAlertModa);
    }

    return (
        <>
            <ModalAlert showModal={showModalProductList}>
                <View style={style.container}>
                    <View style={style.containerForm}>
                        <Box>
                            <Text style={style.title}>
                                Adicionar Produto
                            </Text>
                        </Box>

                        <Box>
                            <Input cssStyle={style.inputStyle} onEventChange={setNameProduct} value={nameProduct} placeHolder='Titulo do produto' />
                        </Box>

                        <Box>
                            <InputMask
                                cssStyle={style.inputStyle}
                                onEventChange={setPriceProduct} 
                                value={priceProduct}
                            />
                        </Box>

                        <Box>
                            <Input cssStyle={style.inputStyle} onEventChange={setAmount} value={amount} type={'numeric'} placeHolder='Quantidade do produto' />
                        </Box>
                        <Flex>
                            <Box>
                                <Button typeButton='cancel' CSSstyle={{width:150, margin:15}} onEventClick={onEventClosed} title="Cancelar" />
                            </Box>
                            <Box>
                                <Button typeButton='add' onEventClick={addProductList} CSSstyle={{width:150, margin:15}} title='Adicionar' />
                            </Box>
                        </Flex>
                    </View>
                </View>
            </ModalAlert>

            <AlertModal 
                typeModal='check'
                description='Produto adicionado!'
                showAlert={showAlertModa}
                onEventPress={showAlertModal}
            />
        </>
    )
}