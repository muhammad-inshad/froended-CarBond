import Navbar from '../../src/pages/Navbar';
function Home() {
  // Sample car data for the loop
  const cars = [
    {
      id: 1,
      name: "Luxury Sedan",
      price: "$45,000",
      image: "https://i.pinimg.com/736x/77/82/2e/77822e68cffd2882dcf15eb403152bcb.jpg",
    },
    {
      id: 2,
      name: "Family SUV",
      price: "$35,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNalbItCITVNGGR-JjH75X9X9IbpH7CVFhw&s",
    },
    {
      id: 3,
      name: "Sports Coupe",
      price: "$55,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSol5Yb_GGLcEkjvleIQNB_B1HxSnIWAoJuGg&s",
    },
    {
      id: 4,
      name: "Electric Hatchback",
      price: "$40,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6Kd089Sfr2MsKOpOnf6vHMuKc_UurTyKWA&s",
    },
  ];

  return (
    <div>
    <Navbar/>
      <div className="home-main-div">
        <img
          src="https://img.freepik.com/premium-photo/white-floor-new-car-parking-new-car-pictures-showroom-park-show-waiting-sales_926199-1970770.jpg"
          alt="Car showcase"
          className="home-image"
        />
        <div className="bg-gradient-overlay"></div>
        <div className="home-second-div">
          <h1 className="animate-fadeInUp">Welcome to CarBond </h1>
          <p className="animate-fadeInUp delay-100">
            You've Come to the Right Place!
          </p>
          <p className="animate-fadeInUp delay-200">
            At our car dealership, we make buying your dream car simple and
            stress-free. Whether you're looking for a reliable family SUV, a sleek
            luxury sedan, or a powerful truck, we offer an extensive selection of
            quality vehicles to match every need and budget.
          </p>
          <button className="animate-fadeInUp delay-300">
            Explore Our Collection
          </button>
        </div>
      </div>
      <div className="show-somecar">
        <h2 className="show-somecar-title">Featured Vehicles</h2>
        <div className="car-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card animate-fadeInUp">
              <img src={car.image} alt={car.name} className="car-image" />
              <h3>{car.name}</h3>
              <p>{car.price}</p>
              <button className="car-button">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;