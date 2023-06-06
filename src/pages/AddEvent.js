import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "./AddEvent.css";
import { useNavigate } from "react-router";

function AddEvent() {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({...values, [name]: value}));
}

  const handleSubmit = (event) => {
    
    event.preventDefault();

      const newInputs = ({...inputs, date:event.target.date.value})  

      axios.post('http://localhost:8004/addEvent', newInputs)
      .then(function(response){
        console.log(response);
      })
      .catch(function(err){
        console.log(err);
      })
      navigate('/');
  }

  return (
    <div>
      <div className="add-event-container">
        <h1>Add Event</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
          
            />
          </div>
          <div>
            <label htmlFor="info">Event Information:</label>
            <textarea
              id="info"
              name="info"
              onChange={handleChange}
              
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <DatePicker
              name="date"
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="yyyy-MM-dd"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="time">Time:</label>
            <div className="time-input-wrapper">
              <input
                type="time"
                id="time"
                name="time"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="duration">Duration:</label>
            <textarea
              id="duration"
              name="duration"
              onChange={handleChange}
              
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <textarea
              id="location"
              name="location"
              onChange={handleChange}
              
            />
          </div>
          <div>
            <label htmlFor="transport">Transport:</label>
            <textarea
              id="transport"
              name="transport"
              onChange={handleChange}
              
            />
          </div>
          <div>
            <label htmlFor="picture">Picture:</label>
            <input
              type="text"
              id="picture"
              name="picture"
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
