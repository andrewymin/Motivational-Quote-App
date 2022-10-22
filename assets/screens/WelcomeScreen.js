import React from 'react';
import { ImageBackground, Text, SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../colors';

function WelcomeScreen(props) {

    return (
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
