import { useState } from "react";
import { useCarContext } from "../../src/context/carContext";
import AdminNav from "../pages/AdminNav";
import { Toaster, toast } from 'react-hot-toast';

function AddCar() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [make, setMake] = useState("");
  const [owner, setOwner] = useState("");

  const { addCar } = useCarContext();

  const handleSubmission = (e) => {
    e.preventDefault();
    const newCar = {
      name,
      brand,
      price: Number(price),
      year: Number(year),
      image,
      make: Number(make),
      owner: Number(owner),
    };
    toast.success("car added successfully")
    addCar(newCar);
    setName("");
    setBrand("");
    setPrice("");
    setYear("");
    setImage("");
    setMake("");
    setOwner("");
  };

  return (
    <div className="add-car-container">
      <AdminNav/>
      <h1 className="add-car-title animate-fadeInUp">Add a New Car</h1>
       <Toaster position="top-right" reverseOrder={false} />
      <form className="add-car-form" onSubmit={handleSubmission}>
        <div>
          <label>Car Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Make</label>
          <input
            type="number"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Owner</label>
          <input
            type="number"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;
