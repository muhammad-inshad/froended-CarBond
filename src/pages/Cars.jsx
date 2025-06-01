import { useCarContext } from "../context/carContext";
import Navbar from '../../src/pages/Navbar';
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

function Cars() {
  
  const { cars, loading } = useCarContext();
  const navigate = useNavigate();

  const handleViewDetails = (carId) => {
    const token = localStorage.getItem("token");
    if (!token) {
     toast.error("Please login to view car details."); 
       setTimeout(() => {
    navigate("/Login");
  }, 1500);
    } else {
      navigate(`/cars/${carId}`);
    }
  };

  if (loading) return <p>Loading cars...</p>;

  return (
    <div className="cars-container">
      <Navbar />
     
      <h2 className="cars-title animate-fadeInUp">Our Vehicle Collection</h2>
       <Toaster position="top-right" reverseOrder={false} />
      <div className="cars-grid">
        {cars.map((car) => (
          <div key={car._id || car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <button className="car-button" onClick={() => handleViewDetails(car._id)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
