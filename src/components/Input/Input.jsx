import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
//  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-regular-svg-icons";
import styles from "./Input.module.css";

export default function Input(props) {
  const { label, name, ...rest } = props;

  return (
    <div className="formControl">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field className={styles.input} id={name} name={name} {...rest} />
      <br />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
