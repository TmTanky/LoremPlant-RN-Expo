import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

// Firebase
import { firebase } from "../../firebase/config"

// Types
import { Iplant, Istate } from "../../ts/types"

// Classes
import { Plant } from "../../classes/plantItem"

// Actions
import { LOAD_PLANTS } from "./actions"

export const loadPlants = () => {

    return async (dispatch: ThunkDispatch<Istate, null, AnyAction>) => {
        
        const db = firebase.firestore()
        const getData = async () => {

            const snapshot = await db.collection('plants').get()
            
            const allPlants = [] as Iplant[]

            snapshot.forEach((doc) => {
                const { name, description, imgUrl, light, propagate, type, watering} = doc.data() as Iplant
                // allPlants.push(doc.data() as Iplant)
                const plant = new Plant(doc.id, name, description, imgUrl, watering, light, propagate, type)
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