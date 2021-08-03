import React, { FC, useState } from "react";
import { View, Text, Switch, StyleSheet, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'

// Datas
import { CATEGORIES_DATA } from "../../data/categoriesData";

const CategoriesScreen: FC = () => {

    // console.log(Dimensions.get('screen').width)
    // Dimensions.get('screen').width

    const [isIndoor, setIsIndoor] = useState(false)
    const [isOutdoor, setIsOutdoor] = useState(false)
    const [isDry, setIsDry] = useState(false)
    const [isRainy, setIsRainy] = useState(false)

    return (
        <View style={styles.rootBox}>
            
            <View style={{flex: 1, marginTop: 20}}>

                <View style={styles.options}> 
                    <Text style={{fontFamily: 'monsMed'}} > Indoor </Text>
                    <Switch thumbColor='#62BD69' value={isIndoor} onValueChange={setIsIndoor} />
                </View>

                <View style={styles.options}> 
                    <Text style={{fontFamily: 'monsMed'}} > Outdoor </Text>
                    <Switch thumbColor='#62BD69' value={isOutdoor} onValueChange={setIsOutdoor} />
                </View>

                <View style={styles.options}> 
                    <Text style={{fontFamily: 'monsMed'}} > Dry </Text>
                    <Switch thumbColor='#62BD69' value={isDry} onValueChange={setIsDry} />
                </View>

                <View style={styles.options}> 
                    <Text style={{fontFamily: 'monsMed'}} > Rainy </Text>
                    <Switch thumbColor='#62BD69' value={isRainy} onValueChange={setIsRainy} />
                </View>

                {/* <FlatList style={styles.windowRoot} data={CATEGORIES_DATA} keyExtractor={item => item.title} numColumns={2} renderItem={(item) => {

                const { item: { id, title }} = item

                return (
                    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'}} style={styles.windowCat}>
                        <View style={styles.windowOpts}>
                            <Text style={{fontFamily: 'monsReg', color: 'white', marginLeft: 8}} > {title} </Text>
                            <Switch/>
                        </View>
                    </ImageBackground>
                )
                }} /> */}
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