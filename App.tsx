import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

// Main Navigator
import { MainNavigator } from './navigation/mainNavigator';

// Test Screen
import TestScreen from './screens/test_screens/test';

// Initialized DB
import { initialized } from './db/config'

initialized().then(() => {
  console.log('done')
}).catch(() => {
  console.log('failed')
})

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const App = () => {

  const [loading] = useFonts({
    monsReg: require('./assets/fonts/Montserrat-Regular.ttf'),
    monsMed: require('./assets/fonts/Montserrat-Medium.ttf'),
    monsBold: require('./assets/fonts/Montserrat-Bold.ttf')
  })

  if (!loading) return <AppLoading/>

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
      {/* <TestScreen/> */}
    </Provider>
  )

}

export default App
