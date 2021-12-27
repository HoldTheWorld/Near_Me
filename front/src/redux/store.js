import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/root.reducer'
import { initialState } from './state'
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
