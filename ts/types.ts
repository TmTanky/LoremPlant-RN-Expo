export interface Iuser {
    displayName: string | null | undefined
    email: string
    phoneNumber: string | null | undefined
    photoURL: string | null | undefined
    providerId: string
    uid: string
}

export type mode = 'light' | 'dark'

export interface Istate {
    auth: Iuser
    theme: mode
    plants: Iplant[]
}

export interface Iplant {
    id: string
    name: string
    goodFor: string
    description: string
    imgUrl: string
}
