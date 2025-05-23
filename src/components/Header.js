import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";

import { authActions } from "../store/authSlice";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  const authDispatcher = useDispatch();

  function logoutHandler() {
    authDispatcher(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
