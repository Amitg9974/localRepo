// Profile.js
import React from 'react';

function Profile() {
  const storedData = localStorage.getItem('formData');
  const userData = storedData ? JSON.parse(storedData) : {};

  return (
    <div>
      <h1>Profile Page</h1>
      {/* Display user details */}
      <p>Firstname: {userData.firstName}</p>
      <p>Lastname: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Gender: {userData.gender}</p>
    </div>
  );
}

export default Profile;
