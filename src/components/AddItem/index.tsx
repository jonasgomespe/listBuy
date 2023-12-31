import React from "react";
import { Text, Pressable } from 'react-native';
import { style } from './Style/style';

interface AddItemProps {
    onEventClick?: () => void
}

export const AddItem = ({ onEventClick }:AddItemProps) => {

    return (
        <Pressable 
            style={style.button}
            onPress={onEventClick}
        >
            <Text style={style.titleButton}>
                +
            </Text>
        </Pressable>
    )
}