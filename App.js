import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Pattern from './assets/pattern/ptrn-1.png';
import { AppStyles } from './constants/styles';
import Names from './components/names';

export default function App() {
  return (
    <ImageBackground
      source={Pattern}
      resizeMode='cover'
      style={styles.container}
    >
      <View style={{width:'100%', alignItems:'center'}}>
        <Ionicons name="cash-outline" size={90} color={AppStyles.color.airBlue}/>
        <Names/>
        <StatusBar style='dark'/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:80
  },
});
