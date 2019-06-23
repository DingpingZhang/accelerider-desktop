import { fromJS } from 'immutable';
import {
  SET_SELECTED_FILE_TYPE_INDEX,
  SET_SELECTED_FILE_INDEX,
  SET_SELECTED_NET_DISK_INDEX,
  SET_IS_SWITCHER_EXPANDED
} from './constants';

const defaultState = fromJS({
  isSwitcherExpanded: false,
  fileListScrollTop: 0,
  selectedFileTypeIndex: 0,
  selectedFileIndex: 0,
  selectedNetDiskIndex: 0,
  fileTypeList: [],
  fileList: [],
  netDiskList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECTED_FILE_TYPE_INDEX:
      return state.set('selectedFileTypeIndex', action.value);
    case SET_SELECTED_FILE_INDEX:
      return state.set('selectedFileIndex', action.value);
    case SET_SELECTED_NET_DISK_INDEX:
      return state.set('selectedNetDiskIndex', action.value);
    case SET_IS_SWITCHER_EXPANDED:
      return state.set('isSwitcherExpanded', action.value);
    default:
      return state;
  }
};
