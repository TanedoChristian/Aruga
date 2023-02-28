import React, { useState } from "react";
import Header from "./Header";
import SetUp from "../Setup";

const LoginOtp = () => {
  const handleVerify = (e) => {
    e.preventDefault();
    window.location.href = "/dashboard?userid=user63f6e31851095";
  };
  return (
    <div className="bg-white">
      <Header />
      <div className="relative flex  flex-col overflow-hidden py-12 h-screen">
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
              <form action="" method="post">
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="number"
                        name=""
                        id=""
                        maxLength={1}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="number"
                        name=""
                        id=""
                        maxLength={1}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="number"
                        name=""
                        id=""
                        maxLength={1}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="number"
                        name=""
                        id=""
                        maxLength={1}
                      />
                    </div>
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
                      <p>Didn't recieve code?</p>{" "}
                      <a className="flex flex-row items-center text-blue-600">
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
