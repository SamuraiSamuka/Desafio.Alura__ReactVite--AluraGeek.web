import "./NavBotao.css";
import { NavLink } from "react-router-dom";

export default function NavBotao({children, to, key, corAtivoPrimaria, corAtivoSecundaria, corInativoPrimaria, corInativoSecundaria }) {

  return (
    <NavLink 
      key={key || 0} 
      to={to || "/"} 
      className={({isActive, isPending}) => isActive? "novo-botao nav-botao navlink-ativo" : isPending? "novo-botao nav-botao navlink-pendente" : "novo-botao nav-botao"}
      style={({ isActive, isPending}) => {
        return {
          width: "100%",
          backgroundColor: isActive? corAtivoPrimaria: isPending? corInativoPrimaria: "white",
          borderColor: isActive? corAtivoSecundaria: isPending? corInativoSecundaria: "gray",
          color: isActive? corAtivoSecundaria: isPending? corInativoSecundaria: "gray",
        };
      }}
    >{children}</NavLink>
  );
}
