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

export const checkIfFav = (id: string) => {

    const sql = 'SELECT plantId FROM plantFav WHERE plantId = ?'

    return db.transaction(async tx => {
        
        try {

            const result = await new Promise((resolve, reject) => {

                return tx.executeSql(sql, [id],
    
                    (tx, res) => {
                        const convert = res.rows as unknown
                        const { _array: data } = convert as { _array: string }
                        
                        if (data.length === 1) {
                            return resolve(true)
                        }
    
                        return reject(false)
                    }
                
                )
    
            })

            return result
            
        } catch (err) {
            return err
        }

    })

}