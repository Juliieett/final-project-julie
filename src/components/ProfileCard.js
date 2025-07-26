import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../App'; 
import './ProfileCard.css'; 

const ProfileCard = () => {
    const { user, setUser } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: user.name || '',
        email: user.email || '',
        age: user.age || '',
        photo: user.photo || ''
    });

    useEffect(() => {
        const savedUserData = localStorage.getItem('user');
        if (savedUserData) {
            const parsedUserData = JSON.parse(savedUserData);
            setFormData(parsedUserData);
        }
    }, []);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({
                ...formData,
                photo: reader.result
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData);
        localStorage.setItem('user', JSON.stringify(formData));
    };

    return (
        <div className="profile-card">
            <h2>Profile</h2>
            {formData.photo && (
                <div className="profile-photo-wrapper">
                    <img src={formData.photo} alt="Profile" className="profile-photo" />
                </div>
            )}
            <div className="user-details">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Age:</strong> {formData.age}</p>
            </div>
            <form onSubmit={handleSubmit} className="user-form">
                <div className="form-group">
                    <label>Profile Photo:</label>
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={handlePhotoChange} 
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default ProfileCard;
