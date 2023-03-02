import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import messages from './messages/messages';

const rootReducer = {
  reducer: {
    messages,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
