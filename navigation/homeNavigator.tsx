import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../screens/home_screen/home";

const Home = createStackNavigator()

const HomeNavigator = () => {

    const {Navigator, Screen} = Home

    return (
        <Navigator>
            <Screen name="homescreen" component={HomeScreen}/>
        </Navigator>
    )

}

export default HomeNavigator