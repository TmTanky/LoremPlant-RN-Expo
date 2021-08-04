export class Plant {

    id: string
    name: string
    description: string
    watering: string
    light: string
    imgUrl: string
    propagate: string
    type: string

    constructor(id: string, name: string, description: string, imgUrl: string, watering: string, light: string, propagate: string, type: string) {

        this.id = id
        this.name = name,
        this.description = description,
        this.imgUrl = imgUrl
        this.watering = watering
        this.light = light
        this.propagate = propagate
        this.type = type

    }

}