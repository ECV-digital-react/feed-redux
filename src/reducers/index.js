import { combineReducers } from 'redux';
import postState from './postReducer';

const state = combineReducers({ postState });

export default state;
