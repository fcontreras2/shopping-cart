import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import * as entry from './entries'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './styles/icons' // Iconos

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={entry.Home} />
      <Route path="/product" component={entry.Product}/>
    </div>
  </Router>
  , 
  document.getElementById('root'));
registerServiceWorker();
