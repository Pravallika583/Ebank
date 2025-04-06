import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from "react-router-dom"

class Login extends Component {
  state = {userId: '', pin: '', errorMsg: '', showError: false}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({errorMsg: errorMsg, showError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  render() {
    const {userId, pin, errorMsg, showError} = this.state
    const token = Cookies.get("jwt_token")
    if(token!==undefined){
      return <Redirect to="/"/>
    }
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
            <form onSubmit={this.submitForm}>
              <div>
                <label htmlFor="userid">User ID</label>
                <br />
                <input
                  id="userid"
                  type="text"
                  className="input-text"
                  placeholder="Enter User ID"
                  onChange={this.onChangeId}
                  value={userId}
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
                  onChange={this.onChangePin}
                  value={pin}
                />
              </div>
              <div className="button-container">
                <button className="login-button" type="submit">
                  Login
                </button>
              </div>
              {showError ? <p className="login-error">{errorMsg}</p> : null}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
