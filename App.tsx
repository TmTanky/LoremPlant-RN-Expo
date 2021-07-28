import React from 'react';
import MainNavigator from './navigation/mainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const App = () => {

  const [loading] = useFonts({
    monsReg: require('./assets/fonts/Montserrat-Regular.ttf'),
    monsMed: require('./assets/fonts/Montserrat-Medium.ttf'),
    monsBold: require('./assets/fonts/Montserrat-Bold.ttf')
  }) 

  if (!loading) return <AppLoading/>

  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  )

}

export default App
