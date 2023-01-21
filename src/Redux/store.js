import {legacy_createStore , applyMiddleware ,compose , combineReducers} from "redux"

import thunk from "redux-thunk"
import { adminReducer } from "./Admin/Admin.reducer"
import { mensProductReducer } from "./Product/Product.reducer"
import { wishlistReducer } from "./Wishlist/Wishlist.reducer"

const rootReducer = combineReducers({
    mens: mensProductReducer,
    adminManager:adminReducer,
    wishlist:wishlistReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer , composeEnhancer(applyMiddleware(thunk))) 

