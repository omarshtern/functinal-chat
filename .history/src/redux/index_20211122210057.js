import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";



export const reducers = combineReducers({
    user: userSlice
})
