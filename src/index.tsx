import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './reducers/todosReducer/todosReducer'
import visibility from './reducers/visibilityReducer/visibilityReducer'

const rootReducer = combineReducers({
  todos,
  visibility
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer, composeWithDevTools())}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
