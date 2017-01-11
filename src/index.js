import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router'

import reducer from './reducers'
import ContactList from './containers/contacts/ContactList';
import ContactForm from './containers/contacts/ContactForm';

import 'bootstrap/dist/css/bootstrap.css';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ContactList}/>
      <Route path="/contact" component={ContactForm}>
        <Route path=":id" component={ContactForm}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
