import React, { useCallback} from 'react';
import { ImageBackground, Text, SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../colors';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

function WelcomeScreen(props) {

  const [fontsLoaded] = useFonts({
    'pd-reg': require('../../assets/fonts/PlayfairDisplay-Regular.ttf'),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     console.log(fontsLoaded)
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

    return (
      // <View style={styles.welView} onLayout={onLayoutRootView}>
      <View style={styles.welView}>
          <ImageBackground source={require("../../assets/images/background.jpg")} style={styles.welcomePic}/> 
          <Text style={[styles.welcomeText, styles.boxShadow]}>Motivational Quotes</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    welView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    welcomePic: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        // zIndex: 1,
    },
    welcomeText: {
        textAlign: 'center',
        fontFamily: 'pd-reg',
        fontSize: 50,
        fontWeight:'bold',
        color: colors.secondary,
      // borderWidth: 1,
    },
    boxShadow: {
        elevation: 50,
        shadowColor: '#fff',
        // borderWidth: 1,
    },
  });

export default WelcomeScreen;
