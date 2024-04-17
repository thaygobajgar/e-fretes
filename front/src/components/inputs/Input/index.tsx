import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "../interfaces";
import { StyledInputDiv, StyledTextInput } from "../../../styles/input";

export const Input = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledInputDiv>
        {label ? <label htmlFor={rest.name}>{label}</label> : null}
        <div className="input-box">
          <StyledTextInput ref={ref} {...rest} />
          {error ? <p>{error.message}</p> : null}
        </div>
      </StyledInputDiv>
    );
  }
);
