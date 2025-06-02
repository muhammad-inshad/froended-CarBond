import { useEffect, useState } from "react";
import AdminNav from "../pages/AdminNav";
import { Toaster, toast } from 'react-hot-toast';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://backend-carbond-1.onrender.com/api/users"); // adjust URL as needed
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  console.log("useEffect triggered");
  fetchUsers();
}, []);


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(`https://backend-carbond-1.onrender.com/api/users/${id}`, {
        method: "POST",
      });

      if (res.ok) {
        setUsers(users.filter(user => user._id !== id));
        toast.success("User deleted successfully.");
      } else {
        toast.error("Failed to delete user.");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      toast.error("Server error.");
    }
  };

  if (loading) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <AdminNav/>
      <h1>l</h1>
      <h1 className="text-3xl font-bold text-white mb-8 text-center">User List</h1>
        <Toaster position="top-right" reverseOrder={false} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="bg-gray-800 text-white rounded-lg shadow-md p-6 text-center">
       <img
  src={user.image}
  alt={user.name}
  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500 object-cover"
  onError={(e) => {
    if (e.target.src !== "https://via.placeholder.com/150?text=User+Image") {
      e.target.src = "https://via.placeholder.com/150?text=User+Image";
    }
  }}
/>



            <h2 className="text-xl font-bold">{user.name || "No Name"}</h2>
            <p className="text-gray-300"><strong>Email:</strong> {user.email || "N/A"}</p>
            <p className="text-gray-300 mb-4"><strong>Phone:</strong> {user.phone || "N/A"}</p>
            <button
              onClick={() => handleDelete(user._id)}
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

export default UserList;
