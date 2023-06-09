import { redirect } from "react-router-dom";
import PedidoRealizado from "../Components/PedidoRealizado";

export async function action() {
  return redirect('/')
}

export default function PaginaPedidoRealizado() {
  return (
    <PedidoRealizado />
  )
}
