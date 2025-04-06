import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    return (
      <div className="login-bg-container">
        <div className="login-container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login-img"
            />
          </div>
          <div className="form-container">
            <h1 className="form-heading">Welcome Back!</h1>
            <form>
              <div>
                <label htmlFor="userid">User ID</label>
                <br />
                <input
                  id="userid"
                  type="text"
                  className="input-text"
                  placeholder="Enter User ID"
                />
              </div>
              <div>
                <label htmlFor="pin">PIN</label>
                <br />
                <input
                  id="pin"
                  type="text"
                  className="input-text"
                  placeholder="Enter PIN"
                />
              </div>
              <div className="button-container">
                <button className="login-button">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
