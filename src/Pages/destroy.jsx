import { redirect } from "react-router-dom";
import { deleteProduto } from "../API/produtos";

export async function action({params}) {
    await deleteProduto(params.produtoId);
    return redirect("/todosprodutos/todos")
}