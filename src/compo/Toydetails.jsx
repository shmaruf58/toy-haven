/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Toydetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      const newData = data.find((pd) => pd._id === id);
      setDetails(newData);
    } else {
      setDetails(newData);
    }
  }, []);

  console.log(details);

  return (
    <div className="pt-16 mt-16">
      <h1>{details.sellerName}</h1>
      <h1>hello</h1>
    </div>
  );
};

export default Toydetails;
