import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const exhancer = composeEnhancers(applyMiddleware(ReduxThunk));

export default createStore(reducer, exhancer);
