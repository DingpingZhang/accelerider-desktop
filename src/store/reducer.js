import { combineReducers } from 'redux';
import mainWindowReducer from '../main-window/store';
import fileExplorerReducer from '../file-explorer/store';
import groupReducer from '../group/store';

export default combineReducers({
  mainWindow: mainWindowReducer,
  fileExplorer: fileExplorerReducer,
  group: groupReducer
});
