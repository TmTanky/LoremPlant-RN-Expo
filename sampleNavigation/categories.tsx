import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/routers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { ToastAndroid } from "react-native";

// Redux
import { addToFavorites, removeFavorites } from "../redux/actions/favorites"; 

// Types
import { Istate } from "../ts/types";

// CustomBtn
import { customBtn } from "../children_components/customBtns";

// Screens
import CategoriesScreen from "../screens/categories_screens/categories";
import PlantCategory from "../screens/categories_screens/plantCategory/plantCategory";
import PlantFullDetails from "../components/plants/plantFullDetails";

const Categories = createStackNavigator()

function getHeaderTitle(route: any) {
    const routeName = route.params.title
    return routeName
}

export const CategoriesNavigator: FC = (props: any) => {

    const dispatch = useDispatch()
    const allPlants = useSelector((state: Istate) => state.plants)
    const allFavs = useSelector((state: Istate) => state.favs)

    return (
        <Categories.Navigator>

            <Categories.Screen name="categoriesscreen" options={{
                title: 'Categories',
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
            }} component={CategoriesScreen} />

            <Categories.Screen name="plantcategory" options={(props) => {

                const { type } = props.route.params as { type: string }
                
                return {
                    headerTitle: `${type}`,
                    headerStyle: {
                        backgroundColor: '#62BD69'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: 'monsMed',
                    }
                }
            }} component={PlantCategory} />

            <Categories.Screen options={(props) => {

                const { title } = props.route.params as { title: string }
                const selectedPlant = allPlants.find(item => item.name === title)
                const isFav = allFavs.find(item => item.name === getHeaderTitle(props.route))

                return {
                    headerTitle: title,
                    headerStyle: {
                        backgroundColor: '#62BD69'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: 'monsMed',
                    },
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={customBtn}>
                            <Item title="save" onPress={() => {
                                
                                ToastAndroid.showWithGravity(`${!isFav ? 'Added' : 'Removed'} to Favorites!`, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                                
                                isFav ? dispatch(removeFavorites(selectedPlant!.id)) :
                                dispatch(addToFavorites(selectedPlant!.name, selectedPlant!.id))

                            }} iconSize={25} iconName={ isFav ? 'star' : 'star-outline' } color="white" IconComponent={MaterialCommunityIcons} />
                        </HeaderButtons>
                    }
                }
            }} name="qweqwe" component={PlantFullDetails} />

        </Categories.Navigator>
    )

}