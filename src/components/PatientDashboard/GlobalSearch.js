import React from 'react'

const Search = () => {
  return (
    <div className='container-fluid bg-light p-3 d-flex flex-column align-items-center justify-content-center shadow-lg p-3 mb-5 rounded bg-dark' >
      <div className='cd-flex align-items-center justify-content-center flex-column gap-4 w-75'>
        <form className="d-flex">
          <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Search