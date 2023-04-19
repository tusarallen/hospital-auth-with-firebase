import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("please add at least one uppercase");
      return;
    } else if (!/^(?=.*[0-9].*[0-9])/.test(password)) {
      setError("please add at least two numbers");
      return;
    } else if (password.length < 6) {
      setError("please add at least 6 characters in your password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="text-center mt-4">
        <h1 className="text-5xl font-bold">Sign Up </h1>
      </div>
      <div className="hero mt-8">
        <div className="hero flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <p className="text-error pt-2">{error}</p>
                <label className="label">
                  <Link className="pt-2 shadow-gray-500" to="/signin">
                    already have an account ?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
