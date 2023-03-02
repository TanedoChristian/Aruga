import React, { useState, useEffect } from "react";
import axios from "axios";
import SetUp from "../Setup";

const useFetchApi = (endpoint) => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: endpoint,
    }).then(({ data }) => {
      setData(data);
    });
  }, [endpoint]);

  return { datas };
};

export default useFetchApi;
