import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8004/event")
      .then((response) => response.json())
      .then((data) => {
        const currentDate = new Date();
        const upcomingEvents = data.filter(event => new Date(event.date.date) > currentDate);
        setEvents(upcomingEvents);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="home-page-container">
      <div className="hero-banner">
        <div className='link-events'>
          <Link to="/event">Browse Events</Link>
        </div>
      </div>
      <div className="card-container">
        <div>
          <h2>Upcoming Events</h2>
        </div>

        <div className='event-container'>
          {events.map((event, index) => (
            <div className='card' key={index}>
              <img className="event-photo" src={event.picture} alt={event.title} />
              <div className='info'>
                <p> {event.title}</p>
                <p>Venue: {event.location}</p>
                <p>Date: {event.date.date.slice(0, 10)}</p>
              </div>
              <div className='navigate'>
                <Link to={`/event/${event.id}`}>See more</Link>
                <button>Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;