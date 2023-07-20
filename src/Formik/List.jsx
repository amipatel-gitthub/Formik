import React from "react";
import {
  Formik,
  Form,
  ErrorMessage,
  Field,
  FieldArray,
  FastField,
} from "formik";
import * as yup from "yup";

export default function List() {
  const initialValues = {
    id: "",
    name: "",
    address: "",
    social: {
      faceBook: "",
      twitter: "",
    },
    phno: ["", ""],
    phNumbers: [""],
  };

  const onSubmit = (value) => {
    console.log("user Data : ", value);
  };

  // const validate = (value) => {
  //   let error = {};

  //   if (!value.id) {
  //     error.id = "Required";
  //   }

  //   if (!value.name) {
  //     error.name = "Required";
  //   }

  //   return error;
  // };

  const validateSchema = yup.object({
    id: yup.string().required("Required"),
    name: yup.string().required("Required"),
  
  });

  return (
    <>
      <div className="container">
        <div className="mx-auto mt-4 border p-3" style={{ width: "600px" }}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            // validate={validate}
            validationSchema={validateSchema}
            validateOnChange={false }
            validateOnBlur={false  }
          >
            <Form>
              <h4 className="text-center">Formik </h4>
              <hr />
              <div className="form-outline mb-2">
                <div className="row">
                  <div className="col-3">
                    <label className="fw-bolder">User Id : </label>
                  </div>
                  <div className="col-9">
                    <Field type="number" className="form-control" name="id" />
                    <ErrorMessage name="id">
                      {(errormsg) => (
                        <div className="text-danger">{errormsg}</div>
                      )}
                    </ErrorMessage>
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
                    <ErrorMessage name="name">
                      {(errormsg) => (
                        <div className="text-danger">{errormsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-2">
                <label htmlFor="address" className="fw-bolder">
                  Address
                </label>
                <FastField name="address">
                  {(props) => {
                    // console.log('field render');
                    const { field, form, meta } = props;
                    return (
                      <div>
                        <input type="text" id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </FastField>
              </div>

              <div className="form-control">
                <label htmlFor="faceBook">FaceBook Profile</label>
                <Field type="text" id="faceBook" name="social.faceBook" />
              </div>

              <div className="form-control">
                <label htmlFor="twitter">Twitter Profile</label>
                <Field type="text" id="twitter" name="social.twitter" />
              </div>

              <div className="form-control">
                <label htmlFor="tel">Telephone no : </label>
                <Field type="text" id="phno" name="phno[0]" />
              </div>

              <div className="form-control">
                <label htmlFor="mob">Mobile no : </label>
                <Field type="text" id="phno" name="phno[1]" />
              </div>

              <div className="form-control count">
                <label>List of phone number : </label>
                <FieldArray name="pnNumbers">
                  {(fieldArrayProps) => {
                    // console.log("fieldArrayPr ops===>**", fieldArrayProps);
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    console.log("form errors..", form.errors);
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                {" "}
                                -{" "}
                              </button>
                            )}
                            <button type="button" onClick={() => push("")}>
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
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
