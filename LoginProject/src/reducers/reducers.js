import { combineReducers } from 'redux';
import appdata from './rankReducer';
import selectedReducer from './selectedReducer'
const rootReducer = combineReducers({
    appdata,
    selectedReducer
})

export default rootReducer