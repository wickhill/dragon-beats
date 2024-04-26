import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img1 from "../assets/vinyl.jpeg";

const UpdateUserProfile = ({ user, setUser }) => {
  console.log(user, 777);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Load current user into form when component mounts
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        password: "", // Not loading password to maintain security
      });
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/user/${user._id}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Profile Updated Successfully.");
      navigate("/"); // Navigate back in index
    } catch (error) {
      console.error(`Error updating user's profile:`, error);
      alert("We were unable to update your profile. Please try again.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      try {
        await axios.delete(`http://localhost:3000/user/${user._id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        alert(
          `We're sad to see you leave. Your profile has been successfully deleted.`
        );
        // Clear token and user info
        localStorage.removeItem('token'); // Remove the token from local storage
        setUser(null); // Reset user state to null
        navigate("/"); // Navigate to index page
      } catch (error) {
        console.error(`Error deleting user's profile:`, error);
        alert(
          `Oops! We couldn't delete your profile for some reason... Please try again`
        );
      }
    }
  };

  return (
    <div className="pt-[0px] relative w-full h-screen bg-zinc-700/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={img1}
        alt="/"
      />
      <div className="flex justify-center items-center h-full">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-8"
          onSubmit={handleUpdate}
        >
          <h1 className="text-4xl font-bold text-center py-6">
            Update Your Profile
          </h1>

          <div className="flex flex-col px-1 py-2 mb-1">
            <label className="">Username:</label>
            <input
              className="border relative bg-gray-100 p-1"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col px-1 py-2 mb-1">
            <label className="">Email:</label>
            <input
              className="border relative bg-gray-100 p-1"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col px-1 py-2 mb-1">
            <label>Password:</label>
            <input
              className="border relative bg-gray-100 p-1"
              type="password"
              name="password"
              placeholder="to keep current password, leave blank"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full py-3 mt-4 bg-gray-400 hover:bg-gray-300 relative"
            type="submit"
          >
            Update Profile
          </button>
        <button className="w-full py-3 mt-4 bg-gray-400 hover:bg-gray-300 relative" onClick={handleDelete}>Delete Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
