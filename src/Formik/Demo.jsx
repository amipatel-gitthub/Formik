import React from "react";
import { Formik, useFormik } from "formik";

export default function Demo() {

    const formik = useFormik({
        initialValues : {
            id : "",
            name : ""
        },

        onSubmit : values => {
            console.log("user Data : ",formik.values);
        }

    })

    // console.log("formik Values : ",formik.values);
    return (
        <>
        
            <div className="container">
                <div className="mx-auto mt-4 border p-3" style={{ width: "600px" }}>
                    <form onSubmit={formik.handleSubmit}>
                        <h4 className="text-center">Simple Crud operation</h4>
                        <hr />
                        <div className="form-outline mb-2">
                            <div className="row">
                                <div className="col-3">
                                    <label className="fw-bolder">User Id : </label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" name="id" 
                                    value={formik.values.id}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="m-auto text-center">
                            <button type="submit" className="btn btn-primary btn-block  px-3">
                                Sign up 
                            </button>
                        </div>
                    </form>
                </div>

                <table className="table  table-hover table-bordered mt-5 text-center mb-3">
                    <thead>
                        <tr>
                            <th className="text-secondary">User Id</th>
                            <th className="text-secondary">User name </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
