import React, { useState } from "react";
import "./FormComponentFormComponent.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .email("Enter valid Address")
      .required("Email is Required"),
    password: Yup.string()
      .min(6, "password is must 6")
      .required("password is require"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "password is not match"
    ),
  });
  //   const [error, setError] = useState({});
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    alert("Form Submitted Successfully");
    console.log("Form Data:", values);
    resetForm();
  };
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <>
            <h1>Contact Us</h1>
            <Form>
              <h1>Contact Us</h1>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component="span" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="span" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <Field type="password" name="password" id="password" />
                <ErrorMessage name="password" component="span" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
                <ErrorMessage name="confirmPassword" component="span" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
