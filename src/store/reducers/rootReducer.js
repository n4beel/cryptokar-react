import { combineReducers } from "redux";
import authReducer from "./authReducer";
import carReducer from "./carReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    car: carReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer;