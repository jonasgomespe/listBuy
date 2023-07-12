import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { Box } from '../../Box';
import { style } from './Style/index';
import { Input } from './../../Inputs/index';
import { Button } from '../../Button';
import { ModalAlert } from '../../Modal';
import { AddProductListContext } from '../../../context/listProduct';
import { Flex } from '../../Flex';

export const FormListBuy = () => {
    const { addProductList, setAddProductList } = useContext(AddProductListContext);

    function onEventClosed() {
        setAddProductList(!addProductList);
    }

    return (
            <ModalAlert showModal={addProductList}>
                <View style={style.container}>
                    <View style={style.containerForm}>
                            <Box>
                                <Text style={style.title}>
                                    Adicionar Produto
                                </Text>
                            </Box>

                            <Box>
                                <Input cssStyle={style.inputStyle} placeHolder='Titulo do produto' />
                            </Box>

                            <Box>
                                <Input cssStyle={style.inputStyle} placeHolder='Preço do produto' />
                            </Box>

                            <Box>
                                <Input cssStyle={style.inputStyle} type={'numeric'} placeHolder='Quantidade do produto' />
                            </Box>
                            <Flex>
                                <Box>
                                    <Button typeButton='cancel' CSSstyle={{width:150, margin:15}} onEventClick={onEventClosed} title="Cancelar" />
                                </Box>
                                <Box>
                                    <Button typeButton='add' CSSstyle={{width:150, margin:15}} title='Adicionar' />
                                </Box>
                            </Flex>
                    </View>
                </View>
            </ModalAlert>
    )
}