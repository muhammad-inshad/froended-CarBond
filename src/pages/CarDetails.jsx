import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch car details by ID
    const fetchCar = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/cars/${id}`);
        const data = await res.json();
        setCar(data);
      } catch (err) {
        console.error("Failed to fetch car:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-2xl font-semibold text-gray-600 animate-pulse">
        Loading...
      </div>
    </div>
  );

  if (!car) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-2xl font-semibold text-red-500">
        Car not found.
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:shadow-2xl">
        <div className="w-full h-64 mb-6">
          <img 
            src={car.image} 
            alt={`${car.make} ${car.model}`} 
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => (e.target.src = "https://via.placeholder.com/400x240?text=Car+Image")} 
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {car.name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-lg font-semibold text-gray-700">Make:</span>
            <span className="text-lg text-gray-600">{car.make}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-lg font-semibold text-gray-700">Year:</span>
            <span className="text-lg text-gray-600">{car.year}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-lg font-semibold text-gray-700">Price:</span>
            <span className="text-lg text-green-600 font-medium">₹{car.price}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-lg font-semibold text-gray-700">Brand:</span>
            <span className="text-lg text-gray-600">{car.brand}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-lg font-semibold text-gray-700">Owner:</span>
            <span className="text-lg text-gray-600">{car.owner}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-lg font-semibold text-gray-700">Pone</span>
            <span className="text-lg text-gray-600">7025034758</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;