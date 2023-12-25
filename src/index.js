// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

store.subscribe(() => {
  // You can use this callback to perform actions on every store update
  // For example, you can save the user state to localStorage here
  const state = store.getState();
  localStorage.setItem('userState', JSON.stringify(state));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
