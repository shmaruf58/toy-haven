import { Link } from "react-router-dom";

const CoffeCard = ({ coffee }) => {
  const { sellerName, _id, toyName, quantity, price, catagory } = coffee;
  return (
    <tr className="text-center">
      <th>{sellerName}</th>
      <td>{toyName}</td>
      <td>{catagory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
   <Link to={`/toydetails/${_id}`}>
   <button className="btn btn-primary mt-1">View Details</button>
   </Link>
      

    </tr>
  );
};

export default CoffeCard;
