//i react imports
import { createContext, useReducer, useMemo, useContext } from "react";

import { initialState, rootReducer } from "./store";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const context = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalContextProvider;
