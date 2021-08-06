import React, { FC, useState } from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableHighlight } from 'react-native'
import { useNavigation } from "@react-navigation/core";
import plant1 from '../../assets/plant1.png'
import plant2 from '../../assets/plant2.png'
import plant3 from '../../assets/plant3.png'
import plant4 from '../../assets/plant4.png'

// Datas
import { CATEGORIES_DATA } from "../../data/categoriesData";

const CategoriesScreen: FC = () => {

    const nav = useNavigation()

    const pickedImg = (id: string) => {

        switch(id) {
            case '1':
                return plant1
            case '2':
                return plant2
            case '3':
                return plant3
            case '4':
                return plant4
        }

    }

    return (
        <View style={styles.rootBox}>
            
            <View  style={{flex: 1, marginTop: 20}}>

                <Text style={{textAlign: 'center', fontFamily: 'monsBold', fontSize: 20, color: '#62BD69'}}> Plants </Text>

                <FlatList style={styles.windowRoot} data={CATEGORIES_DATA} keyExtractor={item => item.title} numColumns={2} renderItem={(item) => {

                const { item: { title, type, id }} = item

                return (
                    <TouchableHighlight underlayColor="transparent" onPress={() => {
                        nav.navigate('plantcategory', { type: title, id: type })
                    }} style={{flex: 1}}>
                        <ImageBackground source={pickedImg(id)} style={styles.windowCat}>
                            <View style={styles.windowOpts}>
                                <Text style={{fontFamily: 'monsReg', color: '#62BD69', marginLeft: 8}} > {title} </Text>
                            </View>
                        </ImageBackground>
                    </TouchableHighlight>
                )
                }} />

            </View>

        </View>
    )

}

export default CategoriesScreen

const styles = StyleSheet.create({
    rootBox: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    windowRoot: {
        // backgroundColor: 'pink',
        flex: 1,
        marginTop: 20
    },
    windowCat: {
        backgroundColor: 'white',
        // width: '50%',
        flex: 1,
        height: 200,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        margin: 5,
        borderRadius: 15,
        overflow: "hidden",
        elevation: 1
    },
    windowOpts: {
        flexDirection: 'row',
        // backgroundColor: '#62BD69',
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    applyBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#62BD69',
        height: 30,
        width: 100,
        borderRadius: 3
    },
    options: {
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        marginHorizontal: 10,
        marginVertical: 3
    }
})