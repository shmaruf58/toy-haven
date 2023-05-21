import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toytable from "./Toytable";


const Alltoy = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (<>
  
  <div className="overflow-x-auto container mx-auto mt-6 mb-6">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr className="text-center">
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub Catagory</th>
        <th>Price</th>          
        <th>Availabe Quantity</th>          
        <th>Details</th>          
      </tr>
    </thead>
    <tbody >
      {/* row 1 */}
     
      {coffees.map((coffee) => (
              <Toytable
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              ></Toytable>
            ))}
    
    </tbody>
  </table>
</div>

</>
   
        

            
    
  );
};

export default Alltoy;
    