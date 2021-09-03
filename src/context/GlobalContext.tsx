import React, { useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { IAuthData } from "../interfaces";
import { GlobalAction, globalReducer } from "./GlobalReducer";

export interface IGlobalState {
  userName: string;
  token: string;
  login: boolean;
  title: string;
}

const globalInitialState: IGlobalState = {
  userName: "",
  title: "COSBIOME",
  token: "",
  login: false,
};

export interface IPropsGlobalContext {
  globalState: IGlobalState;
  dispatch: React.Dispatch<GlobalAction>;
}

export const GlobalContext = React.createContext({} as IPropsGlobalContext);

export const GlobalProvider = ({ children }: any) => {
  const history = useHistory();
  const [globalState, dispatch] = useReducer(globalReducer, globalInitialState);

  useEffect(() => {
    const data = sessionStorage.getItem("dataUser");
    if (data !== null) {
      const dataParse: IAuthData = JSON.parse(data);
      dispatch({
        type: "login",
        payload: dataParse,
      });
    } else {
      history.push("/");
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        globalState: globalState,
        dispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
