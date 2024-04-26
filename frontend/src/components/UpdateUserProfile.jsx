import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUserProfile = ({ user }) => {
    console.log(user, 777)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Load current user into form when component mounts
        if(user) {
            setFormData({
                username: user.username,
                email: user.email,
                password: '' // Not loading password to maintain security
            });
        }
    }, [user]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`/user/${user._id}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            alert('Woohoo! You updated your profile!');
            navigate('/'); // Navigate back in index
        } catch (error) {
            console.error(`Error updating user's profile:`, error);
            alert('Oops, unable to update your profile... Try again?');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Hmmmm... you sure you wanna delete your profile?')) {
            try {
                await axios.delete(`/user/${user._id}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                alert(`We're sad to see you leave, but your profile was successfully deleted!`);
                // Navigate to index page
                navigate('/');
            } catch (error) {
                console.error(`Error deleting user's profile:`, error);
                alert(`Oops! We couldn't delete your profile for some reason... Please try again`);
            }
        }
    };

    return (
        <div className="update-user-form pt-40 max-w-[600px] mx-auto">
            <h1>Update Your Profile</h1>
            <form onSubmit={handleUpdate}>
                <label className="">
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password (blank field will keep current password):
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Update Profile</button>
            </form>
            <button onClick={handleDelete}>Delete Profile</button>
        </div>
    );
};

export default UpdateUserProfile;
