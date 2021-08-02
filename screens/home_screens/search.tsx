import React, { useState } from "react";
import { FC } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";

// Types
import { Istate } from "../../ts/types";

{/* <Image height={100} width={100} source={require('../../assets/plant-vector.svg')} /> */}

const FavScreen: FC = (props: any) => {

    // console.log(props)
    const [userInput, setUserInput] = useState("")
    const allPlants = useSelector((state: Istate) => state.plants)

    const SubmitSearch = () => {

        return (
            <View style={styles.searchResults}>
                { !userInput ? <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/plant-png.png')} />
                    <Text style={{textAlign: 'center', fontFamily: 'monsBold', color: '#62BD69'}} > Search a plant </Text>
                </View> : allPlants.map(item => {
                    return (
                        item.name.includes(userInput) ? <TouchableOpacity style={styles.itemResults} key={item.id}>
                            <Text style={{fontFamily: 'monsReg', color: 'black'}}> {item.name} </Text>
                        </TouchableOpacity> : null
                    )
                }) }
            </View>
        )
        
    }

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="height">
            <View style={styles.root}>
                <View style={styles.searchInputBox}>
                    <View style={{width: '90%'}}>
                        <TextInput style={{fontFamily: 'monsMed'}} value={userInput} onChangeText={setUserInput} placeholder="Search Plant" />
                    </View>
                    <View style={{width: '10%', alignItems: 'center'}} >
                        <TouchableOpacity>
                            <Ionicons name="ios-search-sharp" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.searchResultsRoot} >
                    <SubmitSearch/>
                </View>
            </View>
        </KeyboardAvoidingView>
    )

}


export default FavScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // backgroundColor: 'red'
        justifyContent: 'center',
        // alignItems: 'center'
    },
    searchInputBox: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        margin: 25,
        // backgroundColor: 'yellow',
        height: 40,
        paddingHorizontal: 5,
        alignItems: 'center',
    },
    searchResultsRoot: {
        flex: 12,
        // backgroundColor: 'teal',
        margin: 25,
        // width: '100%'
    },
    searchResults: {
        // backgroundColor: 'yellow',
        flex: 1,
        marginVertical: 10,
        // marginHorizontal: 20
    },
    imgContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: '70%',
        width: '100%'
    },
    itemResults: {
        // backgroundColor: '#62BD69',
        height: 40,
        justifyContent: 'center',
        marginVertical: 3,
        padding: 5,
        borderRadius: 5,
        borderBottomColor: '#62BD69',
        borderBottomWidth: 0.3
    }
})