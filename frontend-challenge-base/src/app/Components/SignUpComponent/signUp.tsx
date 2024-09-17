/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */

import { IoChevronBackCircleOutline } from "react-icons/io5";

/* eslint-disable prettier/prettier */
export default function SignUpComponent(props): JSX.Element {
  return (
    <div className="container_sign_up">
      <div className="back" onClick={(e) => props.setShow(false)}>
        <IoChevronBackCircleOutline /> Back
      </div>
      <div className="column1">
        <div className="container_buttons">
          <div
            onClick={() => props.setSign("register")}
            className="width_button"
            style={{
              backgroundColor: props.sign === "register" ? "#f0a500" : "black",
            }}
          >
            Sign Up
          </div>
          <div
            onClick={() => props.setSign("login")}
            className="width_button"
            style={{
              backgroundColor: props.sign === "login" ? "#f0a500" : "black",
            }}
          >
            Log In
          </div>
        </div>
        {props.sign === "register" && (
          <div className="register-container">
            {props.register && (
              <form action="server" method="post">
                <input type="email" name="email" placeholder="Email" required />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm_password"
                  required
                />
                <button type="submit">Registrar</button>
              </form>
            )}
            {!props.register && (
              <button onClick={() => props.setRegister(true)}>
                Register with your Email
              </button>
            )}
          </div>
        )}
        {props.sign === "login" && (
          <div className="login-container">
            <form action="server" method="post">
              <input type="text" name="username" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button type="submit">Log In</button>
            </form>
          </div>
        )}
      </div>
      <div className="welcome">
        <h1>Welcome to Quickbet Movies!</h1>
        <p>
          Ready to unlock a universe of cinematic delights? Sign up now and
          start your journey with us!
        </p>
        <img src="./ilustracion-persona-eligiendo-direccion.png" alt="" />
      </div>
    </div>
  );
}
