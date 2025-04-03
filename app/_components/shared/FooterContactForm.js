"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

const FooterContactForm = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const [formErrors, seterrors] = useState({});

  const handleSubmit = async (values) => {
    setSubmitting(true);
    let APIURL = process.env.NEXT_PUBLIC_API_FORM_URL;

    const formData = new FormData();
    formData.append("text-fname", values.name);
    formData.append("text-lname", "");
    formData.append("tel-phone", values.phone);
    formData.append("email-address", values.email);
    formData.append("textarea-message", values.message);
    formData.append("_wpcf7_unit_tag", "00b8018");

    try {
      const response = await axios.post(
        `${APIURL}/contact-forms/111/feedback`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSubmitting(false);
      setsubmitted(true);
      // console.log(response, "response from form");
    } catch (error) {
      setSubmitting(false);

      seterrors(error.response.data.errors);
    }
  };

  return (
    <>
      {submitted && <p>Thank you for Contacting us!</p>}
      {!submitted && (
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: "",
            email: "",
            subject: "",
            phone: "",
            message: "",
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required("Name is required"),
            // email: yup.string().email().required("Email is Required"),
            email: yup
              .string()
              .email("Invalid email")
              .required("Email is required"),
            //subject: yup.string().required("Subject is Required"),
            phone: yup
              .string()
              .matches(phoneRegExp, "Phone number is not valid")
              .required("Number is Required")
              .min(10, "Too short")
              .max(10, "Too long"),
            message: yup.string().required("Message is Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm({ values: "" });
          }}
        >
          {({ errors, isValid, touched, setFieldValue }) => (
            <Form>
              {submitting && (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              {!submitting && (
                <>
                  <div className="row">
                    <div className="col">
                      <Field
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                      />
                      {touched.name && errors.name && (
                        <div className="form-error">{errors.name}</div>
                      )}
                    </div>
                    <div className="col">
                      <Field
                        type="text"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email address"
                      />
                      {touched.email && errors.email && (
                        <div className="form-error">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Field
                        type="text"
                        name="subject"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      {touched.subject && errors.subject && (
                        <div className="form-error">{errors.subject}</div>
                      )}
                    </div>
                    <div className="col">
                      <Field
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone Number"
                      />
                      {touched.phone && errors.phone && (
                        <div className="form-error">{errors.phone}</div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Field
                        as="textarea"
                        name="message"
                        className="form-control"
                        rows="3"
                        id="message"
                        placeholder="Message"
                      />
                      {touched.message && errors.message && (
                        <div className="form-error">{errors.message}</div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button
                        disabled={!isValid}
                        type="submit"
                        className="btn btn-primary"
                      >
                        {" "}
                        Send{" "}
                        <span className="btn-icon">
                          {" "}
                          <i className="fas fa-paper-plane"></i>{" "}
                        </span>{" "}
                      </button>
                    </div>
                  </div>
                  {Object.keys(formErrors).length > 0 && (
                    <ul className="allErrs">
                      {Object.keys(formErrors).map((key, index) => (
                        <li key={index}>
                          <strong>{key}:</strong> {formErrors[key]}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default FooterContactForm;
