import React, { FC } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { useSelector } from "react-redux";
import { Istate } from "../../ts/types";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const PlantDetail: FC = (props: any) => {

    const { title } = props.route.params as {title: string}
    const allPlants = useSelector((state: Istate) => state.plants)
    const selectedPlant = allPlants.filter(item => item.name === title)[0]
    // console.log(props.route.params.title)
    const routeName = getFocusedRouteNameFromRoute(props.route) ?? props.route.params.title;
    console.log(routeName)

    return (
        <ScrollView style={styles.root}>

            <View style={styles.imgContainer} >
                <Image style={styles.img} source={{uri: selectedPlant.imgUrl}} />
            </View>

            <View style={{...styles.info, flex: 2}}>
                <Text style={{fontFamily: 'monsBold', marginBottom: 3, color: '#62BD69'}} > {selectedPlant.name} </Text>
                <Text style={{fontFamily: 'monsMed', marginBottom: 5}} > {selectedPlant.goodFor} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 5, marginHorizontal: 5}} > {selectedPlant.description} </Text>
            </View>

        </ScrollView>
    )

}

export default PlantDetail

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    imgContainer: {
        // marginTop: 30,
        height: 230,
        width: '100%',
        // backgroundColor: 'red',
    },
    img: {
        flex: 1,
        // margin: 5,
        borderRadius: 5
    },
    info: {
        marginTop: 20,
        // backgroundColor: 'teal',
        margin: 5,
    }
})