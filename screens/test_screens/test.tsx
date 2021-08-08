import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false
  }),
});

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 1 }
    })
  }

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    //   console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }

const TestScreen = () => {

    useEffect(() => {

        const Notif = async () => {

            // const tae = (await Notifications.getDevicePushTokenAsync()).data
            const tae = await registerForPushNotificationsAsync()
            
            // console.log(tae)

            Notifications.addNotificationReceivedListener(e => console.log(e.request))

        }

        Notif()

    }, [])

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
            <Text> Hello </Text>
            <Button
                title="Press to schedule a notification"
                onPress={async () => {
                await schedulePushNotification();
                }}
            />
        </View>
    )

}

export default TestScreen