import {combineReducers} from 'redux';
import UploadReducer from './UploadReducer';

const RootReducer = combineReducers({
  filesData : UploadReducer
});

export default RootReducer;