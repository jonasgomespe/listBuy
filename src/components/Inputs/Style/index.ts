import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center'
    },
    input:{
        width:'90%',
        height:55,
        backgroundColor:'#fff',
        color:'#5f6368',
        fontWeight:'400',
        borderRadius:10,
        shadowColor: 'rgba(0,0,0,0.6)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 10,
        shadowRadius: 4,
        elevation: 10,
        padding:15,
        letterSpacing:.1,
        fontSize:20
    }
})