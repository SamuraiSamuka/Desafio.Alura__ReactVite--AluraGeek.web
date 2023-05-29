import localforage from "localforage";
import { matchSorter } from "match-sorter";
import { v4 as uuidv4 } from 'uuid';

export async function createUsuario({nome, tipo, dataNascimento, email, senha, bio}) {
    let usuario = { 
        id: uuidv4(),
        nome: nome,
        tipo: tipo,
        dataNascimento: Date(dataNascimento),
        email: email,
        senha: senha,
        bio: bio,
        data_criacao: new Date()
    }
    let usuarios = await localforage.getItem("usuarios");
    usuarios.unshift(usuario);
    await salvar(usuarios)
    return usuario;
}

export async function getUsuario(id) {
    let usuarios = await localforage.getItem("usuarios");
    let usuario = usuarios.find(usuario => usuario.id === id);
    return usuario ?? null
}

export async function getUsuarios(query){
    let usuarios = await localforage.getItem("usuarios");
    if (!usuarios) usuarios = [];
    if (query) {
        usuarios = matchSorter(usuarios, query, { keys: ['email', 'nome', 'sobrenome', 'dataNascimento', 'tipo']})
    }
    return usuarios
}

export async function updateUsuario(id, updates) {
    let usuarios = await localforage.getItem("usuarios");
    let usuario = usuarios.find(usuario => usuario.id === id);
    if (!usuario) throw new Error("Nenhum usuário encontrado com o id ", id);
    Object.assign(usuario, updates);
    await salvar(usuarios);
}

export async function deleteUsuario(id) {
    let usuarios = await localforage.getItem("usuarios");
    let indice = usuarios.find(usuario => usuario.id === id);
    if (indice > -1){
        usuarios.splice(indice, 1);
        await salvar(usuarios);
        return true;
    }
    return false;
}

function salvar(usuarios) {
    return localforage.setItem("usuarios", usuarios)
}