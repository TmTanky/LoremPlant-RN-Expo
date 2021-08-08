import React, { FC, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { useSelector } from "react-redux";

// Types
import { Istate } from "../../ts/types";

// DB Helpers
import { checkIfFav } from "../../db/config";

const PlantDetail: FC = (props: any) => {

    const { title } = props.route.params as {title: string}
    const allPlants = useSelector((state: Istate) => state.plants)
    const selectedPlant = allPlants.filter(item => item.name === title)[0]

    // const tae = checkIfFav(selectedPlant.id).then(res => {
    //     console.log(res)
    // })
    // console.log(tae)
    // console.log(isAboveFive(4))

    // const pwet = async () => {
    //     const res = await checkIfFav(selectedPlant.id).then(tae => {
    //         return tae
    //     })

    //     return res
    // }

    // pwet().catch(err => err)

    // const pepe = pwet().catch(err => err)
    // console.log(pwet())

    // console.log(pwet())

    return (
        <ScrollView style={styles.root}>

            <View style={styles.imgContainer} >
                <Image style={styles.img} source={{uri: selectedPlant.imgUrl}} />
            </View>

            <View style={{...styles.info, flex: 2}}>
                {/* <Text> {`${checkIfFav(selectedPlant.id)}`} </Text> */}
                <Text style={{fontFamily: 'monsBold', marginBottom: 15, color: '#62BD69', fontSize: 23}} > {selectedPlant.name} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20, fontSize: 16}} > {selectedPlant.description} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20, fontSize: 16}} > <Text style={{color: '#62BD69'}} > Type: </Text> {selectedPlant.type} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20, fontSize: 16}} > <Text style={{color: '#62BD69'}} > Light: </Text> {selectedPlant.light} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20, fontSize: 16}} > <Text style={{color: '#62BD69'}} > Watering: </Text> {selectedPlant.watering} </Text>
                <Text style={{fontFamily: 'monsReg', marginBottom: 20, fontSize: 16}} > <Text style={{color: '#62BD69'}} > Propagation: </Text> {selectedPlant.propagate} </Text>
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
        // backgroundColor: 'yellow'
    }
})