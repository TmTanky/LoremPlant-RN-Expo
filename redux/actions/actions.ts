import { AnyAction } from "redux"
import { firebase } from "../../firebase/config"
import { ThunkDispatch } from "redux-thunk"
import { Iplant, Istate, Iuser } from "../../ts/types"

// Classes
import { Plant } from "../../classes/plantItem"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const LOAD_PLANTS = 'LOAD_PLANTS'

export const loginUser = (data: Iuser) => {

    return {
        type: LOGIN_SUCCESS,
        payload: data
    }

}

export const loadPlants = () => {

    return async (dispatch: ThunkDispatch<Istate, null, AnyAction>) => {
        
        const db = firebase.firestore()
        const getData = async () => {

            const snapshot = await db.collection('plants').get()
            
            const allPlants = [] as Iplant[]

            snapshot.forEach((doc) => {
                const { name, description, goodFor, imgUrl} = doc.data() as Iplant
                // allPlants.push(doc.data() as Iplant)
                const plant = new Plant(doc.id, name, goodFor, description, imgUrl)
                allPlants.push(plant)
            })

            dispatch({
                type: LOAD_PLANTS,
                payload: allPlants
            })

        }

        getData()
        
    }
    
}