import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './access/css/main.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

store.subscribe(() => console.log(store.getState()))
