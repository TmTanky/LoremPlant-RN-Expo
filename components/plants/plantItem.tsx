import React, { FC } from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet, TouchableNativeFeedback } from 'react-native'

type GoTo = (a: string, b: string) => void

interface Props {
    name: string
    imgUrl: string
    description?: string
    goTo?: GoTo
}

export const PlantItem: FC<Props> = (props: any) => {

    const { name, imgUrl, goTo } = props as {name: string, imgUrl: string, goTo: GoTo}

    return (

        <View style={sample.root}>
            <TouchableOpacity onPress={() => goTo('plantdetail', name)} style={sample.items}>
                <View style={sample.imgContainer}>
                    <Image style={sample.img} source={{uri: imgUrl}} />
                </View>

                <View style={sample.info}>
                    <Text style={{fontFamily: 'monsBold', fontSize: 20, color: '#62BD69'}} > {name} </Text>
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
        backgroundColor: '#ECECE9'
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