
import 'babel-polyfill'

import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './assets/styles/main.sass'

const favicon = require('./assets/favicon.png');
let link = document.createElement('link');
link.type = 'image/png';
link.rel = 'shortcut icon';
link.href = favicon;
document.head.appendChild(link);

let title = document.createElement('title');
document.head.appendChild(document.createTextNode('Frontend - Fullstack'));

ReactDom.render ((
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('react-app'))
