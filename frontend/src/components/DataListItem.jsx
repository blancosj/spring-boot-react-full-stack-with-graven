import React from 'react'


class DataListItem extends React.Component {
  render() {

    const { data } = this.props

    return(
      <dl>
        <dt>Title</dt>
        <dd>{data.Title}</dd>
        <dt>Address</dt>
        <dd>${data.Address}</dd>
      </dl>
    )
  }
}

export default DataListItem
