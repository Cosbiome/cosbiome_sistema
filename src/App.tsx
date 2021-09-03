import { HashRouter, Switch, Route } from "react-router-dom";
import LayoutDrawer from "./components/LayoutDrawer";
import { GlobalProvider } from "./context/GlobalContext";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import VentasPage from "./pages/VentasPage";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <GlobalProvider>
          <LayoutDrawer>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/ventas" component={VentasPage} />
          </LayoutDrawer>
        </GlobalProvider>
      </Switch>
    </HashRouter>
  );
};

export default App;
