import { StyleSheet } from "react-native"
export const style = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.6)',
        justifyContent:'center',
        zIndex:3
    },
    containerForm:{
        backgroundColor:'#fff',
        margin:15,
        padding:20,
        borderRadius:10
    },
    containerOverlay: {
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.6)',
        zIndex:1
    },
    title:{
        fontSize:25,
        color:'#000',
        textAlign:'center',
        marginTop:20,
        marginBottom:20
    },
    inputStyle:{
        marginTop:15,
        marginBottom:15
    }
});