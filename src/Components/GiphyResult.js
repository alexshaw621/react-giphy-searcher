import React from 'react'

const GiphyResult = ( { gifObj } ) => {
  return (
    <div className="ui card" >
      <img src={gifObj.images.fixed_height.url} alt="gif"/>
    </div>
  )
}

export default GiphyResult