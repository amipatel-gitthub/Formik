import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function Demo() {
    const initialValues = {
        id: "",
        name: "",
    };

    const onSubmit = (values) => {
        console.log("user Data ", values);
    };

    const validate = (values) => {
        let error = {};

        if (!values.id) {
            error.id = "Required";
        }

        if (!values.name) {
            error.name = "Required";
        }
        return error;
    };

    const validateSchema = yup.object({
        id: yup.string().required("Required !!!"),
        name: yup.string().required("Required !!"),
    });

    return (
        <>
            <div className="container">
                <div className="mx-auto mt-4 border p-3" style={{ width: "600px" }}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validate={validate}
                        validateSchema={validateSchema}
                    >
                        <Form>
                            <h4 className="text-center">Simple Crud operation</h4>
                            <hr />
                            <div className="form-outline mb-2">
                                <div className="row">
                                    <div className="col-3">
                                        <label className="fw-bolder">User Id : </label>
                                    </div>
                                    <div className="col-9">
                                        <Field type="number" className="form-control" name="id" />
                                        <ErrorMessage name="id" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-outline mb-2">
                                <div className="row">
                                    <div className="col-3">
                                        <label className="fw-bolder">User name : </label>
                                    </div>
                                    <div className="col-9">
                                        <Field type="text " className="form-control" name="name" />
                                        <ErrorMessage name="name" />
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
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
}
