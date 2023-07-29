import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/pages/Home';
import { AddProductProvider } from './src/context/addProductList';
import { style } from './style';

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar style="auto" /> 
      <AddProductProvider>
        <Home />
      </AddProductProvider>
    </View>
  );
}