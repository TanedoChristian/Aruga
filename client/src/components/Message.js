import axios from "axios";
import React, { useEffect, useState } from "react";
import SetUp from "../Setup";
import Header from "./Header";
const Message = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios({
        method: "GET",
        url: `${SetUp.SERVER_URL()}/messages/${sessionStorage.getItem(
          "userid"
        )}/${sessionStorage.getItem("chatpid")}`,
      }).then(({ data }) => {
        setMessages(data);
      });
    }, 2000); // execute every 2 seconds

    // Return a cleanup function to cancel the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures the effect only runs once on mount

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/users/${sessionStorage.getItem("chatpid")}`)
      .then(({ data }) => {
        setUser(data[0]);
      });
  }, []);

  const handleMessage = () => {
    axios({
      method: "POST",
      url: `${SetUp.SERVER_URL()}/message`,
      data: {
        message_from: sessionStorage.getItem("userid"),
        message_to: sessionStorage.getItem("chatpid"),
        message: message.message,
      },
    }).then((data) => {
      console.log(data[0]);
      document.getElementById("messageBox").value = "";
    });
  };

  return (
    <div class="flex flex-col h-screen antialiased text-gray-800">
      <Header />

      <div className="w-full">
        <h1 className="py-3 px-5 font-bold tracking-wide text-xl poppins">
          {`${user?.firstname} ${user?.lastname}`}
        </h1>
      </div>
      <div class="flex flex-row h-full w-full overflow-x-hidden">
        <div class="flex flex-col flex-auto h-full p-6">
          <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                  {messages.map((item) =>
                    item.message_from != sessionStorage.getItem("userid") ? (
                      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-rose-500 flex-shrink-0">
                            <img
                              className="flex object-cover h-10 w-10 rounded-full"
                              src={`${SetUp.SERVER_URL()}/${item.img}`}
                            />
                          </div>
                          <div class=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>{item.message}</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div class="col-start-6 col-end-13 p-3 rounded-lg">
                        <div class="flex items-center justify-start flex-row-reverse">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-rose-400">
                            <img
                              className="flex object-cover h-10 w-10 rounded-full"
                              src={`${SetUp.SERVER_URL()}/${sessionStorage.getItem(
                                "userimg"
                              )}`}
                            />
                          </div>
                          <div class=" mr-3 text-sm bg-rose-200 py-2 px-4 shadow rounded-xl">
                            <div>{item.message}</div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <form
              class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div class="flex-grow ml-4">
                <div class=" w-full">
                  <input
                    type="text"
                    id="messageBox"
                    class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    onChange={(e) => {
                      setMessage((prev) => {
                        return { ...prev, message: e.target.value };
                      });
                    }}
                  />
                </div>
              </div>
              <div class="ml-4">
                <button
                  class="flex items-center justify-center bg-rose-400 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  onClick={handleMessage}
                >
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
