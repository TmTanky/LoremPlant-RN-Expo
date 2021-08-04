import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from 'react-native'

// Components
import LoginMode from '../../components/auth/login'
import RegisterMode from '../../components/auth/register'

// Types
type Mode = 'login' | 'register'

const AuthScreen = () => {

    const [mode, setMode] = useState<Mode>('login')

    return (
        <KeyboardAvoidingView behavior="height" style={{flex: 1}} >
            { mode === 'login' ? <LoginMode changeMode={setMode}/> : <RegisterMode changeMode={setMode}/> }
        </KeyboardAvoidingView>
    )

}

export default AuthScreen