import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        height:200,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        backgroundColor:'#B3F527',
    }
})
