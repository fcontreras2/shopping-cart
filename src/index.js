import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './entries/App'; 
import { store } from './store/index';
import { Provider } from 'react-redux';
import './style.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './styles/icons' // Iconos

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
  , 
  document.getElementById('root'));
registerServiceWorker();
