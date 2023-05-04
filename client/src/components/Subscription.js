import axios from "axios";
import React, { useEffect, useState } from "react";
import SetUp from "../Setup";
import Header from "./Header";

const Subscription = () => {
  const [isOpen, setOpen] = useState(false);
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${SetUp.SERVER_URL()}/subscribe/${sessionStorage.getItem("userid")}`
      )
      .then(({ data }) => {
        if (data[0]) {
          window.location.href = "/viewsubscription";
        }
      });
  }, []);

  const handleSubscribe = () => {
    setOpen(true);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const submitSubscription = () => {
    axios({
      method: "POST",
      url: SetUp.SERVER_URL() + "/subscribe",
      data: {
        user_id: sessionStorage.getItem("userid"),
        amount: 200,
        file: file,
      },
      headers: { "Content-Type": '"multipart/form-data' },
    }).then((data) => {
      console.log(data);
      window.location.href = "/dashboard";
    });
  };

  return (
    <div>
      <Header />

      <section
        class="py-10 bg-gray-50 sm:py-16 lg:py-24"
        style={{ display: !isOpen ? "block" : "none" }}
      >
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Aruga Subscription
            </h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Please choose your subscription plan.
            </p>
          </div>

          <div class="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
            <div class="bg-white border-4 border-transparent rounded-md">
              <div class="p-6 md:py-10 md:px-9">
                <div class="inline-block px-4 py-2 bg-gray-100 rounded-full">
                  <h3 class="text-sm font-semibold text-gray-900">Standard</h3>
                </div>
                <p class="mt-5 text-5xl font-bold text-black">Php. 330</p>
                <p class="mt-2 text-base text-gray-600">Per month</p>

                <ul class="flex flex-col mt-8 space-y-4">
                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-medium text-gray-900">
                      {" "}
                      No Job Post Expiry for One Month{" "}
                    </span>
                    <svg
                      class="w-4 h-4 ml-0.5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </li>
                </ul>
                <button
                  title=""
                  class="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-gray-800 rounded-md hover:bg-gray-600 focus:bg-gray-600"
                  role="button"
                  onClick={handleSubscribe}
                >
                  Subscribe Now
                </button>
                <p class="mt-5 text-sm text-gray-500">
                  No Credit Card Required
                </p>
                <p class="mt-5 text-sm text-gray-500">
                  Upload screenshot of the payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="flex flex-col gap-2"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <label
          for="email"
          className=" text-base leading-relaxed text-gray-600 p-5 text-xl font-bold"
        >
          Upload Payment Receipt
        </label>
        <div className="flex items-center justify-center w-full border">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PDF, PNG, JPG
              </p>
              <p className=" text-blue-500 font-medium"></p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFile}
            />
          </label>
        </div>
        <button
          className="p-4 bg-rose-400 text-white text-md rounded-lg w-full absolute"
          onClick={submitSubscription}
        >
          Submit Payment
        </button>
      </div>
    </div>
  );
};

export default Subscription;
