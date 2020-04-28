import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/home.css'
import '../src/styles/cat-Item.css'
import '../src/styles/reset.css';
import App from './components/app';

const store = createStore(rootReducer);

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)