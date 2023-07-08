import React, { ReactNode } from "react";
import { Modal, View, Text, StyleSheet } from 'react-native';

interface ModalAlertProps{
    showModal?: boolean
    children: ReactNode
}

export const ModalAlert = ({ children, showModal = false,  }: ModalAlertProps) => {

    return (
        <View style={style.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={showModal}
            >
               {children}
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'red',
        alignItems:'center'
    }
})