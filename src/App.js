import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEvent from "./pages/AddEvent";
import BrowseEvents from "./pages/BrowseEvents";
import EventPage from "./pages/EventPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddEvent />} />
          <Route path="/browse" element={<BrowseEvents />} />
          <Route path="/https://www.bc.fi/" />
          <Route path="/https://www.bc.fi/" />
          <Route path="/events/:id" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;