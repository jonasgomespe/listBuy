import { ReactNode } from "react";
import { View, StyleProp, ViewStyle} from "react-native";

interface BoxProps{
    children: ReactNode,
    CSSstyle?: StyleProp<ViewStyle>
}

export const Box = ({ children, CSSstyle }: BoxProps) => {
    return (
        <View style={CSSstyle}>
            {children}
        </View>
    )
}