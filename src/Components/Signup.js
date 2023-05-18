import React, { useRef } from "react";
import "./Signup.css";
import { auth } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    // auth.createUserWithEmailAndPassword()
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  const sign_up = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="Form_class ">
      <form>
        <div className="form-outline mb-4">
          <h2 className="my-4">Sign up</h2>

          <input
            type="email"
            id="form2Example1"
            className="form-control inp"
            placeholder="Email Address"
            ref={emailRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control inp"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>

        <button type="button" className="btn btn-danger btn-block mb-4" onClick={sign_up}>
          Sign in
        </button>

        <div className="text-center">
          <p>
            New to Netflix?{" "}
            <a href="#!" onClick={register}>
              Sign up now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
