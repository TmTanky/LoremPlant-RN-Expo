import { TOGGLE_CLOSE, TOGGLE_OPEN} from "./actions"

export const toggleOpen = () => {

    return {
        type: TOGGLE_OPEN
    }

}

export const toggleClose = () => {

    return {
        type: TOGGLE_CLOSE
    }

}