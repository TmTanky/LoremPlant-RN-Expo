import React, { FC } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { useSelector } from "react-redux";
import { Istate } from "../../ts/types";

const PlantFullDetails: FC = (props: any) => {

    const { title } = props.route.params as {title: string}
    const allPlants = useSelector((state: Istate) => state.plants)
    const selectedPlant = allPlants.filter(item => item.name === title)[0]

    return (
        <ScrollView style={styles.root}>

            <View style={styles.imgContainer} >
                <Image style={styles.img} source={{uri: selectedPlant.imgUrl}} />
            </View>

            <View style={{...styles.info, flex: 2}}>
                <Text style={{fontFamily: 'monsBold', marginBottom: 15, color: '#62BD69', fontSize: 20}} > {selectedPlant.name} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20}} > {selectedPlant.description} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20}} > Type: {selectedPlant.type} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20}} > Light: {selectedPlant.light} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20}} > Watering: {selectedPlant.watering} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20}} > Propagation: {selectedPlant.propagate} </Text>
            </View>

        </ScrollView>
    )

}

export default PlantFullDetails

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ECECE9'
    },
    imgContainer: {
        // marginTop: 30,
        height: 250,
        width: '100%',
        // backgroundColor: 'red',
    },
    img: {
        flex: 1,
        // margin: 5,
        // borderRadius: 5
    },
    info: {
        marginTop: 20,
        marginHorizontal: 15
    }
})