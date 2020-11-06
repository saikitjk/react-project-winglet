import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    //homepage
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
