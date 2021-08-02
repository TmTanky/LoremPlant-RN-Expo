import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import CategoriesScreen from "../screens/categories_screens/categories";

const Categories = createStackNavigator()

export const CategoriesNavigator = () => {

    return (
        <Categories.Navigator>
            <Categories.Screen name="categoriesscreen" component={CategoriesScreen} />
        </Categories.Navigator>
    )

}