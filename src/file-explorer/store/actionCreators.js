import {
  SET_SELECTED_FILE_TYPE_INDEX,
  SET_SELECTED_FILE_INDEX,
  SET_SELECTED_NET_DISK_INDEX,
  SET_IS_SWITCHER_EXPANDED
} from './constants';

export const setSelectedFileTypeIndexAction = index => ({
  type: SET_SELECTED_FILE_TYPE_INDEX,
  value: index
});

export const setSelectedFileIndexAction = index => ({
  type: SET_SELECTED_FILE_INDEX,
  value: index
});

export const setSelectedNetDiskIndexAction = index => ({
  type: SET_SELECTED_NET_DISK_INDEX,
  value: index
});

export const setIsSwitcherExpandedAction = value => ({
  type: SET_IS_SWITCHER_EXPANDED,
  value
});
