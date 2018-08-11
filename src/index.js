import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-grid.css';
import registerServiceWorker from './registerServiceWorker';
import * as entry from './entries'; // Paginas principales
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Componente rutas

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
