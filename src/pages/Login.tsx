import { useEffect, useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  Button,
} from "@material-ui/core";
import { IAuthData, ILoginForm } from "../interfaces";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory();

  const [loginData, setLoginData] = useState<ILoginForm>({
    identifier: "",
    password: "",
  });

  useEffect(() => {
    const data = sessionStorage.getItem("dataUser");
    if (data !== null) {
      history.push("/home");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginDataDB: IAuthData = await (
      await axios.post("https://cosbiome.online/auth/local", loginData)
    ).data;

    sessionStorage.setItem("dataUser", JSON.stringify(loginDataDB));
    history.push("/home");
  };

  return (
    <div
      className="container"
      style={{
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div style={{ padding: 20 }}>
        <Typography variant="h4" className="text-center">
          COSBIOME SISTEMA
        </Typography>
        <div className="row mt-5">
          <div className="col-md-12 ">
            <form onSubmit={handleSubmit}>
              <FormControl className="mt-4" style={{ width: "100%" }}>
                <InputLabel htmlFor="usuario">Usuario</InputLabel>
                <Input
                  value={loginData.identifier}
                  name="identifier"
                  onChange={(value) =>
                    setLoginData({
                      ...loginData,
                      [value.currentTarget.name]: value.currentTarget.value,
                    })
                  }
                  id="usuario"
                  required
                  type="text"
                />
              </FormControl>

              <FormControl className="mt-4" style={{ width: "100%" }}>
                <InputLabel htmlFor="contraseña"> Contraseña </InputLabel>
                <Input
                  value={loginData.password}
                  name="password"
                  onChange={(value) =>
                    setLoginData({
                      ...loginData,
                      [value.currentTarget.name]: value.currentTarget.value,
                    })
                  }
                  id="contraseña"
                  required
                  type="password"
                />
              </FormControl>

              <FormControl className="mt-5" style={{ width: "100%" }}>
                <Button type="submit" variant="contained" color="primary">
                  Iniciar sesion
                </Button>
              </FormControl>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
