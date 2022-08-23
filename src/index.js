import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Filter from "./components/Filter";
import Map from "./components/Map";
import Profile from "./components/Profile";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Formthree from "./components/Formthree";
import Location from "./components/Location";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    <Blog />
    {/* <Map /> */}
    {/* <Filter /> */}
    {/* <Profile /> */}
    {/* <Form /> */}
    {/* <Modal /> */}
    {/* <Formthree /> */}
    {/* <Location /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
