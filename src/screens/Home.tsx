import React from 'react'
import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../styles/colors'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { useTranslation } from 'react-i18next'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Home({ navigation }: any) {
  const { t } = useTranslation()

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
          <Button
            title={t('createPassphrase.buttonTitle')}
            onPress={() => navigation.navigate('Main')}
            prefix={<MaterialIcons name="key" size={30} />}
          />
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  )
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
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingTop: 30,
    paddingBottom: 80,
  },
})
