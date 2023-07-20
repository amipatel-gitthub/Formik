import React, { useState } from 'react'
import Data from './User.json'

export default function Data_Pagination() {

  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(10)
  const [totalItem , setTotalItem] = useState(100)

  const totalPages = Math.ceil(totalItem / itemPerPage)
  const startIndex = (currentPage - 1 ) * itemPerPage
  const endIndex = startIndex + itemPerPage

  const displayedItems = Data.slice(startIndex,endIndex)

  return (
    <>
        <div className='container'>
          <h3 className='text-center mt-3'>
            User Data Pagination
          </h3>
          <hr />

          <table className='table table-bordered table-info table-hover text-center mt-4'>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Id</th>
                <th>Title</th>
              </tr>
            </thead>

            <tbody>
              {Data.map((record) => (
                <tr key={record.id}>
                  <td>{record.userId}</td>
                  <td>{record.id}</td>
                  <td>{record.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
  )
}
