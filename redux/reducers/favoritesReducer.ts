import { AnyAction } from "redux";
import { IFav } from "../../ts/types";

// Actions
import { LOAD_FAVORITES } from "../actions/actions";

export const favoritesReducer = (state = [] as IFav[], action: AnyAction) => {

    switch (action.type) {
        case LOAD_FAVORITES:
            return state = action.payload
        default:
            return state
    }

}