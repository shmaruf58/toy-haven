/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


const BookingRow = ({booking, handleDelete}) => {
    const { sellerName,  email, _id, toyName, quantity, desc, price, catagory } = booking;
   
    return (
        
        <tr className="text-center">
        <th>{sellerName}</th>
        <th>{email}</th>
        <td>{toyName}</td>
        <td>{catagory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>{desc}</td>
    <td><Link to={`/updatetoy/${_id}`}>
     <button className="btn btn-primary mt-1">Update</button>
     </Link></td> 
     <td>
     <button onClick={() => handleDelete(_id)} className="btn btn-primary mt-1">Delete</button>
     </td>
        
  
      </tr>
    );
};

export default BookingRow;