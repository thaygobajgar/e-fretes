import { AxiosRequestConfig } from "axios";

export interface User {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export type UserCreate = Omit<User, "id">;

export type UserLogin = Pick<User, "email" | "password">;

export type UserRetrieve = Omit<User, "password">;

export type UserProviderValues = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  authHeader: AxiosRequestConfig;

  userRegister: (payload: UserCreate) => Promise<void>;
  userLogin: (payload: UserLogin) => Promise<void>;
  userLogout: () => void;
};

export interface Address {
  zipcode: string;
}
