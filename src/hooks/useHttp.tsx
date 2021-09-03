import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useHttp = () => {
  const endpointserver = "https://cosbiome.online/";

  const {
    globalState: { token },
  } = useContext(GlobalContext);

  const get = async (url: string) => {
    try {
      let req = await axios.get(`${endpointserver}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return req.data;
    } catch (error) {
      throw Error(error as string);
    }
  };

  const getAfterLogin = async (url: string, auth: string) => {
    try {
      let req = await axios.get(`${endpointserver}${url}`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });

      return req.data;
    } catch (error) {
      throw Error(error as string);
    }
  };

  const post = async (url: string, body: object) => {
    try {
      let req = await axios.post(`${endpointserver}${url}`, body, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return req.data;
    } catch (error) {
      throw Error(error as string);
    }
  };

  const update = async (url: string, body: object) => {
    try {
      let req = await axios.put(`${endpointserver}${url}`, body, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return req.data;
    } catch (error) {
      throw Error(error as string);
    }
  };

  const deleted = async (url: string) => {
    try {
      let req = await axios.delete(`${endpointserver}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return req.data;
    } catch (error) {
      throw Error(error as string);
    }
  };

  const login = async (url: string, body: object) => {
    try {
      let req = await axios.post(`${endpointserver}${url}`, body, {
        headers: {
          "Content-type": "application/json",
        },
      });

      return req.data;
    } catch (error) {
      throw Error(error as string);
    }
  };

  return {
    get,
    getAfterLogin,
    post,
    update,
    deleted,
    login,
  };
};

export default useHttp;
