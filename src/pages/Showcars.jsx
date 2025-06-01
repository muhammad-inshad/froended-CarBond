import { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { Toaster, toast } from 'react-hot-toast';

function ShowCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCars = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/cars"); // Adjust this to your API
      const data = await res.json();
      setCars(data);
    } catch (err) {
      console.error("Failed to fetch cars:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/carsD/${id}`, {
        method: "POST",
      });

      if (res.ok) {
        setCars(cars.filter(car => car._id !== id));
        toast.success("Car deleted successfully.");
      } else {
        toast.error("Failed to delete car.");
      }
    } catch (err) {
      console.error("Error deleting car:", err);
      toast.err("Server error.");
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <AdminNav />
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Car List</h1>
        <Toaster position="top-right" reverseOrder={false} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car._id} className="bg-gray-800 text-white rounded-lg shadow-md p-6 text-center">
            <img
              src={car.image}
              alt={car.name}
              className="w-40 h-24 object-cover mx-auto mb-4 border-2 border-yellow-500 rounded"
              onError={(e) => {
                if (e.target.src !== "https://via.placeholder.com/200x100?text=Car+Image") {
                  e.target.src = "https://via.placeholder.com/200x100?text=Car+Image";
                }
              }}
            />
            <h2 className="text-xl font-bold">{car.name || "Unnamed Car"}</h2>
            <p className="text-gray-300"><strong>Brand:</strong> {car.brand || "N/A"}</p>
            <p className="text-gray-300 mb-4"><strong>Price:</strong> ₹{car.price || "N/A"}</p>
            <button
              onClick={() => handleDelete(car._id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowCars;
