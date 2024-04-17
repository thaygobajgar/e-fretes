import { ForwardedRef, forwardRef, useState } from "react";
import { IInputProps } from "../interfaces";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { StyledTextInput } from "../../../styles/input";
export const InputPassword = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const type = isHidden ? "password" : "text";
    return (
      <div style={{ position: "relative" }}>
        {label ? <label htmlFor={rest.name}>{label}</label> : null}
        <StyledTextInput ref={ref} type={type} {...rest} />
        {error ? <p>{error.message}</p> : null}
        <button
          type="button"
          style={{ position: "absolute", right: "20px", top: "35px" }}
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? <FaRegEye size={21} /> : <FaRegEyeSlash size={21} />}
        </button>
      </div>
    );
  }
);
