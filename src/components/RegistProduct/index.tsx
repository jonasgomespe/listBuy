import { useState } from "react";
import { View, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { ListProduct } from "../ListProduct";

interface RegistProductProps {
    title: string,
    amount: string
}

export const RegistProduct = ({title = '', amount}:RegistProductProps) => {

    const [priceProduct, onPriceProduct] = useState('0');

    return (
            <ListProduct.Content CSSstyle={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                <ListProduct.Icon size={35} icon="shopping-cart" />
                    <View>
                        <View>
                            <Text style={{fontSize:15, color:'#BDBDBD'}}>
                                {title}
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
                                value={priceProduct}
                                onChangeText={onPriceProduct}
                                style={{fontSize:23, fontWeight:'bold', maxWidth:120, width:120}}
                            />
                        </View>
                    </View>
                <ListProduct.Action amountProduct={amount} />
            </ListProduct.Content>
    )
}