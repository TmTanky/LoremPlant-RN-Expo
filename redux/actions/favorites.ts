import { SQLStatementErrorCallback, SQLResultSetRowList } from "expo-sqlite"
import { Item } from "react-native-paper/lib/typescript/components/List/List"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

// Types
import { IFav, Istate } from "../../ts/types"
import { db } from "./../../db/config"
import { LOAD_FAVORITES } from "./actions"

export const addToFavorites = (plantName: string, plantId: string) => {
    
    return async (dispatch: ThunkDispatch<Istate, null, AnyAction>) => {

        const sql = 'INSERT INTO plantFav (id, name, plantId) VALUES (?, ?, ?);'

        db.transaction((tx) => {
            tx.executeSql(sql, [plantId, plantName, plantId],
                (_, res) => { }
            )
        })

        dispatch(loadFavorites())

    }

}

export const removeFavorites = (plantId: string) => {

    return async (dispatch: ThunkDispatch<Istate, null, AnyAction>) => {

        const sql = 'DELETE FROM plantFav WHERE id = (?);'

        db.transaction((tx) => {

            tx.executeSql(sql, [plantId],
                (_, res) => { }
            )

        })

        dispatch(loadFavorites())

    }

}

export const deleteFavorites = (plantIds: string[]) => {

    return async (dispatch: ThunkDispatch<Istate, null, AnyAction>) => {

        const sql = 'DELETE FROM plantFav WHERE id = (?);'

        db.transaction((tx) => {

            plantIds.map(item => {
                tx.executeSql(sql, [item],
                    (_, res) => {  }
                )
            })

        })

        dispatch(loadFavorites())

    }

}

export const loadFavorites = () => {

    return async (dispatch: ThunkDispatch<Istate, null, AnyAction>) => {

        const sql = 'SELECT * FROM plantfav'

        db.transaction((tx) => {
            tx.executeSql(sql, [], (tx, res) => {

                const convert = res.rows as unknown
                const { _array: data } = convert as { _array: IFav[] }
                
                dispatch({
                    type: LOAD_FAVORITES,
                    payload: data
                })

            })
        })

    }

}