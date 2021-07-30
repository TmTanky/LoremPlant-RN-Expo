export class Plant {

    id: string
    name: string
    description: string
    goodFor: string
    imgUrl: string

    constructor(id: string, name: string, goodFor: string, description: string, imgUrl: string) {

        this.id = id
        this.name = name,
        this.goodFor = goodFor,
        this.description = description,
        this.imgUrl = imgUrl

    }

}