import React, { FC } from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet, TouchableNativeFeedback } from 'react-native'

interface Props {
    name: string
    imgUrl: string
    description?: string
    goodFor?: string
}

export const PlantItem: FC<Props> = (props) => {

    const {name, imgUrl, goodFor} = props

    return (
        <TouchableOpacity onPress={() => {
            console.log(name)
        }} key={name} style={styles.rootItem} >
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: imgUrl}} />
            </View>

            <View style={styles.info}>
                <Text style={{fontFamily: 'monsBold', fontSize: 20, color: '#62BD69'}} > {name} </Text>
                <Text style={{fontFamily: 'monsReg'}} > {goodFor} </Text>
            </View> 
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    rootItem: {
        // backgroundColor: 'red',
        height: 350,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10
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
        height: '20%',
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.2
        // backgroundColor: 'yellow'
    }
})
