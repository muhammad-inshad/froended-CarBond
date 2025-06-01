import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/cars">Cars</Link> | 

      {!token ? (
        <>
          <Link to="/Login">Login</Link>
        </>
      ) : (
        <> 
       
          <button onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.reload(); // or use navigate("/")
          }} className="car-button">
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
