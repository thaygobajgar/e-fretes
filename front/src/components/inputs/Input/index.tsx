import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { IInputProps } from "../interfaces";
import { StyledTextInput } from "../../../styles/input";

export const Input = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        {label ? <label htmlFor={rest.name}>{label}</label> : null}
        <StyledTextInput ref={ref} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);
