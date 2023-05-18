/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel,  } from 'react-tabs';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from './providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';

const Subcat = () => {

  
    
   
    return (
        <div className="container mx-auto px-4 py-8">
      <Tabs>
        <TabList className="flex mb-4">
          <Tab className="mr-4 px-4 py-2 bg-gray-200 rounded-md cursor-pointer">
           Sports car
          </Tab>
          <Tab className="mr-4 px-4 py-2 bg-gray-200 rounded-md cursor-pointer">
          Truck
          </Tab>
          <Tab className="mr-4 px-4 py-2 bg-gray-200 rounded-md cursor-pointer">
          Police car
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl font-bold mb-4">Sports car</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Display Math toy items */}
            <ToyItem
              pictureUrl="https://www.littleriders.com.au/assets/alt_1/DK-M720S-R.jpg?20230419134613"
              name="Red Sports Car"
              price="$19.99"
              rating="4.5"
              carId ="1"
            />
            <ToyItem
              pictureUrl="https://pbs.twimg.com/media/DSnxkXlXkAA2QZG?format=jpg&name=4096x4096"
              name="Yellow Race Car"
              price="$24.99"
              rating="4.2"
            />
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-xl font-bold mb-4">Truck</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Display Language toy items */}
            <ToyItem
              pictureUrl="https://media.istockphoto.com/id/854489964/photo/blue-rc-off-road-truck-car-standing-on-the-rock-and-terrain-sand-dune.jpg?s=170667a&w=0&k=20&c=PSzFcAIkg4HHrOe48I82Tdo3h3O9VtfJU3dz89JtzrM="
              name="Blue Off-Road Truck"
              price="$14.99"
              rating="4.0"
            />
            <ToyItem
              pictureUrl="https://m.media-amazon.com/images/I/81qWVht4UKL._SX425_.jpg"
              name="Green Monster Truck"
              price="$19.99"
              rating="4.8"
            />
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-xl font-bold mb-4">Police Car</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Display Engineering toy items */}
            <ToyItem
              pictureUrl="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/63139/baby-police-car-4398817722.jpg"
              name="Patrol Pursuit"
              price="$29.99"
              rating="4.6"
            />
            <ToyItem
              pictureUrl="https://m.media-amazon.com/images/I/713bxmz12RL.jpg"
              name="Justice Cruiser"
              price="$34.99"
              rating="4.3"
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
    );
};

const ToyItem = ({ pictureUrl, name, price, rating, carId  }) => {
  const { user} = useContext(AuthContext);

  const notify = () =>

  {{ !user?.email ?  
   
    toast("You have to log in first to view details")
  
  : ""
 }}
  
  

    return (
      <div className="border rounded-md p-4">
        <img
          src={pictureUrl}
          alt={name}
          className="w-1/2 h-auto object-contain"
        />
        <h3 className="text-lg font-bold mt-2">{name}</h3>
        <p className="text-gray-600 mb-2">Price: {price}</p>
        <p className="text-gray-600 mb-2">Rating: {rating}</p>


<Link to="">
        <button onClick={notify} className="bg-blue-500 text-white py-2 px-4 rounded-md">
          View Details
        </button>
        <ToastContainer />

        </Link>

      </div>
    );
  };

export default Subcat;