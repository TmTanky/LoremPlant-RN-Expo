import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/routers";

// CustomBtn
import { customBtn } from "../children_components/customBtns";

// Screens
import CategoriesScreen from "../screens/categories_screens/categories";
import PlantCategory from "../screens/categories_screens/plantCategory/plantCategory";
import PlantFullDetails from "../components/plants/plantFullDetails";

const Categories = createStackNavigator()

export const CategoriesNavigator: FC = (props: any) => {

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

                return {
                    headerTitle: title,
                    headerStyle: {
                        backgroundColor: '#62BD69'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: 'monsMed',
                    }
                }
            }} name="qweqwe" component={PlantFullDetails} />

        </Categories.Navigator>
    )

}