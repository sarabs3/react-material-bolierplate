import { combineReducers } from 'redux';
import SimpleReducer from './authReducer';
import ProfileReducer from './profileReducer';

export default combineReducers({ SimpleReducer });
