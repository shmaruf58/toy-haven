/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

const Addtoy = () => {
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.url.value;
    const toyname = form.toyname.value;

    const selectElement = form.elements.categorySelect;
    const selectedValue = selectElement.value;

    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const desc = form.desc.value;

    const booking = {
      sellerName: name,
      email: email,
      url: url,
      toyName: toyname,
      catagory: selectedValue,
      price: price,
      rating: rating,
      quantity: quantity,
      desc: desc, 
    };

    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Add toy successfully");
        }
      });
  };

  return (
    <div className="bg-base-200 w-full">
      <h2 className="text-center text-5xl font-bold pt-16 pb-16">
        Add A Toy
      </h2>

      <form onSubmit={handleBookService} className="container mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>

            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input type="text" name="url" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyname"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-12  mx-2">
            <select name="categorySelect" className="select select-bordered">
              <option disabled selected>
                Pick category
              </option>
              <option>Sports Car</option>
              <option>Truck</option>
              <option>Police Car</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="number" name="rating" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input type="text" name="desc" className="input input-bordered" />
          </div>
        </div>

        <div className=" mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Addtoy;
