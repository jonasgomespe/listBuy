import { ReactNode } from "react";
import { View, StyleSheet, StyleProp, ViewStyle} from "react-native";

interface FlexProps{
    children: ReactNode,
    CSSstyle?: object
}

export const Flex = ({ children, CSSstyle }: FlexProps) => {

    return (
        <View style={{...style.container, ...CSSstyle}}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row'
    }
})