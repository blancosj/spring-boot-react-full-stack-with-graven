import React from 'react';
import ReactDom from 'react-dom';
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


const routes = () => (
   <div>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" componene={SignUpPage} />
      <Route path="/*" render={() => <h1>Page not found</h1>} />
   </div>
)

export default routes;
