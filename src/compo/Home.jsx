import logo from "../assets/logo-removebg-preview.png";
import img1 from "../assets/gettyimages-1148668425.jpg";
import img2 from "../assets/gettyimages-smolaw11_640x420.jpg";
import img3 from "../assets/crafts-hobby-miniature-cars.jpg";
import img4 from "../assets/mini-cooper-auto-model-vehicle.jpg";
import img5 from "../assets/pexels-photo-2767818.jpeg";
import img6 from "../assets/photo-1520575839349-52ff2532d910.jpg";
import Extra from "./Extra";
import Subcat from "./Subcat";
const Home = () => {
  return (
    <>
      {/* Banner Section */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-16 lg:flex-row">
          <img
            src={logo}
            className="max-w-sm rounded-lg w-full h-auto  shadow-2xl"
          />
          <div>
            <h1
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="text-5xl  font-bold md:px-0  px-6"
            >
              Toy Haven: Your Ultimate Toy Car Emporium Extravaganza
            </h1>
            <p className="py-6 md:px-0 px-6">
              Experience the joy of play at Toy Haven - your ultimate
              destination for a world of toys. Discover, imagine, and create
              unforgettable memories with our diverse collection.
            </p>
            <button className="btn btn-primary md:mx-0 mx-6">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Extra section */}
      <div className="container mx-auto w-full pt-16 pb-16">
        <Extra></Extra>
      </div>

      {/* Sub catagory */}
      <div className="container w-full  mx-auto">
        <h1 className="text-4xl ps-5 font-bold">Shop By Catagory</h1>
        <Subcat></Subcat>
      </div>

      {/* Gallery Section */}
      <div className="container w-full  mx-auto mt-5 mb-16">
        <h1 className="text-5xl  font-bold text-center pt-5 pb-16">
          Our Gallery
        </h1>

        <div className=" grid grid-cols md:grid-cols-3 gap-4  px-3">
          <img
            className="h-64 w-full rounded-2xl shadow-2xl "
            src={img1}
            alt=""
          />
          <img
            className="h-64 w-full rounded-2xl shadow-2xl "
            src={img2}
            alt=""
          />
          <img
            className="h-64 w-full rounded-2xl shadow-2xl "
            src={img3}
            alt=""
          />
          <img
            className="h-64 w-full rounded-2xl shadow-2xl "
            src={img4}
            alt=""
          />
          <img
            className="h-64 w-full rounded-2xl shadow-2xl "
            src={img5}
            alt=""
          />
          <img
            className="h-64 w-full rounded-2xl shadow-2xl "
            src={img6}
            alt=""
          />
        </div>
      </div>

      {/* About Us Section */}

      <section className="bg-gray-100 w-full  py-12">
        <div className="container mx-auto px-4">
          <h2
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-5xl font-bold text-gray-800 mb-4"
          >
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            At Toy Haven, we believe in the power of play and its ability to
            shape the world of children. With a passion for bringing joy and
            imagination to kids of all ages, we have curated a diverse
            collection of toys that inspire creativity, learning, and endless
            fun. Our dedicated team is committed to providing exceptional
            quality, safety, and memorable experiences through our carefully
            selected range of toys. Join us on this magical journey of play,
            where every childs happiness is our ultimate goal.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="p-4 bg-white rounded shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To enrich the lives of children by offering a wide range of toys
                that foster creativity, learning, and joyful experiences.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="p-4 bg-white rounded shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                We ensure that all our toys undergo rigorous testing and meet
                strict safety standards for the well-being of children.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
