import React, { FC } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { DrawerActions } from "@react-navigation/routers";
import { firebase } from "../firebase/config";

// Screens
import HomeScreen from "../screens/home_screens/home";
import SearchScreen from "../screens/home_screens/search";

// Custom Buttons
import { customBtn } from "../children_components/customBtns";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CategoriesNavigator } from "./categoriesNavigator";
import { Text } from "react-native";
import PlantDetail from "../screens/home_screens/plantDetail";

const Home = createStackNavigator()
const BottomTab = createMaterialBottomTabNavigator()
const Drawer = createDrawerNavigator()
// const Tae = createStackNavigator()

export const BottomTabNavigator = () => {

    return (
        <BottomTab.Navigator activeColor="white" barStyle={{
            backgroundColor: '#62BD69',
            height: 65,
            justifyContent: 'center'
        }}>
            <BottomTab.Screen name="hometab" component={HomeScreen} options={{
                tabBarIcon: () => {
                    return <MaterialCommunityIcons name="home" size={25} color="white" />
                },
                title: 'Home'
            }} />
            <BottomTab.Screen name="favtab" component={SearchScreen} options={{
                tabBarIcon: () => {
                    return <Ionicons name="ios-search-sharp" size={25} color="white" />
                },
                title: 'Search',
            }} />
        </BottomTab.Navigator>
    )

}

export const HomeNavigator: FC = (props: any) => {

    return (
        <Home.Navigator>
            
            <Home.Screen options={{
                headerLeft: () => {
                    return <HeaderButtons HeaderButtonComponent={customBtn} >
                        <Item title="menusdf" iconName="menu" onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} /> 
                    </HeaderButtons>
                },
                title: 'LoremPlant',
                headerTitleAlign: 'center',
            }} name="homescreen" component={DrawerNavigator} />
            
        </Home.Navigator>
    )

}

export const DrawerNavigator: FC = (props: any) => {

    return (
        <Drawer.Navigator drawerContent={() => {
            return (
                <DrawerContentScrollView>
                    <DrawerItem onPress={() => props.navigation.navigate('homedrawer')} label="Home"/>
                    <DrawerItem onPress={() => props.navigation.navigate('settingsdrawers')} label="Categories"/>
                    <DrawerItem onPress={() => firebase.auth().signOut()} label="Logout"/>
                </DrawerContentScrollView>
            )
        }} >
            <Drawer.Screen name="homedrawer" component={BottomTabNavigator} />
            <Drawer.Screen name="settingsdrawers" component={CategoriesNavigator} />
        </Drawer.Navigator>
    )

}

// export const TaeNavigator: FC = (props: any) => {

//     // console.log(props)

//     return (
//         <Tae.Navigator screenOptions={{
//             headerLeft: () => {
//                 return <HeaderButtons HeaderButtonComponent={customBtn} >
//                     <Item title="menusdf" iconName="menu" onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} /> 
//                 </HeaderButtons>
//             }
//         }} >

//             <Tae.Screen name="taenav" component={DrawerNavigator} />

//         </Tae.Navigator>
//     )

// }