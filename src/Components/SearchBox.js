import React from 'react'

const SearchBox = ( { searchTerm, onSearchTermChange, getGifs } ) => {
  return (
    <div>
      <input 
        className="ui input search"
        type="text"
        placeholder="Search Gifs from Giphy"
        value={searchTerm}
        onChange={onSearchTermChange}
      />

      <button
        type="submit"
        value="Search"
        onClick={getGifs}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBox