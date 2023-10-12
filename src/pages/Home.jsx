import React from 'react';
import './Pages.css';
import HomeComponent from '../components/Home/HomeComponent';
import Header from '../components/Navbar/Header';

const Home = () => (
  <div className="homeContainer">
    <Header title="Companies" />
    <HomeComponent />
  </div>
);

export default Home;
