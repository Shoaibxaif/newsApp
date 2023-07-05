import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<RouteNews category="general" />} />
          <Route path="/business" element={<RouteNews category="business" />} />
          <Route path="/entertainment" element={<RouteNews category="entertainment" />} />
          <Route path="/general" element={<RouteNews category="general" />} />
          <Route path="/health" element={<RouteNews category="health" />} />
          <Route path="/science" element={<RouteNews category="science" />} />
          <Route path="/sports" element={<RouteNews category="sports" />} />
          <Route path="/technology" element={<RouteNews category="technology" />} />
        </Routes>
      </Router>
    );
  }
}

// Create a separate component for rendering the News component within a Route
const RouteNews = ({ category }) => {
  return <News pageSize={10} key={category} country="in" category={category} />;
};
