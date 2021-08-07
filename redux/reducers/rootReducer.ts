import { combineReducers } from "redux";
import { Istate } from "../../ts/types";
import { favoritesReducer } from "./favoritesReducer";
import { modeReducer } from "./modeReducer";
import { plantsReducer } from "./plantsReducer";
import { toggleEditReducer } from "./toggleEditReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers<Istate>({
    auth: userReducer,
    theme: modeReducer,
    plants: plantsReducer,
    favs: favoritesReducer,
    editMode: toggleEditReducer
})