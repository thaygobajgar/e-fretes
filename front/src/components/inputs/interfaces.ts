import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  [k: string]: any;
}
