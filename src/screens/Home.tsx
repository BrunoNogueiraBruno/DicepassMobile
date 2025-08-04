import React from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../styles/colors'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.imageBg}
      >
        <LinearGradient
          colors={["#1e202611", "#1E2026"]}
          start={{ x: 4, y: 0 }}
          end={{ x: 2, y: 1 }}
          style={styles.gradient}
        >
          <Logo showContainer />
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBg,
  },
  imageBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
