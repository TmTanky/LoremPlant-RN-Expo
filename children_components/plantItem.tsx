import React, { FC } from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet, TouchableNativeFeedback } from 'react-native'

interface Props {
    name: string
    imgUrl: string
    description?: string
    goodFor?: string
}

export const PlantItem: FC<Props> = (props: any) => {

    const {name, imgUrl, goodFor} = props as {name: string, imgUrl: string, goodFor: string}

    return (

        <View style={sample.root}>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('plantdetail', { title: name })
            }} style={sample.items}>
                <View style={sample.imgContainer}>
                    <Image style={sample.img} source={{uri: imgUrl}} />
                </View>

                <View style={sample.info}>
                    <Text style={{fontFamily: 'monsBold', fontSize: 20, color: '#62BD69'}} > {name} </Text>
                    <Text style={{fontFamily: 'monsReg'}} > {goodFor} </Text>
                </View> 
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    rootItem: {
        backgroundColor: 'red',
        height: 400,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 10,
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
    }
})

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
        height: 400,
        margin: 5,
        marginVertical: 15
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