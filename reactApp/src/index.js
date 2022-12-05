import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/public" element={ <PublicPage /> } />
          <Route path="/" element={ <HomePage /> } />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
