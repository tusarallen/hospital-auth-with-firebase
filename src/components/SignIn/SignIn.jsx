import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import lottieVhai from "../../assets/16766-forget-password-animation.json";

const SignIn = () => {
  const { signInWithGoogle, signInWithGithub, signIn, resetPassword } =
    useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
        setSuccess("user login successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("please provide your email address to reset password");
      return;
    }
    resetPassword(email)
      .then(() => {
        alert("please check your email");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Sign In </h1>
      <div className="flex mx-auto justify-center gap-44 items-center mb-16">
        <div>
          <Lottie animationData={lottieVhai} loop={true} />
        </div>
        <div>
          <div className="hero mt-8">
            <div className="hero flex-col">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      ref={emailRef}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <p
                      className="cursor-pointer font-semibold text-lg ml-2 my-1"
                      onClick={() => setShow(!show)}
                    >
                      <small>
                        {show ? (
                          <span>Hide Password</span>
                        ) : (
                          <span>Show Password</span>
                        )}
                      </small>
                    </p>
                    <label className="label">
                      <a
                        href="#"
                        className="label-text-alt link link-hover font-semibold text-sm"
                      >
                        Forgot password?
                      </a>
                    </label>
                    <p className="text-warning pt-2">{success}</p>
                  </div>
                  <div className="form-control mt-3">
                    <button className="btn btn-primary">Login</button>
                  </div>

                  <p className="mt-2 text-lg">
                    <small>
                      Forget password? Please
                      <button
                        onClick={handleResetPassword}
                        className="btn-link lowercase"
                      >
                        <span className="uppercase ms-2">R</span>eset password
                      </button>
                    </small>
                  </p>
                  <Link to="/signup" className="shadow-gray-500">
                    new to oreo ? please register
                  </Link>
                </form>
                <div className="form-control mt-1">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-success"
                  >
                    <div className="flex items-center">
                      <p>Signin with</p>
                      <p className="ml-2">
                        <FaGoogle style={{fontSize:'25px', color:"red"}}/>
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={handleGithubSignIn}
                    className="btn btn-success mt-3"
                  >
                    <div className="flex items-center">
                      <p>Signin with</p>
                      <p className="ml-2">
                        <FaGithub style={{fontSize:'25px',color:"red"}}/>
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
