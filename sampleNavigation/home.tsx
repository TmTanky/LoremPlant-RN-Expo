import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList  } from "@react-navigation/drawer";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Screens and Navigators
import { HomeHome } from "../screens/home_screens/home";
import { SearchSearch } from "../screens/home_screens/search";
import { FavScreenNavigator } from "../screens/favorites_screens/favorites";
import { CategoriesNavigator } from "./categories";

// Firebase
import { firebase } from "../firebase/config";

// CustomBtn
import { customBtn } from "../children_components/customBtns";

// Stacks
const BottomStack = createStackNavigator()

// BottomTabs
const BottomTab = createMaterialBottomTabNavigator()

// Drawers
const Drawer = createDrawerNavigator()

export const DrawerNavigator: FC = (props: any) => {

    return (
        <Drawer.Navigator drawerContent={(props) => {
            return (
                <DrawerContentScrollView contentContainerStyle={{paddingTop: 100}} {...props} >
                    {/* <DrawerItemList {...props} /> */}
                    <DrawerItem onPress={() => props.navigation.navigate('tae')} pressColor="#62BD69" label="Home" labelStyle={{fontFamily: 'monsMed'}} />
                    <DrawerItem onPress={() => props.navigation.navigate('pota')} pressColor="#62BD69" label="Categories" labelStyle={{fontFamily: 'monsMed'}} />
                    <DrawerItem onPress={() => props.navigation.navigate('pepe')} pressColor="#62BD69" label="Favorites" labelStyle={{fontFamily: 'monsMed'}} />
                    <DrawerItem onPress={() => firebase.auth().signOut()} label="Logout" />
                </DrawerContentScrollView>
            )
        }} >
            <Drawer.Screen name="tae" component={BottomTabStackNavigator}  />
            <Drawer.Screen name="pota" component={CategoriesNavigator}  />
            <Drawer.Screen name="pepe" component={FavScreenNavigator}  />
        </Drawer.Navigator>
    )

}

export const BottomTabNavigator = () => {

    return (
        <BottomTab.Navigator shifting={true} activeColor="white" inactiveColor="#62BD69" barStyle={{
            backgroundColor: '#62BD69',
            justifyContent: 'center'
        }} >

            <BottomTab.Screen name="hometab" options={{
                title: 'Home',
                tabBarIcon: () => {
                    return <MaterialCommunityIcons name="home" size={25} color="white" />
                },
                tabBarColor: '#5AAB61'
            }} component={HomeHome} />
            <BottomTab.Screen name="favtab" options={{
                title: 'Search',
                tabBarIcon: () => {
                    return <Ionicons name="ios-search-sharp" size={25} color="white" />
                },
                tabBarColor: '#62BD69'
            }} component={SearchSearch} />
            
        </BottomTab.Navigator>
    )

}

export const BottomTabStackNavigator: FC = (props: any) => {

    return (
        <BottomStack.Navigator screenOptions={{
            headerShown: false
        }} >
            <BottomStack.Screen name="puday" component={BottomTabNavigator} />
        </BottomStack.Navigator>
    )
    
}
