import React, { useEffect, useState, FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView, FlatList } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { Istate } from "../../ts/types";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/routers";

// Components
import { customBtn } from "../../children_components/customBtns";
import PlantDetail from "./plantDetail";
import { PlantItem } from "../../components/plants/plantItem";

// Redux
import { loadPlants } from "../../redux/actions/actions";

const HomeScreen: FC = (props: any) => {

    const dispatch = useDispatch()
    const allPlants = useSelector((state: Istate) => state.plants).slice(0, 5)
    const goTo = (routeName: string, param: string) => {

        props.navigation.navigate(routeName, { title: param })

    }

    useEffect(() => {

        dispatch(loadPlants())

    }, [])


    // return (
    //     <ScrollView style={styles.rootScrollView}>

    //         { allPlants.map(item => {
    //             return <PlantItem {...props} key={item.id} goTo={goTo} name={item.name} imgUrl={item.imgUrl} />
    //         }) }

    //     </ScrollView>
    // )

    return (
        <FlatList style={styles.rootScrollView} data={allPlants} keyExtractor={item => item.id} renderItem={({item}) => {
            return <PlantItem {...props} key={item.id} goTo={goTo} name={item.name} imgUrl={item.imgUrl} />
        }} />
    )

}

export default HomeScreen

const styles = StyleSheet.create({
    rootScrollView: {
        paddingTop: 30,
        backgroundColor: '#ECECE9'
    }
})

// Navigator

const Home = createStackNavigator()

function getHeaderTitle(route: any) {
  const routeName = route.params.title

  return routeName
}

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

            <Home.Screen options={(props) => {
                return {
                    headerTitle: getHeaderTitle(props.route),
                    headerStyle: {
                        backgroundColor: '#62BD69'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: 'monsMed',
                    }
                }
            }} name="plantdetail" component={PlantDetail} />

        </Home.Navigator>
    )

}
