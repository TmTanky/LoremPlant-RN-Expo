import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import { Istate } from "../../ts/types";
import { useDispatch, useSelector } from "react-redux";
import { loadPlants } from "../../redux/actions/actions";
import { PlantItem } from "../../children_components/plantItem";

const HomeScreen = () => {

    const dispatch = useDispatch()
    const allPlants = useSelector((state: Istate) => state.plants)

    useEffect(() => {

        dispatch(loadPlants())

    }, [])


    return (
        <ScrollView>

            { allPlants.map(item => {
                return <PlantItem key={item.id} goodFor={item.goodFor} name={item.name} imgUrl={item.imgUrl} />
            }) }

        </ScrollView>
    )

}

export default HomeScreen

const styles = StyleSheet.create({

})