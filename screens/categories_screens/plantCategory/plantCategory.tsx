import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute, useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

// Types
import { Istate } from "../../../ts/types";
import { PlantItem } from "../../../components/plants/plantItem";
import PlantDetail from "../../../components/plants/plantFullDetails";

const PlantCategory: FC = (props: any) => {

    const route = useRoute()
    const nav = useNavigation()
    const { id } = route.params as { type: string, id: string }
    const allPlants = useSelector((state: Istate) => state.plants)
    const filteredPlants = allPlants.filter(item => item.type === id)


    if (filteredPlants.length <= 0) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'monsMed', fontSize: 15}}> No Plants Available </Text>
            </View>
        )
    }

    return (

        <FlatList style={{marginTop: 20}} data={filteredPlants} keyExtractor={item => item.id} renderItem={(item) => {

            const { item: { name, imgUrl } } = item

            return (
                <View style={sample.root}>
                    <TouchableOpacity onPress={() => nav.navigate('qweqwe', { title: name })} style={sample.items}>
                        <View style={sample.imgContainer}>
                            <Image style={sample.img} source={{uri: imgUrl}} />
                        </View>

                        <View style={sample.info}>
                            <Text style={{fontFamily: 'monsBold', fontSize: 20, color: '#62BD69'}} > {name} </Text>
                        </View> 
                    </TouchableOpacity>
                </View>
            )

        }} />

    )

}

export default PlantCategory

const Plant = createStackNavigator()

const sample = StyleSheet.create({
    root: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    items: {
        flex: 1,
        // backgroundColor: 'yellow',
        width: '93%',
        height: 350,
        margin: 5,
    },
    imgContainer: {
        height: '80%',
        width: '100%'
    },
    img: {
        height: '100%',
        width: '100%',
        borderRadius: 8
    },
    info: {
        marginTop: 10,
        height: '15%',
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.2
        // backgroundColor: 'yellow'
    }
})