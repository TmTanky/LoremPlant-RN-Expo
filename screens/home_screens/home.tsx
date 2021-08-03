import React, { useEffect, useState, FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { Istate } from "../../ts/types";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/routers";

// Components
import { customBtn } from "../../children_components/customBtns";
import PlantDetail from "./plantDetail";
import { PlantItem } from "../../children_components/plantItem";

// Redux
import { loadPlants } from "../../redux/actions/actions";

const HomeScreen: FC = (props) => {

    const dispatch = useDispatch()
    const allPlants = useSelector((state: Istate) => state.plants)

    useEffect(() => {

        dispatch(loadPlants())

    }, [])


    return (
        <ScrollView style={styles.rootScrollView}>

            { allPlants.map(item => {
                return <PlantItem {...props} key={item.id} goodFor={item.goodFor} name={item.name} imgUrl={item.imgUrl} />
            }) }

        </ScrollView>
    )

}

export default HomeScreen

const styles = StyleSheet.create({
    rootScrollView: {
        flex: 1,
        marginTop: 30
        // backgroundColor: 'teal',
    }
})

// Navigator

const Home = createStackNavigator()

export const HomeHome: FC = (props: any) => {

    return (
        <Home.Navigator>
            <Home.Screen options={{
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#62BD69'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontFamily: 'monsBold',
                },
                headerTitleAlign: 'center',
                headerLeft: () => {
                    return <HeaderButtons HeaderButtonComponent={customBtn} >
                        <Item title="menusdf" color="white" iconName="menu" onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} /> 
                    </HeaderButtons>
                }
            }} name="yawa" component={HomeScreen} />

            <Home.Screen options={{
                title: 'plantname',
                headerStyle: {
                    backgroundColor: '#62BD69'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontFamily: 'monsBold',
                },
                headerTitleAlign: 'center'
            }} name="plantdetail" component={PlantDetail} />
        </Home.Navigator>
    )

}
