import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './assets/screens/WelcomeScreen';
import QuoteScreen from './assets/screens/QuoteScreen';
import { useDimensions } from '@react-native-community/hooks';
import { Alert, Animated, Button, Platform, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { useRef, useLayoutEffect } from 'react';

export default function App() {

  const fadeAnim = useRef(new Animated.Value(1)).current;

  useLayoutEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style='auto'/>
      <Animated.View style={{opacity: fadeAnim}} pointerEvents={'none'}>
        <WelcomeScreen />
      </Animated.View>
      <QuoteScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
