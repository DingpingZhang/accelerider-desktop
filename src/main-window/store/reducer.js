import { fromJS } from 'immutable';
import { SET_SELECTED_FEATURE_INDEX } from './constants';

const defaultState = fromJS({
  selectedFeatureIndex: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECTED_FEATURE_INDEX:
      return state.set('selectedFeatureIndex', action.value);
    default:
      return state;
  }
};
