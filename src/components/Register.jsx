import React from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
const Register = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        role: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address.")
          .required("Email is required.")
          .min(5, "Must be at least 5 characters.")
          .max(55, "Must be at most 55 characters.")
          .trim(),
        firstName: Yup.string()
          .max(55, "Must be at most 55 characters.")
          .required("First name is required.")
          .min(2, "Must be at least 2 characters.")
          .trim(),
        lastName: Yup.string()
          .max(55, "Must be at most 55 characters.")
          .required("Last name is required.")
          .min(2, "Must be at least 2 characters.")
          .trim(),
        password: Yup.string()
          .max(25, "Must be at most 25 characters.")
          .required("Password is required.")
          //   .matches(
          //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/,
          //     "Password must be at least 8 character with  at least 1 capital letter, 1 small letter, 1 number and 1 special character."
          //   )
          .trim(),

        gender: Yup.string()
          .required("Please choose at least one gender.")
          .trim()
          .oneOf(
            ["male", "female", "preferNotToSay"],
            "Gender must be male,female or prefer not to say."
          ),

        role: Yup.string()
          .required("Please choose at least one role.")
          .trim()
          .oneOf(["buyer", "seller"]),

        dob: Yup.date("Must be valid date.").required(
          "Date of birth is required."
        ),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="form">
        <label>Email </label>
        <Field name="email" />
        <ErrorMessage name="email" />

        <label>First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label>Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label>Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <MySelect label="Choose gender" name="gender">
          <option value="">Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="preferNotToSay">Prefer not to say</option>
        </MySelect>

        <MySelect label="Choose role" name="role">
          <option value="">Select a role</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </MySelect>

        <label>DOB</label>
        <Field name="dob" />
        <ErrorMessage name="dob" />

        <Button variant="contained" type="submit">
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default Register;
