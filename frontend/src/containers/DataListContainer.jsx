import React from 'react'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

import { fetchData } from '../actions'
import DataList from '../components/DataList'


class DataListContainer extends React.Component {

  componentWillMount() {
    this.props.fetchData()
  }

  render() {
    return(
      <div>
        <DataList {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: fetchData(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataListContainer)
