import React, { useState } from "react";
import axios from "axios";
import SetUp from "../Setup";
import Background from "../img/background.png";
import { ReactSession } from "react-client-session";

const Login = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  if (sessionStorage.getItem("userid")) {
    window.location.href = "/dashboard";
  }

  const handleEmail = (e) => {
    setUser((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const handlePassword = (e) => {
    setUser((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.email);
    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/login",
      data: {
        email: user.email,
        password: user.password,
      },
    }).then(({ data }) => {
      if (data.message == "Success") {
        sessionStorage.setItem("userid", data.userid);
        sessionStorage.setItem(
          "userimg",
          `${SetUp.SERVER_URL()}/${data.userimg}`
        );

        sessionStorage.setItem("type", data.type);

        if (data.type == "parent") {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/dashboard-babysitter";
        }
      } else {
        setError(true);
      }
    });
  };

  const handleClickPhone = () => {
    axios.get(`${SetUp.SERVER_URL()}/otp`).then((data) => {
      window.location.href = "/login-otp";
    });
  };

  return (
    <div
      className="fade-in login"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="h-screen flex flex-col w-full justify-center items-center login-wrapper">
        <div className="h-4/5 login-container flex flex-col gap-20">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-medium  text-right">Login</h1>
            <p className="text-md text-gray-700 text-right">
              Please sign in to continue.
            </p>
          </div>

          <div className="w-full  flex flex-col gap-3">
            <p className="text-sm text-red-500 mt-5">
              {error ? "Account not found" : ""}{" "}
            </p>
            <div>
              <h2 className=" tracking-wide">Email</h2>
              <input
                type="text"
                className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                onChange={handleEmail}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <h2 className=" font-thin">Password</h2>
                <input
                  type="password"
                  className=" hello shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  onChange={handlePassword}
                />

                <p className="text-sm text-blue-500 mt-5">Forgot password? </p>
              </div>

              <div className="w-full flex justify-end">
                <button
                  className="bg-black hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full shadow-xl"
                  onClick={handleSubmit}
                >
                  Login
                  <i className="fa-solid fa-arrow-right text-white ml-2"></i>
                </button>
              </div>
            </form>

            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">Or</p>
            </div>

            <button
              className="bg-black hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-lg shadow-xl"
              onClick={handleClickPhone}
            >
              Via Phone Number
            </button>
            <div className="flex justify-center mt-7">
              <a href="/register">
                <p className="font-md">
                  Don't have an account?{" "}
                  <span className="text-blue-500">Sign Up</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
