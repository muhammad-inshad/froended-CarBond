import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handle = async (e) => {
  e.preventDefault();
  const loginData = { email, password };

  try {
    const response = await fetch("https://backend-carbond-1.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("✅ Login successful:", result);
      toast.success("Login successful!");
      // Save token in localStorage
      localStorage.setItem("token", result.token);

      // Optional: save user info
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/"); // go to home page
    } else {
    
      toast.error("Please Create Account");
      console.error("❌ Login failed:", result.message);
        setTimeout(() => {
        navigate("/Singin"); 
      }, 1500);
      // or wherever
    }
  } catch (err) {
    console.error("❌ Error while logging in:", err);
 
  }

  setEmail("");
  setPassword("");
};


  return (
    <div className="add-car-container">
      <h1 className="add-car-title">Login</h1>
       <Toaster position="top-right" reverseOrder={false} />
      <form className="add-car-form" onSubmit={handle}>
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
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>have no account?</p>
<button className='addbtn' onClick={() => navigate('/Singin')}>Signin</button>
    </div>
  );
}

export default Login;
