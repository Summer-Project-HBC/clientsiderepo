import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8004/event')
    .then(res=>setEvents(res.data))
    
},[])
  return (
    <div>
      {events.map(event=><div key={event.id}>
        <p>Title: {event.title}</p>
      </div>)}
    </div>
  );
}

export default App;
