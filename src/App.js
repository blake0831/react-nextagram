import React from 'react';
import './App.css'
import Homepage from './pages/Homepage'
//import axios from 'axios'
import UserProfile from './pages/UserProfile'
import { Switch, Route} from "react-router-dom"
import NavBar from './components/NavBar'



function App() {
/*  const [users, setUsers] = useState([]);

  useEffect(() => {
    // performing a GET request
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      // If successful, we do stuffs with 'result'
      setUsers(result.data)
   //     console.log(result)
    })
    .catch(error => {
      // If unsuccessful, we notify users what went wrong
      console.log('ERROR: ', error)
    })
  }, [])
  */
  return (
    <>
    <NavBar />
    <Switch>
      <Route
        exact 
        path="/"
        component = {Homepage}

      />
      <Route path="/users/:id" component = {UserProfile} />
    </Switch>
    </>
  )
}

export default App;