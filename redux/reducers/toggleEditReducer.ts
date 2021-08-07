import { AnyAction } from "redux";
import { TOGGLE_CLOSE, TOGGLE_OPEN } from "../actions/actions";

export const toggleEditReducer = (state = false, action: AnyAction) => {

    switch (action.type) {

        case TOGGLE_OPEN:
            return state = true
        case TOGGLE_CLOSE:
            return state = false
        default:
            return state

    }

}