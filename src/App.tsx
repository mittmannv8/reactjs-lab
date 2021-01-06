import React, { useMemo } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";

import Home from "./pages/Home";
import lab from "./lab";

const Header = () => {
  const location = useLocation();

  const pageTitle = useMemo(() => {
    if (location.pathname === "/") return "React Lab";

    const experiment = lab.find(({ route }) => route === location.pathname);

    return experiment?.name ?? location.pathname;
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <div className="Header">
      {isHome && <RiReactjsLine className="Icon home-icon" />}

      {!isHome && (
        <Link className="GoBackButton" to="/">
          <IoMdArrowRoundBack className="Icon" />
        </Link>
      )}

      <h1 className="AppName">{pageTitle}</h1>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          {lab.map(({ route, component }) => (
            <Route exact path={route} component={component} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
