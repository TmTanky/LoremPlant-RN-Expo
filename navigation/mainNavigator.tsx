import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { firebase } from "../firebase/config";
import AppLoading from "expo-app-loading";

// Navigators
import { AuthNavigator } from "./authNavigator";
import { HomeNavigator, BottomTabNavigator, DrawerNavigator } from "./homeNavigator";
import { DrawerNavigator as NewDrawer } from "../sampleNavigation/home";

// Types
import { Iuser } from "../ts/types";

const Main = createStackNavigator()

export const MainNavigator = () => {

    const [user, setUser] = useState<Iuser>()
    const [isAuth, setIsAuth] = useState<boolean>()

    const getUser = () => {
        
        const user = firebase.auth().currentUser

        if (!user) {
            return setIsAuth(false)
        }

        return setIsAuth(true)

    }

    useEffect(() => {

        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user?.providerData[0] as Iuser)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {

        getUser()

    }, [user])

    if (isAuth == undefined) {
        return <AppLoading/>
    }

    return (
        <Main.Navigator> 

            { isAuth === false && !user ?
                <Main.Screen name="MAIN_AUTH" options={{
                    headerShown: false
                }} component={AuthNavigator}/> : 
                <Main.Screen name="MAIN_HOME" options={{
                    headerShown: false
                }} component={NewDrawer}/>
            }

        </Main.Navigator>
    )

}