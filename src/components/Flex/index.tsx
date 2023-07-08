import { ReactNode } from "react";
import { View } from "react-native";
import { style } from "./style";

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