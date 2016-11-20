import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import hashHistory from 'react-router/lib/hashHistory';
import Root from './Root';
import Home from '../routes/home';
import Detail from '../routes/detail';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Root }>
      <IndexRoute component={ Home } />
      <Route path="detail" component={ Detail } />
    </Route>
  </Router>,
  document.getElementById('app')
);
