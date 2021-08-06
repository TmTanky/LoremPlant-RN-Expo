import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabase('loremplant')

export const initialized = async () => {

    const setUp = new Promise((resolve) => {

        const statement = 'CREATE TABLE IF NOT EXISTS plantFav (id INT PRIMARY KEY NOT NULL, name TEXT NOT NULL, plantId TEXT NOT NULL);'

        db.transaction((tx) => {
            tx.executeSql(statement, [],
                (tx, obj) => {
                    resolve('Success')
                }
            )
        })

    }).catch(err => console.log(err))

    return setUp

}