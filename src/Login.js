import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')


  const ProceedLogin = (e)=>{
    e.preventDefault();
    if (validate()) {
      
    }
  }

  const validate = ()=>{
    let results = true;
    if (username ==='' || username === null) {
      results = false;
      toast("Hello Geeks");
      console.log('please enter surname');
    }
    if (password ==='' || password === null) {
      results = false;
      console.log("please enter password");
    }
    return results;
  }

  return (
    <section className="login flex">
      <form onSubmit={ProceedLogin}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
        <p className="register text-right">
          Don't have an account yet ? <a href="#">register!</a>
        </p>
      </form>
    </section>
  );
}

export default Login;


