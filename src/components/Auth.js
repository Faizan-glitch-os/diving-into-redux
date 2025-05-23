import { useDispatch, useSelector } from "react-redux";
import classes from "./Auth.module.css";

import { authActions } from "../store/authSlice";

const Auth = () => {
  const authDispatcher = useDispatch();

  function handleOnSubmit(event) {
    event.preventDefault();

    authDispatcher(authActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleOnSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
