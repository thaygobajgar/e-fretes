import { ForwardedRef, forwardRef, useState } from "react";
import { IInputProps } from "../interfaces";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { StyledInputDiv, StyledTextInput } from "../../../styles/input";
export const InputPassword = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const type = isHidden ? "password" : "text";
    return (
      <StyledInputDiv>
        {label ? <label htmlFor={rest.name}>{label}</label> : null}
        <div className="input-box">
          <StyledTextInput ref={ref} type={type} {...rest} />
          {error ? <p>{error.message}</p> : null}
        </div>
        <button
          type="button"
          style={{ position: "absolute", right: "20px", top: "35px" }}
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? <FaRegEye size={21} /> : <FaRegEyeSlash size={21} />}
        </button>
      </StyledInputDiv>
    );
  }
);
