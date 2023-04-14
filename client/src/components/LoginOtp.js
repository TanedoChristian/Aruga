import React, { useState } from "react";
import Header from "./Header";
import SetUp from "../Setup";
import axios from "axios";

const LoginOtp = () => {
  const [isShow, setShow] = useState(false);
  const [otp, setOtp] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [error, setError] = useState(false);

  const handleVerify = (e) => {
    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/verify-otp",
      data: {
        mobileno: mobileNumber,
        otp: otp,
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOtp = (e) => {
    setOtp(e.target.value);
  };

  const verifyNumber = () => {
    axios({
      method: "POST",
      url: SetUp.SERVER_URL() + "/otp",
      data: {
        mobileno: mobileNumber,
      },
    })
      .then(({ data }) => {
        console.log(data);
        setShow(true);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
        setError(true);
      });
  };

  return (
    <div className="bg-neutral-700 h-screen flex items-center justify-center">
      <div
        className="flex flex-col gap-5 items-center p-10"
        style={{ display: !isShow ? "flex" : "none" }}
      >
        {error ? "Account not found" : ""}
        <h1 className="text-3xl text-white">Login Via Phone Number</h1>
        <div>
          <h2 className=" font-thin text-white">
            Enter your registered phone number
          </h2>
          <input
            type="number"
            onChange={handleChangeNumber}
            className=" hello shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+639xxxxxx"
          />

          <p className="text-sm text-blue-500 mt-5">Login via email? </p>

          <button
            className=" w-full p-3 mt-2 bg-rose-500 text-white font-medium rounded-xl"
            onClick={verifyNumber}
          >
            Verify
          </button>
        </div>
      </div>

      <div
        className="relative flex  flex-col overflow-hidden py-12 h-screen justify-center"
        style={{
          display: isShow ? "flex" : "none",
        }}
      >
        <div className="relative bg-white px-6 pt-10 pb-9  mx-auto w-full max-w-lg rounded-2xl ">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Mobile Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>Aruga sent a code to your number +63***343432</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-center mx-auto w-full max-w-xs">
                  <input
                    type="number"
                    className="tracking-[20px] bg-none"
                    onChange={handleOtp}
                  />
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      onClick={handleVerify}
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-3  border-none text-white text-sm shadow-sm secondary-clr"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>{" "}
                    <a className="flex flex-row items-center text-blue-600">
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
