import React from 'react';
import './ProfileCard.css';

function ProfileCard() {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="profile-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLtgqeEzn13fhA0Cg5bIsm1sOJTyvNagwUA&s" alt="Profile" />
                </div>
            </div>
            <div className="profile-info">
                <h2>Ankit Rawat</h2>
                <p>Dehradun, India</p>
            </div>
            <div className="profile-stats">
                <div>
                    <h3>0</h3>
                    <p>Followers</p>
                </div>
                <div>
                    <h3>0</h3>
                    <p>Likes</p>
                </div>
                <div>
                    <h3>3</h3>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
