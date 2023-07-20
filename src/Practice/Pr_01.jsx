import React, { useState } from 'react'

export default function Pr_01() {

  const [formData, setFormData] = useState({})
  const [records, setRecords] = useState([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Practice form data : ", formData);

    if (formData.id) {
      updateRecord(formData)
    }
    else {
      createRecord(formData)
    }
    setFormData({})
  }

  const createRecord = (data) => {
    const id = Date.now().toString()
    const newRecord = { ...data, id }
    setRecords([...records, newRecord])
  }

  const updateRecord = (data) => {
    const up_data = records.map((record) => (
      record.id === data.id ? { ...record, ...data } : record
    ))
    setRecords(up_data)
  }

  const handleEdit = (record) => {
    setFormData(record)
  }

  const deleteRecord = (id) => {
    const up_data = records.filter((record) => record.id !== id)

    setRecords(up_data)
  }

  const handleDelete = (id) => {
    deleteRecord(id)
  }

  return (
    <>
      <div className="container">
        <div className="mx-auto mt-4 border p-3" style={{ width: "600px" }}>
          <form onSubmit={handleSubmit}>
            <h4 className="text-center">Form Practice</h4>
            <hr />
            <div className="form-outline mb-2">
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
            </div>
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
                Print
              </button>
            </div>
          </form>
        </div>

        <table className='table table-hover text-center table-bordered mt-5'>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>change</th>
            </tr>
          </thead>

          <tbody>
            {records.map((value) => (
              <tr key={value.id}>
                <td>{value.uid}</td>
                <td>{value.name}</td>
                <td>
                  <button type='button' onClick={() => handleEdit(value)}>Add</button>
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
