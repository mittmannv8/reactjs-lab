import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";

export const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/exp1">Experiment One</Link>
      </li>
    </ul>
  );
};

export const Exp1 = () => {
  return <div>Exp 1</div>;
};

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const appName = isHome ? "Home" : location.pathname;

  return (
    <div className="Header">
      {isHome && <RiReactjsLine className="Icon home-icon" />}
      {!isHome && (
        <Link className="GoBackButton" to="/">
          <IoMdArrowRoundBack className="Icon" />
        </Link>
      )}

      <h1 className="AppName">{appName}</h1>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/exp1" component={Exp1} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
