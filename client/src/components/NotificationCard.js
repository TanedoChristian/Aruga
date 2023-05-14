import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import SetUp from "../Setup";
import axios from "axios";
import JobsCard from "./JobsCard";
import ConfirmModal from "./ConfirmModal";
const NotificationCard = (props) => {
  const [notification, setNotification] = useState([]);
  const [hire, setHire] = useState([]);
  const [success, setSuccess] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [isOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${SetUp.SERVER_URL()}/application/${sessionStorage.getItem("userid")}}`
      )
      .then(({ data }) => {
        setNotification(data.filter((item) => item.apply_deleted != 1));
        console.log(data);
      });

    axios
      .get(`${SetUp.SERVER_URL()}/hire/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        setHire(data);
      });
  }, [success]);

  const handleDelete = (id) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    axios({
      method: "PUT",
      url: `${SetUp.SERVER_URL()}/application/delete/${deleteId}`,
    }).then(({ data }) => {
      setSuccess(!success);
      setModalOpen(false);
    });
  };

  const handleNotification = (id, app_id) => {
    window.location.href = "/user-details?userid=" + id;
    sessionStorage.setItem("application_id", app_id);
  };

  return (
    <div className="flex flex-col mt-2 items-center gap-1">
      <ConfirmModal
        isOpen={isOpen}
        title="Reject Application"
        width="w-[90%]"
        height="h-[20vh]"
        handleClose={() => setModalOpen(false)}
      >
        <div className="flex justify-center gap-5 items-center h-screen">
          <button
            className="p-3 px-5 bg-rose-400 text-white rounded-md shadow-md"
            onClick={confirmDelete}
          >
            Reject
          </button>
          <button
            className="p-3 px-5 bg-rose-400 text-white rounded-md shadow-md"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </ConfirmModal>

      {sessionStorage.getItem("type") == "parent"
        ? notification.map((data) => (
            <div className="jobs-container flex justify-center w-full  ">
              <div className="flex items-center p-4 bg-white shadow-xl flex-col border border-gray-200 w-[95%] rounded-xl ">
                <div className="flex">
                  <img
                    className="h-12 w-12 rounded-full"
                    alt="John Doe's avatar"
                    src={`${SetUp.SERVER_URL()}/${data.img}`}
                  />

                  <div className="ml-5 mt-1">
                    <p className="text-sm text-gray-600">
                      <span className="text-md font-semibold leading-tight text-gray-900">
                        {`${data.firstname} ${data.lastname}`}
                      </span>
                      <span className="text-ellipsis">
                        submitted an application in your job post
                      </span>
                    </p>
                  </div>
                </div>
                <span className="flex text-xs font-semibold uppercase  mr-3 text-gray-500 w-full justify-end">
                  {new Date(data.apply_date).toLocaleTimeString()}
                </span>
                {data.apply_status != "done" ? (
                  <div className="w-full flex gap-2">
                    <button
                      className="py-1 px-5 bg-rose-400 text-white rounded-md shadow-md"
                      onClick={() =>
                        handleNotification(data.babysitter_id, data.apply_id)
                      }
                    >
                      View
                    </button>
                    <button
                      className="py-1 px-5 bg-rose-400 text-white rounded-md shadow-md"
                      onClick={() => {
                        handleDelete(data.apply_id);
                      }}
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))
        : hire.map((data) => (
            <div
              className="jobs-container flex justify-center w-full flex-col bg-white p-2  "
              onClick={() => {
                sessionStorage.setItem("parent_id", data.parent_id);
                window.location.href = "/user-details?userid=" + data.parent_id;
              }}
            >
              <div className="flex items-center    w-[95%]  ">
                <img
                  src={`${SetUp.SERVER_URL()}/${data.img}`}
                  className="w-11 h-11 rounded-full"
                />

                <p className="text-sm text-gray-600">
                  <span className="text-sm  font-semibold leading-tight text-gray-900">
                    You are hired by {data.firstname} {data.lastname}
                  </span>
                </p>
              </div>
              <div className="w-full flex gap-2 justify-end">
                <button
                  className="p-1 bg-rose-400 text-white text-sm rounded-md shadow-md"
                  onClick={() => {
                    handleNotification(data.babysitter_id, data.apply_id);
                    sessionStorage.setItem("chatpid", data.parent_id);
                    window.location.href = "/message";
                  }}
                >
                  Message Now
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default NotificationCard;
