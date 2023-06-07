import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe'
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
        const upcomingEvents = data.filter(event => new Date(event.date) > currentDate);
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
          <Link to="/browse">Browse Events</Link>
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
                <p>Date: {event.date}</p>
              </div>
              <div className='navigate'>
                <Link to={`/browse/${event.id}`}>See more</Link>
              </div>
            </div>
          ))}
        </div>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.743349042564!2d24.93296521610765!3d60.20153018197249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920991ece823df%3A0xd4b4f30731ef9db7!2sBusiness%20College%20Helsinki!5e0!3m2!1sen!2sfi!4v1686125175991!5m2!1sen!2sfi" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
      </div>
    </div>
  );
};

export default HomePage;