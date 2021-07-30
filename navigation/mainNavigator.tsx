import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useSelector } from "react-redux";
import { firebase } from "../firebase/config";
import { Text, Button } from 'react-native'
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';

// TS
import { Istate, Iuser } from "../ts/types";

// Navigators
import AuthNavigator from "./authNavigator";
import HomeNavigator from "./homeNavigator";
import { useState } from "react";
import { FC } from "react";

// Navigators
import { DrawerNavigator } from "./homeNavigator";

const Main = createStackNavigator()

const MenuButton: FC = (props) => {
    return <HeaderButton title="button" IconComponent={MaterialCommunityIcons} iconSize={24} {...props} />
}

const MainNavigator = () => {

    const {Navigator, Screen} = Main
    
    const [currentUser, setCurrentUser] = useState<Iuser>()

    useEffect(() => {

        const theUser = firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user?.providerData[0] as Iuser)
        })
        // setCurrentUser(theUser)
        return () => theUser()
    }, [])

    // const currentUser = firebase.auth().currentUser?.providerData[0] as Iuser
    // console.log(currentUser)

    // const isAuth = useSelector((state: Istate) => state.auth)
    // console.log(isAuth)

    return (
        <Navigator>
            { !currentUser ? <Screen name="Auth" options={{headerShown: false}} component={AuthNavigator}/> : 
            <Screen name="Home" options={{
                headerStyle: {
                    backgroundColor: '#62BD69',
                    // height: 90
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerLeft: () => {
                    return <HeaderButtons HeaderButtonComponent={MenuButton}>
                        <Item title="menu" iconName="menu" color="white" />
                    </HeaderButtons>
                }
            }} component={HomeNavigator} /> }

            <Screen name="Drawer" component={DrawerNavigator} />
        </Navigator>
    )

}

export default MainNavigator