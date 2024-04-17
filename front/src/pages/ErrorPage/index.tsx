import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <h1>404</h1>
      <p>Página não encontrada!</p>
      <Link to="/">
        <button>Voltar a pagina inicial</button>
      </Link>
    </>
  );
};
