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
    const mail = user?.email;
    const url = form.url.value;
    const toyname = form.toyname.value;

    const selectElement = form.elements.categorySelect;
    const selectedValue = selectElement.value;
    
    const price = parseFloat(form.price.value) ;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const desc = form.desc.value;
    

    const booking = {
      sellerName: name,
      email: email,
      mail,
      url: url,
      toyName: toyname,
      catagory: selectedValue,
      price: price,
      rating: rating,
      quantity: quantity,
      desc: desc,
    };

    fetch("https://el-server.vercel.app/bookings", {
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
      <h2 className="text-center text-5xl font-bold pt-16 pb-16">Add A Toy</h2>

      <form onSubmit={handleBookService} className="container mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              required
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input type="text" name="url" required className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyname"
              required
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
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              required
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
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input type="text" name="desc" required className="input input-bordered" />
          </div>
        </div>

        <div className=" mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default Addtoy;
