import React, { useEffect, useState } from 'react';
import { Text, Pressable } from 'react-native';
import { style } from './Style/index';

interface ButtonProps {
    onEventClick?: () => void
    title:string
    CSSstyle?: object
    typeButton?: 'cancel' | 'add'
}

export const Button = ({title, onEventClick, CSSstyle, typeButton = 'add'}:ButtonProps) => {

    const [typeButtonForm] = useState(typeButton);
    const [buttonType, setButtonType] = useState('');

    useEffect(() => {
        if(typeButtonForm == 'add')
            setButtonType('#82BF00');
        
        if(typeButtonForm == 'cancel')
            setButtonType('#FF8B03');
    },[])

    return (
        <Pressable style={{backgroundColor:buttonType, borderRadius:10, padding:15, ...CSSstyle}} onPress={onEventClick}>
            <Text style={style.title}>
                {title}
            </Text>
        </Pressable>
    )
}