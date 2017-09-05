import React from 'react'

import DataListItem from './DataListItem'

class DataList extends React.Component {
  render() {

    const { data } = this.props

    return(
      <div className='list'>
        {data.isFetching && <h1>Loading...</h1>}
        {!data.isFetching &&
          data.items.map(item =>
            <DataListItem key={'id_' + item.id} data={item}/>
          )
        }
      </div>
    )
  }
}

export default DataList
