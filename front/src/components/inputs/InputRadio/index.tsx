import { ForwardedRef, InputHTMLAttributes, forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";
import { IInputProps } from "../interfaces";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { StyledRadioInput, StyledTextInput } from "../../../styles/input";
export const InputRadio = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {label ? <label htmlFor={rest.name}>{label}</label> : null}
        <StyledRadioInput ref={ref} type="radio" {...rest} />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);
