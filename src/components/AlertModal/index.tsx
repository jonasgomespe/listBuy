
import React from "react";
import { View, Text } from "react-native";
import { ModalAlert } from "../Modal";
import { style } from './Style';
import { SimpleLineIcons } from '@expo/vector-icons';

interface AlertModalProps {
    description?: string
    typeModal?: any
    showAlert: boolean,
    onEventPress?: () => void
} 

export const AlertModal = ({typeModal = 'check', description, showAlert = false, onEventPress}:AlertModalProps) => {

    return (
        <ModalAlert showModal={showAlert}>
            <View onTouchEnd={onEventPress} style={{...style.container, alignItems:'center'}}>
                <View style={{...style.containerForm, alignItems:'center'}}>
                    <SimpleLineIcons name={typeModal} size={55} color="#B3F527" />
                    <Text style={{zIndex:2, fontWeight:'bold', fontSize:20, color:'#525252'}}>
                        {description}
                    </Text>
                </View>
            </View>
        </ModalAlert>
    )
}