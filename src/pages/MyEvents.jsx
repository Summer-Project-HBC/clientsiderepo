import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './MyEvents.css'
import EventCard from "../components/EventCard";

export default function MyEvents(props) {
  const [myevents, setMyEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMyEvents()
    setIsLoading(false);
  }, []);

  const fetchMyEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:8004/myevents/${props.loginData.userid}`)
      setMyEvents(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
      <div className="myevent-page-container">
        <div className="myevent-container">
          <h1>My Events</h1>

          {myevents
            .filter((event) =>
              event.title.toLowerCase()
            )
            .map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
        </div>
      </div>
  )
}