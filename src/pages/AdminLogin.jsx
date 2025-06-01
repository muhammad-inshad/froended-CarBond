import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handle = async (e) => {
  e.preventDefault();
  const loginData = { name, password };

  try {
    const response = await fetch("http://localhost:5000/api/AdminLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("✅ Login successful:", result);

      // Save token in localStorage
      localStorage.setItem("token", result.token);

      // Optional: save user info
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/add-car"); // go to home page
    } else {
      console.error("❌ Login failed:", result.message);
      navigate("/"); // or wherever
    }
  } catch (err) {
    console.error("❌ Error while logging in:", err);
    alert("Something went wrong. Please try again later.");
  }

  setname("");
  setPassword("");
};


  return (
    <div className="add-car-container">
      <h1 className="add-car-title">Login</h1>
      <form className="add-car-form" onSubmit={handle}>
        <div>
          <label>name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
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
    </div>
  );
}

export default AdminLogin;
