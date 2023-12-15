import React, { useState } from 'react';

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState({
        username: 'Sandhya',
        fullName: 'Sandhya Kumari',
        email: 'sandhyakushwaha543@gmail.com',
        bio: 'A passionate individual interested in frontend development.',
        profilePicture: 'image/sandhya.jpg',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    return (
        <div className="user-profile">
            <img
                src={userInfo.profilePicture}
                alt="Profile"
                className="profile-picture"
            />
            <div>
                <h2>{userInfo.fullName}</h2>
                <p>{userInfo.bio}</p>
                <p className='userInfo'>
                    <strong>Username:</strong> {userInfo.username}
                </p>
                <p>
                    <strong>Email:</strong> {userInfo.email}
                </p>
                {isEditing ? (
                    <div className='userEditConatiner'>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={userInfo.username}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="bio">Bio:</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={userInfo.bio}
                            onChange={handleChange}
                        />
                    </div>
                ) : null}
            </div>
            <div>
                {isEditing ? (
                    <button onClick={handleSaveClick}>Save</button>
                ) : (
                    <button onClick={handleEditClick}>Edit Profile</button>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
