import React, { useEffect, useState } from "react";
import Header from "./Header";
import SetUp from "../Setup";
import axios from "axios";
import messageIcon from "../img/no-spam.png";
const Inbox = () => {
  const [inbox, setInbox] = useState([]);

  const [messageFrom, setMessageFrom] = useState([]);
  const [messageTo, setMessageTo] = useState([]);

  const [parents, setParents] = useState([]);
  const [babysitters, setBabysitters] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${SetUp.SERVER_URL()}/hire/inbox/${sessionStorage.getItem("userid")}`
      )
      .then(({ data }) => {
        console.log(data);
        setInbox(data);
      });
  }, []);

  const handleClick = (item) => {
    sessionStorage.setItem("chatpid", item);
    window.location.href = "/message";
  };

  return (
    <div>
      <Header />

      <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        {inbox.length == 0 ? (
          <div className="w-full flex justify-center h-screen items-center">
            <h1 className="text-xl text-slate-500 font-bold">No Messages</h1>
          </div>
        ) : (
          ""
        )}

        <div class="flex items-center justify-between mb-4 mt-10"></div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 ">
            {inbox.map((item) =>
              sessionStorage.getItem("type") == "parent" ? (
                <li
                  class="pt-3 pb-0 sm:pt-4"
                  onClick={() => handleClick(item.babysitter_id)}
                >
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={`${SetUp.SERVER_URL()}/${item.babysitter_img}`}
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {item.babysitter}
                      </p>
                    </div>
                  </div>
                </li>
              ) : (
                <li
                  class="pt-3 pb-0 sm:pt-4"
                  onClick={() => handleClick(item.parent_id)}
                >
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={`${SetUp.SERVER_URL()}/${item.parent_img}`}
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {item.parent}
                      </p>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
