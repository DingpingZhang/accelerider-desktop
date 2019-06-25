import { SET_WINDOW_STATE, SET_SELECTED_FEATURE_INDEX } from './constants';

export const setSelectedFeatureIndexAction = index => ({
  type: SET_SELECTED_FEATURE_INDEX,
  value: index
});

export const setWindowStateAction = state => ({
  type: SET_WINDOW_STATE,
  value: state
});
