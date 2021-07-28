import React, { useState, FC } from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// Types
interface Props {
    changeMode: Function
}

const LoginMode: FC<Props> = (props) => {

    const { changeMode } = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginSubmit = async () => {
        console.log(email, password)
    }

    return (
        <View style={styles.root}>
            <View style={styles.loginForm}>
                <View style={styles.loginTitle}>
                    <Text style={{fontFamily: 'monsBold', fontSize: 40, color: '#233'}} > Login </Text>
                </View>
                
                <View style={styles.textInputsContainer}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="email" size={24} color="#62BD69" />
                    </View>
                    <View style={styles.input}>
                        <TextInput autoCompleteType="email" textContentType="emailAddress" value={email} onChangeText={setEmail} inlineImageLeft="sadfasdf" style={styles.textInputs} placeholder="Email" />
                    </View>
                </View>

                <View style={styles.textInputsContainer}>
                    <View style={styles.icon}>
                        <MaterialIcons name="vpn-key" size={24} color="#62BD69" />
                    </View>
                    <View style={styles.input}>
                        <TextInput autoCompleteType="password" textContentType="password" value={password} onChangeText={setPassword} secureTextEntry={true} inlineImageLeft="sadfasdf" style={styles.textInputs} placeholder="Password" />
                    </View>
                </View>

                {/* <TextInput style={styles.textInputs} placeholder="Password" /> */}
                <TouchableOpacity onPress={loginSubmit} style={styles.btnContainer}>
                    <Text style={{fontFamily: 'monsBold', color: 'white', textTransform: 'uppercase'}} > Login </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.switchMode} onPress={() => changeMode('register')}> Register for an account. </Text>
        </View>
    )

}

export default LoginMode

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center'
    },
    loginForm: {
        // backgroundColor: 'yellow'
    },
    loginTitle: {
        // backgroundColor: 'blue',
        marginHorizontal: 10,
        marginBottom: 15
    },
    textInputsContainer: {
        // backgroundColor: 'red'
        flexDirection: 'row',
        width: '100%',
        marginHorizontal: 20
    },
    icon: {
        width: '10%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        // backgroundColor: 'yellow'
    },
    textInputs: {
        height: 40,
        marginVertical: 10,
        // backgroundColor: 'orange',
        borderBottomWidth: 1,
        borderColor: '#62BD69',
        paddingHorizontal: 10,
        // marginHorizontal: 20,
        width: '85%'
    },
    btnContainer: {
        backgroundColor: '#62BD69',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        height: 45,
        borderRadius: 8,
        marginTop: 5
    },
    switchMode: {
        marginTop: 10,
        marginHorizontal: 20,
    }
})