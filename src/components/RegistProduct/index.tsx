import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { ListProduct } from "../ListProduct";
import useListProduct from "../../hooks/ListProduct.tsx";

interface RegistProductProps {
    id:number
    title: string
    amount: string
    price: string
}

export const RegistProduct = ({id , price, title = '', amount}:RegistProductProps) => {

    const [priceProduct, onPriceProduct] = useState('0');
    const { setDeleteProduct, addProduct, clearListProduct, setAddProduct }  = useListProduct();

    useEffect(() => {
        onPriceProduct(price);
    },[price]);

    function onEventDeleteProduct(){
        setDeleteProduct(id);
    }

    function updateListProductPrice(valueProduct:string){
        onPriceProduct(valueProduct);
    }

    function amountProductList(value:string){
        clearListProduct();

        var product = addProduct.find(response => response.id == id);
        if(product) {
            product.amount = value;
            setAddProduct([...addProduct]);
        }

    }

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
                                    unit: 'R$ ',
                                    suffixUnit: '',
                                }}
                                value={priceProduct}
                                onChangeText={updateListProductPrice}
                                style={{fontSize:23, fontWeight:'bold', maxWidth:120, width:120}}
                            />
                        </View>
                    </View>
                <ListProduct.Action 
                    onEventDeleteProduct={onEventDeleteProduct} 
                    amountValueProduct={amountProductList}
                    getAmountProduct={amount}
                />

            </ListProduct.Content>
    )
}