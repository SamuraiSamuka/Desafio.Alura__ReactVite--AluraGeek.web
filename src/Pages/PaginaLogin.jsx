import { useLoaderData } from "react-router-dom";
import { getUsuarios } from "../API/usuarios";
import Login from "../Components/Login";

export async function loader() {
  const usuarios = getUsuarios();
  return { usuarios }
}

export default function PaginaLogin() {
  const { usuarios } = useLoaderData();
  return (
    <main className="principal">
        <Login />
    </main>
  )
}
