import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomePage } from "./pages/HomePage";
import { CreateUserForm } from "./components/forms/CreateUserForm";
import Header from "./components/Header";

const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      <Header />
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
      </div>
    </>
  );
};
export default App;
