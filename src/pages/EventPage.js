import React, { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import "./EventPage.css";

function EventPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8004/event/${params.individualevent}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    setIsLoading(false);

  }, [params.individualevent]);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="event-page">
      <div className="back-button">
        <button className="go-back-button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      <div className="event-card">
        <div key={data.id}>
          <img className="event-photo" src={data.picture} alt={data.title} />
          <div className="event-card-content">
            <h2>{data.title}</h2>
            <div className="basic-info"> <p>{data.info}</p> </div>
            <div className="main-info">
              <p>Date: {data.date && data.date.date}</p>
              <p>Time: {data.time && data.time.date}</p>
              <p>Duration: {data.duration} hrs</p>
              <p>Venue: {data.location} <span><NavLink to={`https://www.google.com/maps/place/${data.location}`}>↗️</NavLink></span></p>
              <p>Transportation: {data.transport}</p>
            </div>

          </div>
        </div >
      </div >
      <p>Sign up to recieve updates about this event</p>
      <SignUpForm />
    </div >
  );
}

export default EventPage;