import React, { useState } from "react";
import Navbar from "../components/Navbar";

import axios from "axios";

import "./AddEvent.css";

function AddEvent() {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [picture, setPicture] = useState("");
  const [location, setLocation] = useState("");
  const [transport, setTransport] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/events", {
        title,
        info,
        date,
        time,
        duration,
        location,
        transport,
        picture,
      });
      alert("Event has been added successfully.");
      console.log("Event added:", response.data);
      setTitle("");
      setInfo("");
      setDate("");
      setTime("");
      setDuration("");
      setLocation("");
      setTransport("");
      setPicture("");
    } catch (error) { }
  };

  return (
    <div>
      <Navbar />
      <div className="add-event-container">
        <h1>Add Event</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="info">Event Information:</label>
            <textarea
              id="info"
              value={info}
              onChange={(event) => setInfo(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <textarea
              id="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <textarea
              id="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="duration">Duration:</label>
            <textarea
              id="duration"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <textarea
              id="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="transport">Transport:</label>
            <textarea
              id="transport"
              value={transport}
              onChange={(event) => setTransport(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="picture">Picture:</label>
            <input
              type="text"
              id="picture"
              value={picture}
              onChange={(event) => setPicture(event.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;