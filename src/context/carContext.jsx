import { createContext, useContext, useState, useEffect } from "react";

const CarContext = createContext();

// Custom hook
export const useCarContext = () => useContext(CarContext);

// Provider component
export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cars from backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/cars");
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.error("Failed to fetch cars from backend:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const addCar = async (car) => {
    try {
      const res = await fetch("http://localhost:5000/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
      });

      const newCar = await res.json();
      setCars((prevCars) => [...prevCars, newCar]);
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };
 


  return (
    <CarContext.Provider value={{ cars, addCar, loading }}>
      {children}
    </CarContext.Provider>
  );
};
