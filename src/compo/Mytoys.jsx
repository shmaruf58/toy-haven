/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./providers/AuthProvider";
import BookingRow from "./BookingRow";

const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  

  const url = `https://el-server.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`https://el-server.vercel.app/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
    }
}

  return (
    <div>
      <div className="overflow-x-auto container mx-auto mt-6 mb-6">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr className="text-center">
              <th>Seller Name</th>
              <th>Email</th>
              <th>Toy Name</th>
              <th>Sub Catagory</th>
              <th>Price</th>
              <th>Availabe Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                 handleDelete={handleDelete}
                // handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mytoys;
