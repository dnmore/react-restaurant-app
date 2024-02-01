import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to={"/"}>
          <div className="logo"><strong>Crave</strong>Waves</div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/menu"}>
            Menu
          </Link>
          <Link className="nav-link" to={"/signIn"}>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
