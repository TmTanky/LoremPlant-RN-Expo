import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { firebase } from "../firebase/config";

// Navigators
import { AuthNavigator } from "./authNavigator";
import { HomeNavigator, BottomTabNavigator, DrawerNavigator, TaeNavigator } from "./homeNavigator";

// Types
import { Iuser } from "../ts/types";

const Main = createStackNavigator()

export const MainNavigator = () => {

    const [user, setUser] = useState<Iuser>()

    useEffect(() => {

        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user?.providerData[0] as Iuser)
        })

        return () => unsubscribe()
    }, [])

    return (
        <Main.Navigator> 

            { !user ?
                <Main.Screen name="MAIN_AUTH" options={{
                    headerShown: false
                }} component={AuthNavigator}/> : 
                <Main.Screen name="MAIN_HOME" options={{
                    headerShown: false
                }} component={HomeNavigator}/>
            }

        </Main.Navigator>
    )

}