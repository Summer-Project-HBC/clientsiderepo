import React from "react";
import { Link } from "react-router-dom";

import "./EventCard.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img className="event-photo" src={event.picture} alt={event.picture} />
      <div className="event-card-content">
        <div className="title"><h2>{event.title}</h2></div>
        <div className="description">
          <p>Address: {event.location}</p>
          <p>Date: {event.date.date.slice(0, 10)}</p>

          <Link to={`/browse/${event.id}`} className="event-link">
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;