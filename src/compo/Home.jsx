
import logo from "../assets/logo-removebg-preview.png"
const Home = () => {
    return (
    <>
     <div>

        {/* Banner Section */}

        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col gap-16 lg:flex-row">
    <img src={logo}className="max-w-sm rounded-lg w-full h-auto  shadow-2xl" />
    <div>
      <h1 className="text-5xl  font-bold md:px-0 px-6">Toy Haven: Your Ultimate Toy Marketplace </h1>
      <p className="py-6 md:px-0 px-6">Experience the joy of play at Toy Haven - your ultimate destination for a world of toys. Discover, imagine, and create unforgettable memories with our diverse collection.</p>
      <button className="btn btn-primary md:mx-0 mx-6">Get Started</button>
    </div>
  </div>
</div>




    </div>

    </>
    );
};

export default Home;