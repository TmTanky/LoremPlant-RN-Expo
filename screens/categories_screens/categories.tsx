import React, { FC, useState } from "react";
import { View, Text, Switch, StyleSheet, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'

// Datas
import { CATEGORIES_DATA } from "../../data/categoriesData";

const CategoriesScreen: FC = () => {

    // console.log(Dimensions.get('screen').width)
    // Dimensions.get('screen').width

    const [isJin, setIsJin] = useState(false)
    const [isDVJ, setIsDVJ] = useState(false)
    const [isKazuya, setIsKazuya] = useState(false)
    const [isHeihachi, setIsHeihachi] = useState(false)

    return (
        <View style={styles.rootBox}>
            
            <View style={{flex: 2}}>
                <FlatList style={styles.windowRoot} data={CATEGORIES_DATA} keyExtractor={item => item.title} numColumns={2} renderItem={(item) => {

                const { item: { id, title }} = item

                return (
                    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'}} style={styles.windowCat}>
                        <View style={styles.windowOpts}>
                            <Text style={{fontFamily: 'monsReg', color: 'white', marginLeft: 8}} > {title} </Text>
                            <Switch/>
                        </View>
                    </ImageBackground>
                )
                }} />
            </View>

            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 30}}>
                <TouchableOpacity style={styles.applyBtn}>
                    <Text style={{fontFamily: 'monsReg', color: 'white'}}> Apply </Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

export default CategoriesScreen

const styles = StyleSheet.create({
    rootBox: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    windowRoot: {
        // backgroundColor: 'pink',
        flex: 1,
        marginTop: 20
    },
    windowCat: {
        // backgroundColor: 'yellow',
        // width: '50%',
        flex: 1,
        height: 200,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        margin: 5,
        borderRadius: 8,
        overflow: "hidden"
    },
    windowOpts: {
        flexDirection: 'row',
        backgroundColor: '#62BD69',
        width: '100%',
        height: '15%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    applyBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#62BD69',
        height: 30,
        width: 100,
        borderRadius: 10
    }
})