import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import SetUp from "../Setup";

const ViewSubscription = () => {
  const [subscription, setSubscription] = useState({});
  useEffect(() => {
    axios
      .get(
        `${SetUp.SERVER_URL()}/subscribe/${sessionStorage.getItem("userid")}`
      )
      .then(({ data }) => {
        if (data[0]) {
          setSubscription(data[0]);
        }
      });
  }, []);

  return (
    <div>
      <Header />

      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
            <div class="bg-white border-4 border-transparent rounded-md">
              <div class="p-6 md:py-10 md:px-9">
                <div class="inline-block px-4 py-2 bg-gray-100 rounded-full">
                  <h3 class="text-sm font-semibold text-gray-900">Standard</h3>
                </div>
                <p class="mt-5 text-5xl font-bold text-black">Php. 100</p>
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
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-10">
        <div className="flex flex-col p-5 w-full bg-rose-300 rounded-lg shadow-xl">
          <div className="w-[100%]">
            <div className="flex justify-between">
              <h1 className="font-bold text-lg">Subscription ID: </h1>
              <p>{subscription.subscription_id}</p>
            </div>

            <div className="flex justify-between">
              <h1 className="font-bold text-lg">Date Started: </h1>
              <p>
                {new Date(subscription.date_start).toLocaleDateString("en-us", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex justify-between">
              <h1 className="font-bold text-lg">Date Ended: </h1>
              <p>
                {new Date(subscription.date_ended).toLocaleDateString("en-us", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex justify-between">
              <h1 className="font-bold text-lg">Status: </h1>
              <p>{subscription.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSubscription;
