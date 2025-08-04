import React from 'react';
// import { SafeAreaView, Button, StyleSheet, Text } from 'react-native';
// import { useTranslation } from 'react-i18next';
// import LinearGradient from 'react-native-linear-gradient';
import './i18n';
// import Logo from './src/components/Logo';
// import { Colors } from './src/styles/colors'; // ← aqui importa suas variáveis
import Home from './src/screens/Home';

export default function App() {
  // const { t, i18n } = useTranslation();

  // function handlePress() {
  //   console.log('Botão foi clicado!');
  // }

  return (
    <Home />
  )

//   return (
//     <SafeAreaView style={styles.container}>
//       <Logo showTitle />

//       <Button
//         title={t('createPassphrase.buttonTitle')}
//         onPress={handlePress}
//         color={Colors.blue[4]} // botão azul estilizado
//       />
// <LinearGradient
//   colors={[Colors.blue[5], Colors.blue[9]]}
//   style={StyleSheet.absoluteFill}
// >
//   <LinearGradient
//       colors={['#4c669f', '#3b5998', '#192f6a']}
//       style={styles.container}
//     >
//     <SafeAreaView style={styles.container}>
//       <Text>Texto sobre camadas</Text>
//     </SafeAreaView>
//   </LinearGradient>
// </LinearGradient>


//       <SafeAreaView>
//         <Text>Texto com Figtree</Text>
//       </SafeAreaView>

//       {/* <Button
//         title={t('generate')}
//         onPress={() => {
//           const newLang = i18n.language === 'pt' ? 'en' : 'pt';
//           i18n.changeLanguage(newLang);
//         }}
//       /> */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 20,
//     backgroundColor: Colors.mainBg, // ← cor de fundo global
//   },
// });
}