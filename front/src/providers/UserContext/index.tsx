import { createContext, useState } from "react";
import { UserCreate, UserLogin, UserProviderValues } from "./interfaces";
import { AxiosRequestConfig } from "axios";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({} as UserProviderValues);

export const UserProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const tokenLocalId = "@ENCONTRANDOFRETES:TOKEN";
  const tokenLocal = localStorage.getItem(tokenLocalId);

  const [token, setToken] = useState(tokenLocal ? tokenLocal : "");
  const [loading, setLoading] = useState(false);

  const authHeader: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const navigate = useNavigate();

  // useEffect((): void => {
  //   const retrieveUser = async (): Promise<void> => {
  //     try {
  //       setLoading(true);
  //       await api.get("/users/profile", authHeader);
  //       navigate("/dashboard");
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };
  // }, []);

  const userRegister = async (payload: UserCreate): Promise<void> => {
    console.log(payload);
    // payload.isDriver == "yes"
    //   ? (payload.isDriver = true)
    //   : (payload.isDriver = false);
    // console.log(payload);
    // try {
    //   await api.post("/users/register", payload);
    //   toast.success("Usuário registrado com sucesso!");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const userLogin = async (payload: UserLogin) => {
    try {
      const { data } = await api.post("/login", payload);

      localStorage.setItem(tokenLocalId, data.token);
      setToken(data.token);
      navigate("/dashboard");
      toast.success("Login feito com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = (): void => {
    setToken("");
    localStorage.removeItem(tokenLocalId);
    navigate("/");
  };
  return (
    <UserContext.Provider
      value={{
        authHeader,
        loading,
        token,
        userLogin,
        userLogout,
        userRegister,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
