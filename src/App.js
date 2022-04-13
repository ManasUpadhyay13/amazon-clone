import React , { useEffect } from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from "./firebase" 
import { BrowserRouter as Router , Switch , Route } from "react-router-dom"
import { useStateValue } from "./StateProvider";
import Nav from "./Nav"


function App() {

  const[{} , dispatch] = useStateValue();

  useEffect(()=>{
    // will run once when the app components will run
    auth.onAuthStateChanged(authUser => {
      console.log("I am in the app js ")
      console.log("the name of the user is " ,authUser)

      if(authUser){
        // the user was logged in or logged right now
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }
      else {
        // the user was logged out
        dispatch({
          type : "SET_USER",
          user : null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Switch>

        <Route path="/login">
              <Login/>
          </Route>
          
          <Route path="/checkout">
              <Header/>   
              <Checkout/>

          </Route>

          <Route path="/">
              <Header/>
              <Nav/>
              <Home/>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
