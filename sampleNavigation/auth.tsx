import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import AuthScreen from "../screens/auth_screens/auth";

const Auth = createStackNavigator()

export const AuthNavigator = () => {

    return (
        <Auth.Navigator>
            <Auth.Screen options={{
                headerShown: false
            }} name="authscreen" component={AuthScreen} />
        </Auth.Navigator>
    )

}