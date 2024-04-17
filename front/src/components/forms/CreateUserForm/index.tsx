import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../inputs/Input";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { InputPassword } from "../../inputs/InputPassword";
import Form from "../Form";
import { StyledButton } from "../../../styles/buttons";
import { createUserFormSchema } from "./createUserForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface ICreateUserFormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export const CreateUserForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUserFormValues>({
    resolver: zodResolver(createUserFormSchema),
  });

  const submit: SubmitHandler<ICreateUserFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        label="Nome:"
        placeholder="Digite seu nome..."
        {...register("name")}
        error={errors.name}
      />
      <Input
        type="email"
        label="Email:"
        placeholder="Digite seu email..."
        {...register("email")}
        error={errors.email}
      />
      <Input
        type="text"
        label="Telefone:"
        placeholder="Digite seu telefone..."
        {...register("phone")}
        error={errors.phone}
      />
      <InputPassword
        label="Senha:"
        placeholder="Digite sua senha..."
        {...register("password")}
        error={errors.password}
      />
      <InputPassword
        label="Confirmar senha:"
        placeholder="Digite sua senha novamente..."
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <StyledButton type="submit">Cadastrar</StyledButton>
    </Form>
  );
};
