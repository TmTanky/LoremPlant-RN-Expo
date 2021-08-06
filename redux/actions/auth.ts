// Types
import { Iuser } from "../../ts/types"

// Actions
import { LOGIN_SUCCESS } from "./actions"

export const loginUser = (data: Iuser) => {

    return {
        type: LOGIN_SUCCESS,
        payload: data
    }

}