import { createContext, useState, useEffect } from "react";

export const HistoricoContext = createContext();
HistoricoContext.displayName = "Historico";

export function HistoricoProvider({children}){
    const [location, setLocation] = useState("");
    const [ historico, setHistorico ] = useState([]);

    useEffect(() => {
      setHistorico(historicoPrev => [...historicoPrev, location.pathname])
    }, [location])

    return (
        <HistoricoContext.Provider value={{historico, setLocation}}>
            {children}
        </HistoricoContext.Provider>
    )
}