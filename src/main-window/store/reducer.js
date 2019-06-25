import { fromJS } from 'immutable';
import { SET_SELECTED_FEATURE_INDEX, SET_WINDOW_STATE } from './constants';

const defaultState = fromJS({
  selectedFeatureIndex: 0,
  windowState: 'normal'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECTED_FEATURE_INDEX:
      return state.set('selectedFeatureIndex', action.value);
    case SET_WINDOW_STATE:
      return state.set('windowState', action.value);
    default:
      return state;
  }
};
