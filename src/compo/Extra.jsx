

const Extra = () => {
 
   
    return (
 <>
        <div data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000"><h1 className="text-5xl font-bold text-center pb-16">What We Are?</h1></div>

        <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3">
      <div className="p-4 bg-white rounded shadow flex items-center">
        <div className="mr-4">
          <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
          <p className="text-gray-600">Explore a vast collection of toys from various categories and find the perfect one for your child.</p>
        </div>
       
      </div>
      <div className="p-4 bg-white rounded shadow flex items-center">
        <div className="mr-4">
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Safe and Reliable</h3>
          <p className="text-gray-600">Rest assured knowing that all toys on Toy Haven undergo rigorous safety checks and meet quality standards.</p>
        </div>
        
      </div>
      <div className="p-4 bg-white rounded shadow flex items-center">
        <div className="mr-4">
          <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Seamless Shopping</h3>
          <p className="text-gray-600">Enjoy a hassle-free shopping experience with easy navigation, secure transactions, and quick delivery.</p>
        </div>
       
      </div>
    </div>
    </>
    );
    
};

export default Extra;