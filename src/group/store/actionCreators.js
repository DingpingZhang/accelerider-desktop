import { SET_CONTACT_LIST_SCROLL_TOP, SET_MESSAGE_LIST_SCROLL_TOP, SET_SELECTED_CONTACT_INDEX } from './constants';

export const setContactListScrollTopAction = value => ({
  type: SET_CONTACT_LIST_SCROLL_TOP,
  value
});

export const setMessageListScrollTopAction = value => ({
  type: SET_MESSAGE_LIST_SCROLL_TOP,
  value
});

export const setSelectedContactIndexAction = value => ({
  type: SET_SELECTED_CONTACT_INDEX,
  value
});
