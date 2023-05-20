/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {
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

  
  
  const {_id, price, quantity, desc} = details;
  const toyId = _id; 

  console.log(toyId);


  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const desc = form.desc.value;

    const updatedtoy = { quantity, price, desc };

   
    // send data to the server
    fetch(`https://el-server.vercel.app/bookings/${toyId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedtoy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="bg-base-200 w-full">
      <h2 className="text-center text-5xl font-bold pt-16 pb-16">Update Toy</h2>

      <form onSubmit={handleUpdate} className="container mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="desc"
              defaultValue={desc}
              className="input input-bordered"
            />
          </div>
        </div>

        <div className=" mt-6">
          <input onClick={()=> alert("Update Succesfully")}
            className="btn btn-primary btn-block"
            type="submit"
            value="Update Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
