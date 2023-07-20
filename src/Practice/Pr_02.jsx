import React, { useState } from 'react'

export default function Pr_02() {

  // ============= ** crud operation ** =============

  const [formData, setFormData] = useState({ name: "" });
  const [records, setRecords] = useState([])
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Practice Data :", formData);

    localStorage.setItem("Crud Data", JSON.stringify(records));

    if (formData.id) {
      updateRecord(formData)
      setIsEditing(false)
    }
    else {
      createRecord(formData)
    }
    setFormData({ name: "" })
  }

  const createRecord = (data) => {
    const id = Date.now().toString();
    const newRecord = { ...data, id }
    setRecords([...records, newRecord])
  }

  const updateRecord = (data) => {
    const up_data = records.map((value) => (
      value.id === data.id ? { ...value, ...data } : value
    ))

    setRecords(up_data)
  }

  const handleEdit = (value) => {
    setFormData(value)
    setIsEditing(true)
  }

  const deleteRecord = (id) => {
    const up_data = records.filter((value) => value.id !== id)

    setRecords(up_data)
  }

  const handleDelete = (id) => {
    deleteRecord(id)
  }


  // ========== ** pagination ** ============

  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(10)
  const [totalItems] = useState(100)

  const totalPages = Math.ceil(totalItems / itemPerPage)
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const displayedItem = records.slice(startIndex, endIndex)

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleItemPerPageChange = (event) => {
    const abc = parseInt(event.target.value, 10);
    setItemPerPage(abc);
    setCurrentPage((prevPage) => Math.min(prevPage, Math.ceil(totalItems / abc)));
  };

  const renderPaginationChange = () => {
    return (
      <select value={itemPerPage} onChange={handleItemPerPageChange}>
        <option value={1}>1 Item Per Page</option>
        <option value={2}>2 Item Per Page</option>
        <option value={5}>5 Item Per Page</option>
        <option value={10}>10 Item Per Page</option>
        <option value={20}>20 Item Per Page</option>
      </select>
    )
  }



  return (
    <>
      <div className="container">
        <div className="mx-auto mt-4 border p-3" style={{ width: "600px" }}>
          <form onSubmit={handleSubmit}>
            <h4 className="text-center">Form Practice</h4>
            <hr />
            {/* <div className="form-outline mb-2">
              <div className="row">
                <div className="col-3">
                  <label className="fw-bolder">User Id : </label>
                </div>
                <div className="col-9">
                  <input type="text" className="form-control" name="uid" 
                  value={formData.uid || ""}
                  onChange={handleChange}
                  />
                </div>
              </div>
            </div> */}
            <div className="form-outline mb-2">
              <div className="row">
                <div className="col-3">
                  <label className="fw-bolder">User name : </label>
                </div>
                <div className="col-9">
                  <input type="text " className="form-control" name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="m-auto text-center">
              <button
                type="submit"
                className="btn btn-primary btn-block  px-3"
              >
                {isEditing ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>

        <div className='d-flex mt-5'>
          <div>
            <button type='button' onClick={handlePreviousPage} disabled={currentPage === 1}>Prev.</button>
          </div>
          <div>
            {renderPaginationChange()}
          </div>
          <div>
            <button type='button' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>

        <table className='table table-bordered table-hover mt-5 text-center'>
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>Name</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody>
            {displayedItem.map((value) => (
              <tr key={value.id}>
                {/* <td>{value.uid}</td> */}
                <td>{value.name}</td>
                <td>
                  <button type='button' onClick={() => handleEdit(value)}>Edit</button>
                  <button type='button' onClick={() => handleDelete(value.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
