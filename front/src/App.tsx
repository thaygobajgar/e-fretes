import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DefaultTemplate } from "./components/DefaultTemplate";
import Main from "./components/Main";
import { RouterMain } from "./routes/RouterMain";

const App = () => {
  // const { loading } = useContext(UserContext);
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      <DefaultTemplate>
        <Main>
          <RouterMain />
        </Main>
      </DefaultTemplate>
    </>
  );
};
export default App;

{
  /* <Header />
{loading ? null : <HomePage />}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "10px",
  }}
>
  <CreateUserForm />
</div> */
}
