import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    containerProduct:{
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center'
    },
    styleButtonPlus:{
        backgroundColor:'#AEFF03',
        width:40,
        height:40,
        borderRadius:50,
        margin:10
    },
    styleButtonLess:{
        backgroundColor:'#FF8B03',
        width:40,
        height:40,
        borderRadius:50,
        margin:10
    },
    titleButton:{
        fontSize:35,
        color:'#fff',
        textAlign:'center',
        lineHeight:40,
    },
    registerProduct:{
        textAlign:'center', 
        fontSize:20, 
        fontWeight:'bold', 
        color:'#A8A8A8',
        width:55,
        maxWidth:70
    }
})