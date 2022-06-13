import { legacy_createStore, combineReducers,applyMiddleware,compose  } from "redux";
import thunk from "redux-thunk";
import { counterReducer} from "./counterReducer";
import { todoReducer } from "./todoReducer";
const rootReducer=combineReducers(
    {
        counter:counterReducer,
        todo:todoReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));