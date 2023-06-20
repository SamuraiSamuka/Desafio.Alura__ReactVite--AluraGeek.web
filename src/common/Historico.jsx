import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Historico";

export function HistoricoProvider({children}){
    const location = useLocation();
    const [ historico, setHistorico ] = useState([]);

    useEffect(() => {
      setHistorico(historicoPrev => [...historicoPrev, location.pathname])
    }, [location])

    return (
        <CarrinhoContext.Provider value={{historico}}>
            {children}
        </CarrinhoContext.Provider>
    )
}