import React, { useState } from "react";
import { json } from "react-router-dom";

export default function Todo_List() {
    const [formData, setFormData] = useState({});
    const [records, setRecords] = useState([]);
    const [isEditing , setIsEditing] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Todo List : ", formData);

        localStorage.setItem("Todo List : ",JSON.stringify(formData))

        if(formData.id)
        {
            updateRecord(formData)
            setIsEditing(false)
        }
        else
        {
            createRecord(formData);
        }
        setFormData({});
    };

    const createRecord = (data) => {
        const id = Date.now().toString();
        const newRecord = { ...data, id };
        setRecords([...records, newRecord]);
    };

    const updateRecord = (data) => {
        const up_data = records.map((record) => (
            record.id === data.id ? {...record, ...data} : record
        ))

        setRecords(up_data)
    }

    const handleEdit = (record) => {
        setFormData(record)
        setIsEditing(true)
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
            <div className="container-fluid d-flex justify-content-center align-items-center bg-crl" style={{ height: "94vh", overflow: "hidden", backgroundColor: "whitesmoke" }}>
                <div className="px-5 rounded-1 justify-content-center " style={{ height: "60vh", width: "80vh", overflow: "hidden", backgroundColor: "white" }}>

                    <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-9">
                                <div className="form-outline mb-2">
                                    <input
                                        type="text"
                                        className="form-control rounded-pill"
                                        name="name"
                                        placeholder="Add task"
                                        value={formData.name || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="m-auto text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-secondary btn-block rounded-4 px-4"
                                    > 
                                       {isEditing ? 'update' : 'Add'} 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div
                        className="position-relative overflow-auto border mt-4 d-block"
                        style={{ overflow: "auto", height: "380px" }}
                    >
                        <table className="table  table-hover">
                            <tbody>
                                {records.map((value) => (
                                    <tr key={value.id}>
                                        <td colSpan="2" className="ps-3">{value.name} </td>
                                        <td>
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end pe-3">
                                                <button type="button" onClick={() => handleEdit(value)}>
                                                    <i
                                                        className="bi bi-pencil-square"
                                                        style={{ lineHeight: "normal" }}
                                                    ></i>
                                                </button>
                                                <button type="button" onClick={() => handleDelete(value.id)}>
                                                    <i
                                                        className="bi bi-trash3-fill"
                                                        style={{ lineHeight: "normal" }}
                                                    ></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

// <div className="container-fluid d-flex justify-content-center align-items-center bg-crl" style={{ height: "100vh", overflow: "hidden", backgroundColor: "whitesmoke" }}>
// <div className="px-5 rounded-1 justify-content-center " style={{ height: "60vh", width: "80vh", overflow: "hidden", backgroundColor: "white" }}>
