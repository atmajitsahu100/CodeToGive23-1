import React, { useState, useEffect } from 'react';
import './UpcomingSessions.css';

const UpcomingSessions = () => {
  const [upcomingSessions, setUpcomingSessions] = useState([]);

  useEffect(() => {
    // Simulating data fetching from the database
    const fetchUpcomingSessions = () => {
      const dummyData = [
        {
          id: 1,
          title: 'Session 1',
          date: '2023-06-10',
          location: 'Conference Room A',
        },
        {
          id: 2,
          title: 'Session 2',
          date: '2023-06-12',
          location: 'Conference Room B',
        },
        {
          id: 3,
          title: 'Session 3',
          date: '2023-06-15',
          location: 'Conference Room C',
        },
      ];
      setUpcomingSessions(dummyData);
    };

    fetchUpcomingSessions();
  }, []);

  return (
    <div className="upcoming-sessions-container">
      {upcomingSessions.length === 0 ? (
        <p className="no-events-message">No upcoming events</p>
      ) : (
        
        <ul className="upcoming-events-list">
            <div className="heading1">
            <h2>Upcoming Sessions</h2>
            </div>
          {upcomingSessions.map((session) => (
            <li key={session.id} className="event-item">
              <h3>{session.title}</h3>
              <p>{session.date}</p>
              <p>{session.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingSessions;
