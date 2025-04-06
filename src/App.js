import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import {Switch, Route} from "react-router-dom"

const App = () => (
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/ebank/login" component={Login}/>
    <Route component={NotFound}/>
    </Switch>
)

export default App
