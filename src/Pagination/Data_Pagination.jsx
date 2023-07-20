import React, { useState } from 'react'
import Data from './User.json'

export default function Data_Pagination() {

  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(10)
  const [totalItem] = useState(100)

  const totalPages = Math.ceil(totalItem / itemPerPage)
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const displayedItems = Data.slice(startIndex,endIndex)

  const handlePreviousPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1)
    }
  }

  const handleItemPerPageChange = (event) => {
    const abc = parseInt(event.target.value,10)
    setItemPerPage(abc)
    setCurrentPage(1)
  }

  const renderPaginationChange = () => {
    return(
      <select value={itemPerPage} onChange={handleItemPerPageChange}>
        <option value={1}>1 Item per page change</option>
        <option value={2}>2 Item per page change</option>
        <option value={5}>5 Item per page change</option>
        <option value={10}>10 Item per page change</option>
        <option value={25}>25 Item per page change</option>
      </select>
    )
  }

  return (
    <>
      <div className='container'>

        <div className='d-flex'>
          <div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>Prev.</button>
          </div>
          <div>
            Items change : {renderPaginationChange()}
          </div>
          <div>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>

        <table className='table table-bordered table-hover table-info mt-5 text-center'>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((value) => (
              <tr key={value.id}>
                <td>{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
