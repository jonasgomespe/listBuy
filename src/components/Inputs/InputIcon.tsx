import { ElementType } from "react";
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

interface IconProps {
    nameIcon?: any
}

export const InputIcon = ({nameIcon}: IconProps) => {
    return <FontAwesome style={style.iconStyle} name={nameIcon}  size={24} color="#A8A8A8" />
}

const style = StyleSheet.create({
    iconStyle:{
        marginTop:-40,
        marginLeft:'70%'
    }
})