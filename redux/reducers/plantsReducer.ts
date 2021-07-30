import { AnyAction } from "redux";
import { Iplant } from "../../ts/types";
import { LOAD_PLANTS } from "../actions/actions";

export const plantsReducer = (state: Iplant[] = [], action: AnyAction) => {

    switch(action.type) {

        case LOAD_PLANTS:
            return state = action.payload
        default:
            return state

    }

}