import React, { useState, useEffect } from 'react';


const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const id = localStorage.getItem('id');

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user data.');
        }
      })
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [id]);

  
  return (
    <div className='profile'>
      <h1 className='heading2'>Profile Page</h1>
      {user && (

        <div>
          <img src= {user.image} />
          <p>Name: {user.firstName} {user.lastName} </p>
          <p>Age: {user.age} </p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender} </p>
          <p>City: {user.address.city} </p>
          <p>Phone: {user.phone} </p>
          </div>
      )}

    </div>
  );
};

export default ProfilePage;



