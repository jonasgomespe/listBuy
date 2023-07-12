import React, { ReactNode } from "react";
import { Modal, View, Text, StyleSheet } from 'react-native';

interface ModalAlertProps{
    showModal?: boolean
    children: ReactNode,
    onClosedModal?: () => void
}

export const ModalAlert = ({ onClosedModal, children, showModal = false,  }: ModalAlertProps) => {

    return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={onClosedModal}
            >
               {children}
            </Modal>
    )
}
