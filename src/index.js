import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from "./reducers/users.reducer";
import userDetailReducer from "./reducers/userDetail.reducer";

const reducers = combineReducers({
    user : usersReducer,
    userDetail : userDetailReducer
});

const store = createStore(reducers,applyMiddleware(thunk,logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
