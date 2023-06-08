import {combineReducers} from 'redux'
import  GlobalStatesSlice  from './slices/globalStatesSlice';


export default combineReducers({
    globalStatesSlice: GlobalStatesSlice,
});