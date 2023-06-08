import React from "react";
import { Link } from "react-router-dom";

import "./EventCard.css";

function EventCard({ event }) {
  return (
    <div className="event">
      <div className="event-card">
        <div>
          <img className="event-photo" src={event.picture} alt={event.picture} />
        </div>
        <div className="event-card-content">
          <h2>{event.title}</h2>
          <p>Address: {event.location}</p>
          <p>Date: {event.date}</p>
          <Link to={`/browse/${event.id}`} className="event-link">
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;