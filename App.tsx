import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar style="auto" /> 
      <Home />
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F3F3F3'
  }
})