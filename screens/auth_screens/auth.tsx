import React from "react";
import { useState } from "react";

// Components
import LoginMode from '../../components/auth/login'
import RegisterMode from '../../components/auth/register'

// Types
type Mode = 'login' | 'register'

const AuthScreen = () => {

    const [mode, setMode] = useState<Mode>('login')

    return mode === 'login' ? <LoginMode changeMode={setMode}/> : <RegisterMode changeMode={setMode}/>

}

export default AuthScreen