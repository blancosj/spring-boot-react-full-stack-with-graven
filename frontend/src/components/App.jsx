import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers from '../reducers'
import DataListContainer from '../containers/DataListContainer'


const loggerMiddleware = createLogger()
const store = createStore(
  reducers,
  {},
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DataListContainer {...this.props}/>
      </Provider>
    )
  }
}

export default App;
