import { combineReducers } from 'redux'

import {
  REQUEST_DATA,
  RECEIVED_DATA
} from '../actions'


const initialState = {
  isFetching: false,
  items: []
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVED_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.query.results.Result
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data
})

export default rootReducer
