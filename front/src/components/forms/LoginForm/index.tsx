import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { UserLogin } from "../../../providers/UserContext/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../inputs/Input";
import { InputPassword } from "../../inputs/InputPassword";
import { Link } from "react-router-dom";

interface ILoginUserFormValues {
  email: string;
  password: string;
}
//loop de 1 a 10'

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUserFormValues>({});

  const submit: SubmitHandler<ILoginUserFormValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="email"
        label="Email:"
        placeholder="Digite seu email..."
        {...register("email")}
        error={errors.email}
      />
      <InputPassword
        label="Password:"
        placeholder="Digite sua senha..."
        {...register("password")}
        error={errors.password}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
};
