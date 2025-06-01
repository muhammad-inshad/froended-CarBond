import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../context/userContext';
import { Toaster, toast } from 'react-hot-toast';

function Singin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const { registerUser } = useUserContext();

  const handle = (e) => {
    e.preventDefault();
    const setData = { name, email, phone, password, image };
    toast.success("singin successful!")
    registerUser(setData);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setImage("");
    navigate('/Login');
  };

  return (
    <div className="add-car-container">

      <h1 className="add-car-title animate-fadeInUp">Sign In</h1>
           <Toaster position="top-right" reverseOrder={false} />
      <form className="add-car-form" onSubmit={handle}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Photo URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <p>Already have an account?</p>
      <button className="addbtn" onClick={() => navigate('/Login')}>Login</button>
    </div>
  );
}

export default Singin;
