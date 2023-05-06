import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import styles from "./Input.module.css";

export default function Input(props) {
  const { label, name, ...rest } = props;

  return (
    <div className="formControl">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field className={styles.input} id={name} name={name} {...rest} />
      <FontAwesomeIcon icon={faEye} onClick={props.handleVissiblity} style={{ display: props.type === "password" ? "inline-block" : "none", height: "16px", marginLeft: "-2em" }} />
      <FontAwesomeIcon icon={faEyeSlash} onClick={props.handleHideVissiblity} style={{ display: props.vissible? "inline-block" : "none", height: "16px", marginLeft: "-2em" }} />
      <br />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
