import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../inputs/Input";
import { InputPassword } from "../../inputs/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserFormSchema } from "./loginUserForm";
import Form from "../Form";
import { StyledButton } from "../../../styles/buttons";

interface ILoginUserFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUserFormValues>({
    resolver: zodResolver(loginUserFormSchema),
  });

  const submit: SubmitHandler<ILoginUserFormValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
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

      <StyledButton type="submit">Cadastrar</StyledButton>
    </Form>
  );
};
