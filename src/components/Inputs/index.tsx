import React, { ReactNode } from 'react';
import { View, TextInput, KeyboardTypeOptions } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { style } from './Style'
 interface PropsInput {
    cssStyle?: object,
    placeHolder?: string,
    icon?:ReactNode,
    type?:KeyboardTypeOptions,
    value?:string,
    onEventChange?:(value:string) => void
}

export const Input = ({type = 'default', cssStyle, placeHolder, icon, value, onEventChange}: PropsInput) => {

    const CssStyle = {...style.input,...cssStyle};

    return (
        <View style={style.container}>
            <TextInput
                style={CssStyle}
                placeholder={placeHolder}
                placeholderTextColor="#ccc"
                keyboardType={type}
                value={value}
                onChangeText={onEventChange}
            />
            {icon}
        </View>
    )
}

export const InputMask = ({onEventChange, value, cssStyle}:PropsInput) => {

    const CssStyle = {...style.input,...cssStyle};

    return (
        <View style={style.container}>
            <TextInputMask
                type={'money'}
                options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$',
                    suffixUnit: '',
                }}
                value={value}
                onChangeText={onEventChange}
                style={{...style.input, ...CssStyle}}
            />
        </View>
    )
}