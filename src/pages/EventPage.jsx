import React, { useState, useEffect } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import axios from 'axios'
import SignUpForm from "../components/SignUpForm";
import "./EventPage.css";

function EventPage(props) {
  const params = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState()
  const [feedbackStatus, setFeedbackStatus] = useState()
  const [feedback, setFeedback] = useState({})
  const [overlay, setOverlay] = useState(false)
  const [userEvents, setUserEvents] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8004/event/${params.individualevent}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        if (props.loginData.logged) {
          checkUserEvents()
          checkFeedback(data.id)
        }
      });
    setIsLoading(false);
  }, [params.individualevent]);

  const feedbackHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8004/feedback', {
        event: parseInt(data.id),
        user: parseInt(props.loginData.userid),
        feedback: JSON.stringify(feedback)
      })
      setFeedback({})
      setMessage(response.data)
      checkFeedback(data.id)
      setOverlay(false)
    } catch (error) {
      console.log(error)
      setOverlay(false)
    }
  }

  const checkFeedback = async (id) => {
    try {
      const response = await axios.post('http://localhost:8004/checkfeedback', {
        event: parseInt(id),
        user: parseInt(props.loginData.userid)
      })
      setFeedbackStatus(response.data)
    } catch (error) {
    }
  }

  const overlayHandler = (e) => {
    e.preventDefault()
    setOverlay(!overlay)
  }

  const onInput = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
  })
  }

  const checkUserEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:8004/checkmyevents/${props.loginData.userid}`)
      if (response.data !== "") {
        setUserEvents(response.data)
      }
    } catch (error) {
    }
}

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="single-event-page">
      <img className="event-photo" src={data.picture} alt={data.title} />
      <div className="single-event-card-content">
        <h2>{data.title}</h2>
        <div className="basic-info"> <p>{data.info}</p> </div>
        <div className="main-info">
          <p>Date: {data.date?.date}</p>
          <p>Time: {data.time?.date}</p>
          <p>Duration: {data.duration} hrs</p>
          <p>Venue: {data.location} <span><NavLink to={`https://www.google.com/maps/place/${data.location}`}>↗️</NavLink></span></p>
          <p>Transportation: {data.transport}</p>
        </div>
      </div>
      <div className="sign-up">
        {props.loginData.logged ? 
        <SignUpForm loginData={props.loginData} eventId={data.id} userEvents={userEvents} />
        :
        <p>Please, <Link to='/login' className="loginButton">Login</Link> to sign up for this event</p>}
      </div>
      {message && <p>{message}</p>}
      {props.loginData.logged && !feedbackStatus &&  userEvents.includes(data.id) && <button onClick={overlayHandler}>Leave your feedback about this event</button>}
      {feedbackStatus && userEvents.includes(data.id) && <p>{feedbackStatus}</p>}
      {overlay && <div className="overlay">
        <div className="modal">
          <button className="closebtn" onClick={overlayHandler}>Close</button>
          <form onSubmit={feedbackHandler}>
            <label htmlFor="question1">Which elements of the event did you like the most?</label>
            <textarea type="text" name="question1" onChange={onInput} required />
            <label htmlFor="question2">What, if anything, did you dislike about this event?</label>
            <textarea type="text" name="question2" onChange={onInput} required />
            <label htmlFor="question3">Are you likely to participate in one of our events in the future?</label>
            <textarea type="text" name="question3" onChange={onInput} required />
            <label htmlFor="question4">How likely are you to tell a friend about this event?</label>
            <textarea type="text" name="question4" onChange={onInput} required />
            <button type="submit">Submit feedback</button>
          </form>
        </div>
      </div>}
    </div>
  );
}

export default EventPage;