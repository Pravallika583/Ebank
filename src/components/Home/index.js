import './index.css'
import {Component} from 'react'

const Home = () => (
  <div className="bg-container">
    <div className="header-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
        className="logo-img"
      />
      <button className="logout-button">Logout</button>
    </div>
    <div className="content-section">
      <h1 className="heading">Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </div>
  </div>
)

export default Home
