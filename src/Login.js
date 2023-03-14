import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useToasts } from 'react-toast-notifications'
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  // const { addToast } = useToasts()

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const url = `http://178.62.5.150:1944/api/login?email=${userEmail}&password=${password}`
      const requestOptions = {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
    };
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.status == "success"){
            localStorage.setItem('token',data.data.id)
            localStorage.setItem('user',data.data.name)
            localStorage.setItem('authors',data.data.preference.authers)
            localStorage.setItem('sources',data.data.preference.sources)
            navigate("/");
           
          }else{
            console.log(data.message);
            // addToast(data.message, {
            //   appearance: 'error',
            //   autoDismiss: true,
            // })
          }
        });
       
        console.log('====================================');
        console.log('dome');
        console.log('====================================');
    }
  };

  const validate = () => {
    let results = true;
    if (userEmail === "" || userEmail === null) {
      results = false;
      toast("Hello Geeks");
      console.log("please enter surname");
    }
    if (password === "" || password === null) {
      results = false;
      console.log("please enter password");
    }
    return results;
  };
  useEffect(() => {
    // localStorage.setItem('token', '121212')
    // localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

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
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
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
          Don't have an account yet ? <Link to={'/signup'}>register!</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
