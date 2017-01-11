import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router'

import reducer from './reducers'
import ContactListContainer from './containers/contacts/ContactListContainer';
import ContactFormContainer from './containers/contacts/ContactFormContainer';

import 'bootstrap/dist/css/bootstrap.css';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ContactListContainer}/>
      <Route path="/contact" component={ContactFormContainer}>
        <Route path=":id" component={ContactFormContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
