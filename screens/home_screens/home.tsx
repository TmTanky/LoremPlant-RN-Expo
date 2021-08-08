import React, { useEffect, useState, FC } from "react";
import { StyleSheet, FlatList, ToastAndroid } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/routers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from 'expo-notifications'

// Helpers
import { schedulePushNotification, notifInit } from "../../helpers/notifications";

// Components
import { customBtn } from "../../children_components/customBtns";
import PlantDetail from "./plantDetail";
import { PlantItem } from "../../components/plants/plantItem";

// Redux
import { loadPlants } from "../../redux/actions/plants";
import { addToFavorites , removeFavorites } from "../../redux/actions/favorites";

// Types
import { Istate } from "../../ts/types";

notifInit()

const HomeScreen: FC = (props: any) => {

    const dispatch = useDispatch()
    const [refreshState, setRefreshState] = useState(false)
    const allPlants = useSelector((state: Istate) => state.plants).slice(0, 5)

    useEffect(() => {

        dispatch(loadPlants())
        
        const pushNotif = async () => {
            await schedulePushNotification('Welcome to LoremPlant', 'Enjoy the App.')
        }

        pushNotif()

    }, [])
    
    const goTo = (routeName: string, param: string) => {

        props.navigation.navigate(routeName, { title: param })

    }
    
    const refetchData = () => {

        // setRefreshState(true)
        dispatch(loadPlants())
        // setRefreshState(false)

    }

    return (
        <FlatList refreshing={refreshState} onRefresh={refetchData} style={styles.rootScrollView} data={allPlants} keyExtractor={item => item.id} renderItem={({item}) => {
            return <PlantItem {...props} key={item.id} goTo={goTo} name={item.name} imgUrl={item.imgUrl} />
        }} />
    )

}

export default HomeScreen

const styles = StyleSheet.create({
    rootScrollView: {
        paddingTop: 30,
    }
})

// Navigator

const Home = createStackNavigator()

function getHeaderTitle(route: any) {
  const routeName = route.params.title
  return routeName
}

export const HomeHome: FC = (props: any) => {

    const dispatch = useDispatch()
    const allPlants = useSelector((state: Istate) => state.plants).slice(0, 5)
    const allFavs = useSelector((state: Istate) => state.favs)

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

                const selectedPlant = allPlants.find(item => item.name === getHeaderTitle(props.route))
                const isFav = allFavs.find(item => item.name === getHeaderTitle(props.route))

                return {
                    headerTitle: getHeaderTitle(props.route),
                    headerStyle: {
                        backgroundColor: '#62BD69'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: 'monsMed',
                    },
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={customBtn} >
                            <Item onPress={() => {

                                ToastAndroid.showWithGravity(`${!isFav ? 'Added' : 'Removed'} to Favorites!`, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                                
                                isFav ? dispatch(removeFavorites(selectedPlant!.id)) :
                                dispatch(addToFavorites(selectedPlant!.name, selectedPlant!.id))

                            }} iconName={ isFav ? 'star' : 'star-outline' } title="save" IconComponent={MaterialCommunityIcons} iconSize={25} color="white" />
                        </HeaderButtons>
                    }
                }
            }} name="plantdetail" component={PlantDetail} />

        </Home.Navigator>
    )

}
