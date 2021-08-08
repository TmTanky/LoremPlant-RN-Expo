import * as Notifications from 'expo-notifications'

// export const schedulePushNotification = async () => {
//     await Notifications.scheduleNotificationAsync({
//         content: {
//           title: "You've got mail! 📬",
//           body: 'Here is the notification body',
//           data: { data: 'goes here' },
//         },
//         trigger: { seconds: 1 }
//       })
// }

export const schedulePushNotification = async (title: string, body: string) => {
    await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 1 }
      })
}

export const notifInit = () => {
    return Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false
        }),
    });
}