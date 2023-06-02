import React from "react";
import { Link } from "react-router-dom";

import "./EventCard.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img className="event-photo" src={event.picture} alt={event.picture} />
      <div className="event-card-content">
        <h2>{event.title}</h2>
        <p>{event.location}</p>
        <p>{event.date.date}</p>
        <Link to={`/event/${event.id}`}>
          View Event
        </Link>
      </div>
    </div>
  );
}

export default EventCard;