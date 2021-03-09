import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
//import NavBar from './components/Navbar'
//import Header from"./components/Header";
//import Particles from 'react-particles-js';
import Container from 'react-bootstrap/Container';
//import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./components/Navbar";


import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends React.Component {
  
  

  render() {
    return (
      <Navbar />
    );
  }
}
export default App;