import { IAuthData } from "../interfaces";
import { IGlobalState } from "./GlobalContext";

export type GlobalAction =
  | { type: "login"; payload: IAuthData }
  | { type: "changeTitle"; payload: string };

export const globalReducer = (
  state: IGlobalState,
  action: GlobalAction
): IGlobalState => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        login: true,
        token: action.payload.jwt,
        userName: action.payload.user.username,
      };

    case "changeTitle":
      return {
        ...state,
        title: action.payload,
      };

    default:
      return state;
  }
};
