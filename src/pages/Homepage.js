import React, {useState, useEffect} from 'react'
import {Card, CardBody,CardImg,Col} from "reactstrap"
import UserImages from '../components/userImages'

import axios from "axios"
import LoadingIndicator from "../components/LoadingIndicator"



const Homepage = () => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      setUsers(result.data)
      setIsLoading(false)
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }, [])


  if (isLoading) {
    return <LoadingIndicator width="150px" height="150px" color="blue" />
  }
    return(
        <div>
      <h1>Home Page</h1>
      <ul id="users">
        {users.map(user => (
          <Card key = {user.id} > 
            <CardBody id = "profiles">
                <Col sm="2">
                    <CardImg top width="200px" src = {user.profileImage} alt="userImage" />
                    <p>{user.id}: {user.username}</p>
                </Col>
                <Col sm="10" id="gallery">
                   <UserImages userId={user.id}/>
                </Col>
            </CardBody>
            
          </Card>
        ))}
      </ul>
    </div>
    )
}

export default Homepage