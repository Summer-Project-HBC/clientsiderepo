import React from 'react';
import { Link } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
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
          <div className='card'>First event</div>
          <div className='card'>First event</div>
          <div className='card'>First event</div>
          <div className='card'>First event</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;