import React from "react";
import Input from "../Input/Input";
import RadioButton from "../RadioButton/RadioButton";
export default function FormikControl(props) {
  console.log(props.value);
  //   const { control, ...rest } = props;
  //   switch (control) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    default:
      return null;
  }
}
