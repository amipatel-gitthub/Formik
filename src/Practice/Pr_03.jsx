import React, { useState } from "react";

export default function Pr_03() {
  //   ========= ** crud operation ** ==========

  const [formData, setFormData] = useState({ name: "" });
  const [records, setRecords] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user data : ", formData);

    localStorage.setItem("user_data", JSON.stringify(records));

    if (isEditing) {
      updateRecord(formData);
      setIsEditing(false);
    } else {
      createRecord(formData);
    }
    setFormData({ name: "" });
  };

  const createRecord = (data) => {
    const id = Date.now().toString();
    const newRecord = { ...data, id };
    setRecords([...records, newRecord]);
  };

  const updateRecord = (data) => {
    const up_data = records.map((record) =>
      record.id === data.id ? { ...record, ...data } : record
    );

    setRecords(up_data);
  };

  const handleEdit = (record) => {
    setFormData(record);
    setIsEditing(true);
  };

  const deleteRecord = (id) => {
    const up_data = records.filter((value) => value.id !== id);

    setRecords(up_data);
  };

  const handleDelete = (id) => {
    deleteRecord(id);
  };

  // ========== ** pagination ** ===============

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const [totalItems] = useState(100);
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const displayedItem = records.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemPerPageChange = (event) => {
    const abc = parseInt(event.target.value, 10);
    setItemPerPage(abc);
    setCurrentPage(1);
  };

  const renderPagination = () => {
    return (
      <select value={itemPerPage} onChange={handleItemPerPageChange}>
        <option value={1}>1 item</option>
        <option value={2}>2 items</option>
        <option value={5}>5 items</option>
        <option value={10}>10 items</option>
        <option value={20}>20 items</option>
      </select>
    );
  };

  return (
    <>
      <div className="container">
        <div className="mx-auto mt-5 border p-3" style={{ width: "600px" }}>
          <form onSubmit={handleSubmit}>
            <h5 className="text-center">User Data</h5>
            <hr />
            <div className="row">
              <div className="col-9">
                <div className="form-outline mb-2">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="name"
                    placeholder="enter your name"
                    value={formData.name || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <button
                  type="submit"
                  className="btn btn-secondary btn-block rounded-4 px-4"
                >
                  {isEditing ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="d-flex mt-5 grid gap-2">
          <div>
            <button
              type="button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Prev.
            </button>
          </div>
          <div>
            <span className="fw-semibold">Pagination</span> :{" "}
            {renderPagination()}
          </div>
          <div>
            <button
              type="button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        <div className="mx-auto mt-5" style={{ width: "700px" }}>
          <table className="table table-hover text-center table-bordered mt-5">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {displayedItem.map((value) => (
                <tr key={value.id}>
                  <td>{value.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => handleEdit(value)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleDelete(value.id)}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
