// context/UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Register user
  const registerUser = async (formData) => {
    try {
      const res = await fetch("https://backend-carbond-1.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setUser(data); // save user data in context
        console.log("User registered:", data);
      } else {
        console.error("Registration failed:", data.message);
      }
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

 

  return (
    <UserContext.Provider value={{ user, setUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
