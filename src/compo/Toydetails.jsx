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
  }, [id, data]);



  return (
     
     <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col lg:flex-row-reverse">
       <img className="w-96 rounded-2xl" src={details.url} />
       <div>
         <h1 className="text-5xl font-bold">{details.toyName}</h1>
         <p className="py-6 font-semibold text-gray-600">{details.desc}</p>
         <p className="py-1 font-semibold text-gray-600">
           Name: {details.sellerName}
         </p>
         <p className="py-1 font-semibold text-gray-600">
           Email: {details.email}
         </p>
         <p className="pb-4 pt-1 font-semibold text-gray-600">
           price: ${details.price}
         </p>
         <p className="pb-4 pt-1 font-semibold text-gray-600">
           Rating: {details.rating} out of 10
         </p>
        
         <p className="pb-4 pt-1 font-semibold text-gray-600">
           Catagory: {details.catagory}
         </p>
         <p className="pb-4 pt-1 font-semibold text-gray-600">
           Availabe Quantity: {details.quantity}
         </p>
         <button className="btn btn-primary">Get Started</button>
       </div>
     </div>
   </div>
  );
};

export default Toydetails;
