import React, { useEffect, FC } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/routers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

// Redux
import { loadFavorites } from "../../redux/actions/favorites";

// CustomBtn
import { customBtn } from "../../children_components/customBtns";
import { Istate } from "../../ts/types";

const Favorite = createStackNavigator()

const FavoritesScreen: FC = (props) => {
    
    const dispatch = useDispatch()
    const nav = useNavigation()
    const allFavs = useSelector((state: Istate) => state.favs)

    useEffect(() => {

        const unsubscribe = nav.addListener('focus', () => {
            dispatch(loadFavorites())
        })

        return unsubscribe
    }, [])


    return (
        <FlatList style={{paddingTop: 20}} data={allFavs} keyExtractor={item => item.id} renderItem={(item) => {

            const { item: { plantId, name } } = item

            return (
                <TouchableOpacity onPress={() => console.log(name)} style={styles.button} key={plantId}>
                    <Text style={{fontFamily: 'monsReg'}} > {name} </Text>
                </TouchableOpacity>
            )

        }} />
    )

}

export default FavoritesScreen

export const FavScreenNavigator = () => {

    const nav = useNavigation()

    return (
        <Favorite.Navigator screenOptions={{
            headerStyle: {
                elevation: 0,
                backgroundColor: '#62BD69',
            },
            headerTintColor: 'white',
            headerLeft: () => {

                return <HeaderButtons HeaderButtonComponent={customBtn} >
                    <Item title="asdfaf" iconName="menu" color="white" onPress={() => nav.dispatch(DrawerActions.toggleDrawer())} iconSize={25} />
                </HeaderButtons>

            }
        }} >
            
            <Favorite.Screen name="chou" options={{
                headerTitle: 'Favorites',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'monsBold'
                }
            }} component={FavoritesScreen} />

        </Favorite.Navigator>
    )

}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        paddingHorizontal: 10 
    }
})