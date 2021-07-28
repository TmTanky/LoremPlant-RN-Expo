import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Navigators
import AuthNavigator from "./authNavigator";
import HomeNavigator from "./homeNavigator";

const Main = createStackNavigator()

const MainNavigator = () => {

    const {Navigator, Screen} = Main

    return (
        <Navigator>
            <Screen name="Auth" options={{
                headerShown: false
            }} component={AuthNavigator}/>
            <Screen name="Home" component={HomeNavigator} />
        </Navigator>
    )

}

export default MainNavigator