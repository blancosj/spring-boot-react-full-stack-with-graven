import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';

import styles from './assets/css/main.css'


// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
   <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router>
         <div>
            <Base />
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/login" component={LoginPage} />
               <Route path="/signup" componene={SignUpPage} />
               <Redirect to="/404" />
            </Switch>
         </div>
      </Router>
   </MuiThemeProvider>), document.getElementById('react-app'));
