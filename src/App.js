import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import AddEvent from "./pages/AddEvent";
import BrowseEvents from "./pages/BrowseEvents";
import EventPage from "./pages/EventPage";
import FrequentQuestions from "./pages/FrequentQuestions";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddEvent />} />
          <Route path="/browse" element={<BrowseEvents />} />
          <Route path="/questions" element={<FrequentQuestions />} />
          <Route path="/https://www.bc.fi/" />
          <Route path="/https://www.bc.fi/" />
          <Route path="/browse/:individualevent" element={<EventPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;