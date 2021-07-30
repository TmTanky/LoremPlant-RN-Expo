import { combineReducers } from "redux";
import { Istate } from "../../ts/types";
import { modeReducer } from "./modeReducer";
import { plantsReducer } from "./plantsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers<Istate>({
    auth: userReducer,
    theme: modeReducer,
    plants: plantsReducer
})