import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "../interfaces";
import { StyledRadioInput } from "../../../styles/input";
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
