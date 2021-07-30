import { AnyAction } from "redux";
import { mode } from "../../ts/types";

export const modeReducer = (state: mode = 'light', action: AnyAction) => {

    switch(action.type) {

        case 'LIGHT':
            return state = 'light'
        case 'DARK':
            return state = 'dark'
        default:
            return state
    }

}