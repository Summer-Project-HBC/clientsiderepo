import React, { useState } from "react";
import axios from 'axios';
import "./SignUpForm.css";

const SignUpForm = (props) => {
  const [message, setMessage] = useState()

  const handleFollow = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8004/follow', {
        event: parseInt(props.eventId),
        user: parseInt(props.loginData.userid)
      })
      setMessage(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUnfollow = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8004/unfollow', {
        event: props.eventId,
        user: props.loginData.userid
      })
      setMessage(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {!props.userEvents.includes(props.eventId) && <button className="form-button" onClick={handleFollow}>
        Reserve a place
      </button>}
      {props.userEvents.includes(props.eventId) && <button className="form-button" onClick={handleUnfollow}>
        Cancel your place
      </button>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUpForm;
