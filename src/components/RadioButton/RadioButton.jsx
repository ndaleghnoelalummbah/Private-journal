import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
import styles from "./RadioButton.module.css";

export default function RadioButton(props) {
    
  const { label, name, options, ...rest } = props;

  return (
    <div className={styles.formControl}>
      <div className={styles.heading}>
        <label className={styles.radio}>{label}</label>
        <span className={styles.ride}>Sign up to ride</span>
      </div>
      <Field name={name} {...rest}>
        {({ field }) => {
          console.log("Field", field);
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input type="radio" id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                <label htmlFor={option.id}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
