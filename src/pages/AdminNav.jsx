import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

function AdminNav() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <nav className="flex gap-4 items-center p-4 bg-gray-800 text-white">
         <Toaster position="top-right" reverseOrder={false} />
      <Link to="/add-car" className="hover:underline">Add Car</Link>|
      <Link to="/Viewuser" className="hover:underline">Users</Link>|
        <Link to="/showcars" className="hover:underline">cars</Link>|
      {token && (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
             toast.success("logout successful!")
             setTimeout(()=>{
                     navigate('/')
             },1500)
           
          }}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      )}
    </nav>
  );
}

export default AdminNav;
