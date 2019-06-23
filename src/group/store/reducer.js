import { fromJS } from 'immutable';
import { SET_CONTACT_LIST_SCROLL_TOP, SET_MESSAGE_LIST_SCROLL_TOP, SET_SELECTED_CONTACT_INDEX } from './constants';

const defaultState = fromJS({
  contactListScrollTop: 0,
  messageListScrollTop: 0,
  selectedContactIndex: 0,
  conatctList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CONTACT_LIST_SCROLL_TOP:
      return state.set('contactListScrollTop', action.value);
    case SET_MESSAGE_LIST_SCROLL_TOP:
      return state.set('messageListScrollTop', action.value);
    case SET_SELECTED_CONTACT_INDEX:
      return state.set('selectedContactIndex', action.value);
    default:
      return state;
  }
};
