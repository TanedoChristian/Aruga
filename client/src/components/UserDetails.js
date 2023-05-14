import React, { StrictMode, useEffect, useState } from "react";

import Ratings from "./Ratings";
import ProfileCategory from "./ProfileCategory";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import SetUp from "../Setup";
import BioInfo from "./BioInfo";
import Modal from "./Modal";
import Resume from "./Resume";
import ConfirmModal from "./ConfirmModal";
const UserDetails = () => {
  const params = new URLSearchParams(window.location.search);
  const userid = params.get("userid");
  const [component, setComponent] = useState("bio");
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isSuccessHire, setSuccessHire] = useState(false);

  const [hireDetails, setHireDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${SetUp.SERVER_URL()}/hire/${sessionStorage.getItem("userid")}`)
      .then(({ data }) => {
        console.log(data.length);
        setHireDetails(data);
      });
  }, [isSuccessHire]);

  if (sessionStorage.getItem("type") == "parent") {
    useEffect(() => {
      axios
        .get(`${SetUp.SERVER_URL()}/review/${userid}/${userid}`)
        .then(({ data }) => {
          setReviewsData(data);
        });
    }, [success]);
  } else {
    useEffect(() => {
      axios
        .get(`${SetUp.SERVER_URL()}/review/parent/${userid}/${userid}`)
        .then(({ data }) => {
          setReviewsData(data);
        });
    }, [success]);
  }

  useEffect(() => {
    axios.get(`${SetUp.SERVER_URL()}/users/${userid}`).then(({ data }) => {
      setUser(data[0]);
      console.log(user);
    });
  }, []);

  const [isDescription, setDescription] = useState(true);
  const [isReviews, setReviews] = useState(false);
  const [isResume, setResume] = useState(false);
  const [descriptionBg, setDescriptionBg] = useState("red");
  const [newReview, setNewReview] = useState({});

  const [isOpen, setModalOpen] = useState(false);

  const handleBack = () => {
    window.location.href = `/dashboard?userid=${userid}`;
  };

  const submitReview = () => {
    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/review",
      data: {
        ...newReview,
        babysitter_id: userid,
        parent_id: sessionStorage.getItem("userid"),
        target: userid,
      },
    }).then((data) => {
      console.log(data);
      setSuccess(!success);
    });
    setShowModal(false);
  };

  const submitReviewParent = () => {
    axios({
      method: "post",
      url: SetUp.SERVER_URL() + "/review",
      data: {
        ...newReview,
        parent_id: userid,
        babysitter_id: sessionStorage.getItem("userid"),
        target: userid,
      },
    }).then((data) => {
      console.log(data);
      setSuccess(!success);
    });
    setShowModal(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="container bg-white rounded  shadow-lg transform duration-200 easy-in-out w-full  h-screen ">
        <Modal isShowModal={showModal}>
          <div
            id="defaultModal"
            aria-hidden="true"
            className=" fade-in-1 animation-fade w-[100%] bg-white  w3-animate-top z-40 h-[100vh] flex items-center overflow-hidden h-screen top-0 "
          >
            <div className=" w-full h-[90%] max-w-2xl md:h-auto  overflow-hidden">
              <div className=" bg-white rounded-lg  h-screen shadow-xl">
                <div className="flex items-center justify-between p-3  w-[100%]  gap-2">
                  <h3
                    className="text-2xl font-semibold text-gray-900 "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Create Reviews
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                    className="text-gray-600 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4  flex flex-col gap-5 bg-white ">
                  <div className="flex flex-col gap-1">
                    <label className="text-lg font-medium">Comment</label>
                    <textarea
                      type="text"
                      id="message"
                      rows="12"
                      className="bg-gray-200 border-none outline-none h-[20vh]  rounded-lg"
                      placeholder="Write Something"
                      onChange={(e) => {
                        setNewReview((prev) => {
                          return { ...prev, review_details: e.target.value };
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-lg font-medium">Ratings</label>

                    <div className="flex flex-wrap gap-2 w-full justify-center">
                      <div className="flex gap-1 items-center  justify-center  px-4 py-1 rounded-md flex-row-reverse">
                        <i
                          class=" fa-solid fa-star text-2xl text-gray-300 peer peer-hover:text-yellow-500 hover:text-yellow-500"
                          onClick={() => {
                            setNewReview((prev) => {
                              return { ...prev, review_ratings: 5 };
                            });
                          }}
                        ></i>
                        <i
                          class=" fa-solid fa-star text-2xl text-gray-300 peer peer-hover:text-yellow-500 hover:text-yellow-500"
                          onClick={() => {
                            setNewReview((prev) => {
                              return { ...prev, review_ratings: 4 };
                            });
                          }}
                        ></i>
                        <i
                          class=" fa-solid fa-star text-2xl text-gray-300 peer peer-hover:text-yellow-500 hover:text-yellow-500"
                          onClick={() => {
                            setNewReview((prev) => {
                              return { ...prev, review_ratings: 3 };
                            });
                          }}
                        ></i>
                        <i
                          class=" fa-solid fa-star text-2xl text-gray-300 peer peer-hover:text-yellow-500 hover:text-yellow-500"
                          onClick={() => {
                            setNewReview((prev) => {
                              return { ...prev, review_ratings: 2 };
                            });
                          }}
                        ></i>
                        <i
                          class=" fa-solid fa-star text-2xl text-gray-300 peer peer-hover:text-yellow-500 hover:text-yellow-500"
                          onClick={() => {
                            setNewReview((prev) => {
                              return { ...prev, review_ratings: 1 };
                            });
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  {sessionStorage.getItem("type") == "parent" ? (
                    <div className="flex">
                      <button
                        className="p-4 bg-rose-400 text-white text-md rounded-lg w-full  w-[50%]"
                        onClick={submitReview}
                      >
                        Post Now
                      </button>
                    </div>
                  ) : (
                    <div className="flex">
                      <button
                        className="p-4 bg-rose-400 text-white text-md rounded-lg w-full  w-[50%]"
                        onClick={submitReviewParent}
                      >
                        Post Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <div className="absolute top-3 left-3 z-10" onClick={handleBack}>
          <div className="flex rounded-full w-10 h-10 justify-center items-center">
            <i className="fa-solid fa-angle-left text-3xl text-white z-10"></i>
          </div>
        </div>

        <div className="flex w-full flex-col bg-gradient-to-tl from-rose-200 via-rose-300 to-rose-400">
          <div className="flex  w-full flex-col items-center mt-10 gap-3">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl   items-center justify-center text-indigo-500 flex">
              <img
                src={`${SetUp.SERVER_URL()}/${user?.img}`}
                className="rounded-full object-cover h-full w-full border border-white"
              />
            </div>
            <div className="mb-10">
              <h1 className="text-2xl font-medium text-gray-50">
                {`${user.firstname ?? ""} ${user.lastname ?? ""}`}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center -mt-5 bg-white rounded-b rounded-[40px] ">
          <div className="w-full flex justify-center  items-center mb-5 p-3  rounded-b rounded-3xl">
            <div className="w-[95%] flex items-center">
              <ul className="flex gap-4 justify-evenly w-full items-center list text-rose-400">
                <li
                  className="p-2 w-[30%] text-center"
                  onClick={() => {
                    setReviews(true);
                    setDescription(false);
                    setComponent("bio");
                  }}
                >
                  Reviews
                </li>
                <li
                  className="p-2 w-[30%] text-center"
                  onClick={() => {
                    setComponent("reviews");
                  }}
                  style={{ display: user.type == "parent" ? "none" : "block" }}
                >
                  Resume
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {component === "bio" ? (
            <div>
              <BioInfo
                name={`${user.firstname ?? ""} ${user.lastname ?? ""}`}
                address={user.address ?? ""}
              />
              <h1
                className="text-xl font-medium p-2 px-6 border border-gray-200 rounded-t-xl shadow-xl"
                style={{ fontFamily: "Poppins" }}
              >
                Reviews
              </h1>
              <div className="flex flex-col h-full bg-white mb-20 h-[screen] h-[250px] overflow-auto relative">
                {sessionStorage.getItem("userid") != userid ? (
                  <div className="flex justify-end p-2 ">
                    <button
                      className="p-2 bg-rose-400 text-white text-xs rounded-md fixed"
                      style={{
                        display: hireDetails.length != 0 ? "flex" : "none",
                      }}
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      Add Reviews
                    </button>
                  </div>
                ) : (
                  ""
                )}

                {reviewsData
                  .slice(0)
                  .reverse()
                  .map((item) => (
                    <article className="px-5 rounded-lg border-slate-400 mt-2 h-full">
                      <div className="flex items-center mb-4 space-x-4">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={`${SetUp.SERVER_URL()}/${item.img}`}
                          alt=""
                        />

                        <div className="space-y-1 font-medium">
                          <p>
                            {item.firstname}
                            <div className="flex">
                              {item.review_ratings === 1 ? (
                                <div>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                </div>
                              ) : item.review_ratings === 2 ? (
                                <div>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                </div>
                              ) : item.review_ratings === 3 ? (
                                <div>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                </div>
                              ) : item.review_ratings === 4 ? (
                                <div>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-yellow-300"></i>
                                  <i className="fa-solid fa-star text-gray-300"></i>
                                </div>
                              ) : item.review_ratings === 5 ? (
                                <div>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-yellow-500"></i>
                                  <i className="fa-solid fa-star text-yellow-300"></i>
                                  <i className="fa-solid fa-star text-yellow-300"></i>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </p>
                        </div>
                      </div>

                      <footer className="text-sm text-gray-500 dark:text-gray-400">
                        <p>Verified Parent</p>
                      </footer>
                      <p className="font-light text-gray-500 dark:text-gray-400">
                        {item.review_details}.
                      </p>

                      <a
                        href="#"
                        className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Read more
                      </a>
                    </article>
                  ))}
              </div>
            </div>
          ) : (
            <Resume id={userid} />
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={isOpen}
        title="Confirm Application"
        width="w-[90%]"
        height="h-[20vh]"
        handleClose={() => setModalOpen(false)}
      >
        <div className="flex justify-center gap-5 items-center h-screen">
          <button
            className="p-3 px-5 bg-rose-400 text-white rounded-md shadow-md"
            onClick={() => {
              {
                sessionStorage.getItem("application_id")
                  ? axios({
                      method: "put",
                      url: `${SetUp.SERVER_URL()}/application/${sessionStorage.getItem(
                        "application_id"
                      )}`,
                      data: {
                        parent_id: sessionStorage.getItem("userid"),
                        babysitter_id: userid,
                        status: "done",
                      },
                    }).then((data) => {
                      axios({
                        method: "post",
                        url: `${SetUp.SERVER_URL()}/hire`,
                        data: {
                          parent_id: sessionStorage.getItem("userid"),
                          babysitter_id: userid,
                        },
                      }).then((data) => {
                        setModalOpen(false);
                        window.location.href = "/inbox";
                      });
                    })
                  : axios({
                      method: "post",
                      url: `${SetUp.SERVER_URL()}/hire`,
                      data: {
                        parent_id: sessionStorage.getItem("userid"),
                        babysitter_id: userid,
                      },
                    }).then((data) => {
                      setModalOpen(false);
                      setSuccessHire(!isSuccessHire);
                    });
              }
            }}
          >
            Confirm
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

      {sessionStorage.getItem("userid") == userid ||
      sessionStorage.getItem("parent_id") ? (
        ""
      ) : (
        <div
          className="fixed bottom-2  flex w-[90%] justify-center"
          style={{
            display: hireDetails.length == 0 ? "flex" : "none",
          }}
        >
          <button
            className="py-3 px-4  font-medium  w-[70%] bg-rose-500 text-white rounded-lg"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Hire Now
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
