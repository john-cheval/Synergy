"use client";
import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa6";
import ReCaptcha from "@/app/utils/reCaptcha";

const FooterContactForm = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const [submitting, setSubmitting] = useState(false);
  const [formErrors, seterrors] = useState({});
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  // useEffect(() => {
  //   if (token.length) {
  //     setSubmitting(true);
  //   }
  // }, [token]);
  const handleSubmit = async (values, resetForm) => {
    if (!token) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    setSubmitting(true);
    seterrors({});
    let APIURL = process.env.NEXT_PUBLIC_API_FORM_URL;

    const formData = new FormData();
    formData.append("text-fname", values.name);
    formData.append("text-subject", values.subject);
    formData.append("tel-phone", values.phone);
    formData.append("email-address", values.email);
    formData.append("textarea-message", values.message);
    formData.append("_wpcf7_unit_tag", "00b8018");

    try {
      setSubmitting(true);
      // seterrors({});
      const response = await axios.post(
        `${APIURL}/contact-forms/111/feedback`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSubmitting(false);
      setSuccessMessageVisible(true);
      resetForm();

      // if (!token) {
      //   // toast.error("Please verify the reCAPTCHA", {
      //   //   autoClose: 1500,
      //   // });

      //   console.log("Please verify the reCAPTCHA");
      //   return;
      // }

      setTimeout(() => {
        setSuccessMessageVisible(false);
      }, 2000);
      setToken("");
      if (recaptchaRef.current) {
        recaptchaRef.current.resetCaptcha();
      }
    } catch (error) {
      setSubmitting(false);

      seterrors(error.response.data.errors);
    }
  };

  const handleToken = (token) => {
    setToken(token);
  };

  return (
    <>
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
          email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
          phone: yup
            .string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("Number is Required")
            .min(10, "Too short")
            .max(15, "Too long"),
          message: yup.string().required("Message is Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
          resetForm({ values: "" });
        }}
      >
        {({ errors, isValid, touched, setFieldValue }) => (
          <Form>
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
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
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
                  {/* <Field
                    type="number"
                    name="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                    pattern="[0-9+]*"
                    onInput={(e) => {
                      if (e.target.value.length > 15) {
                        e.target.value = e.target.value.slice(0, 15);
                      }
                    }}
                    onKeyDown={(e) => {
                      const allowedKeys = [
                        "Backspace",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                        "Delete",
                      ];
                      const isNumber = /^[0-9+]$/.test(e.key);

                      if (!isNumber && !allowedKeys.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}


                  /> */}

                  <Field
                    type="text"
                    name="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                    onInput={(e) => {
                      if (e.target.value.length > 15) {
                        e.target.value = e.target.value.slice(0, 15);
                      }
                    }}
                    onKeyDown={(e) => {
                      const allowedKeys = [
                        "Backspace",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                        "Delete",
                      ];

                      const isNumber = /^[0-9]$/.test(e.key);
                      const isPlus = e.key === "+";
                      const inputValue = e.currentTarget.value;
                      const cursorPosition = e.currentTarget.selectionStart;

                      if (
                        (isPlus &&
                          (cursorPosition !== 0 || inputValue.includes("+"))) ||
                        (!isNumber && !isPlus && !allowedKeys.includes(e.key))
                      ) {
                        e.preventDefault();
                      }
                    }}
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
                  <ReCaptcha
                    siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    callback={handleToken}
                    ref={recaptchaRef}
                  />

                  {captchaError && (
                    <div className="form-error mt-2">
                      Please verify your reCAPTCHA.
                    </div>
                  )}
                  <button
                    // disabled={submitting || !isValid}
                    disabled={submitting || !isValid || !token}
                    type="submit"
                    className="btn btn-primary mt-3"
                  >
                    {submitting ? (
                      <>
                        Submitting...{" "}
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      </>
                    ) : (
                      <>
                        Send <FaPaperPlane />
                      </>
                    )}
                  </button>
                </div>
              </div>
              {Object?.keys(formErrors).length > 0 && (
                <ul className="allErrs">
                  {Object.keys(formErrors)?.map((key, index) => (
                    <li key={index}>
                      <strong>{key}:</strong> {formErrors[key]}
                    </li>
                  ))}
                </ul>
              )}
            </>
          </Form>
        )}
      </Formik>

      {successMessageVisible && (
        <div className="row mt-2">
          <div className="col">
            <div className="alert alert-success py-2" role="alert">
              Form Submitted successfully!
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterContactForm;
