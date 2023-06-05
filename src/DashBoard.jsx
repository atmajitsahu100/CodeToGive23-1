import React, { useEffect, useState } from 'react';
import './dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users'); 
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">User Dashboard</h2>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-details">
                Father's Name: <span>{user.fatherName}</span>
              </p>
              <p className="user-details">
                Mother's Name: <span>{user.motherName}</span>
              </p>
              <p className="user-details">
                Phone Number: <span>{user.phoneNumber}</span>
              </p>
              <p className="user-details">
                Past Diseases: <span>{user.pastDiseases}</span>
              </p>
              <p className="user-details">
                Education: <span>{user.education}</span>
              </p>
              <p className="user-details">
                Sessions Attended: <span>{user.sessionsAttended}</span>
              </p>
              <p className="user-details">
                Progress: <span>{user.progress}</span>
              </p>
              <p className="user-details">
                Community: <span>{user.community}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
