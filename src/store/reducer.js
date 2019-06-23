import { combineReducers } from 'redux';
import fileExplorerReducer from '../file-explorer/store';
import mainWindowReducer from '../main-window/store';

export default combineReducers({
  mainWindow: mainWindowReducer,
  fileExplorer: fileExplorerReducer
});
