import { createStore, combineReducers } from 'redux';
import { LogInReducer } from './Reducer';
const rootReducer = combineReducers({
    login: LogInReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


