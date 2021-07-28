import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import AuthScreen from "../screens/auth_screens/auth";

const Auth = createStackNavigator()

const AuthNavigator = () => {

    const {Navigator, Screen} = Auth

    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="authscreen" component={AuthScreen}/>
        </Navigator>
    )

}

export default AuthNavigator