import React from 'react'
import { useState } from 'react'

export default function User_Form() {

  const [formData, setFormData] = useState({})
  const [records, setRecords] = useState([])
  const [isEditing, setIsEditing] = useState('')
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("User Form Data : ",formData);

    if(formData.id)
    {
      updateRecord(formData)
      setIsEditing(false)
    }
    else
    {
      createRecord(formData)
    }

    setFormData({})
  }

  const createRecord = (data) => {
    const id = Date.now().toString()
    const newRecord = {...data, id}
    setRecords([...records,newRecord])
  }

  const updateRecord = (data) => {
    const up_data = records.map((value) => (
      value.id === data.id ? {...value,...data} :value
    ))

    setRecords(up_data)
  }

  const handleEdit = (record) => {
    setFormData(record)
    setIsEditing(true)
  }

  const deleteRecord = (id) => {
    const up_data = records.filter((value) => value.id !== id)

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
            <h4 className="text-center">User Form</h4>
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
                  required  />
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
                  required  />
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

        <table className='table table-hover table-bordered mt-4 text-center'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody>
            {records.map((value) => (
              <tr key={value.id}>
                <td>{value.uid}</td>
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
