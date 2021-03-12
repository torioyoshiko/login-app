import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {  createStore, applyMiddleware } from 'redux'
import rootReducer from "./reducers/index";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {todoPersistor} from './middleware/todoPersistor'

const store = createStore(rootReducer, applyMiddleware(todoPersistor), undefined);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);