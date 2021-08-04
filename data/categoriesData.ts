import plant1 from '../assets/plant1.png' 

export const CATEGORIES_DATA = [
    {
        id: '1',
        title: "House Plants",
        type: "HOUSE PLANTS"
    },
    {
        id: '2',
        title: "Foliage Plants",
        type: "FOLIAGE HOUSE PLANTS"
    },
    {
        id: '3',
        title: "Hanging Plants",
        type: "HANGING PLANTS"
    },
    {
        id: '4',
        title: "Trailing Plants",
        type: "TRAILING PLANTS"
    }
] as Categories[]

interface Categories {
    id: string
    title: string
    type: string
}