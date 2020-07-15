import React, { useEffect, useState } from "react"
import {CardBody,Col } from "reactstrap"
import UserImages from '../components/userImages'
import { useParams } from "react-router-dom"
import axios from 'axios'
import LoadingIndicator from "../components/LoadingIndicator"


const UserProfile = () => {
  const {id} = useParams()
  const [user, setUser] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    // performing a GET request
    axios.get(`https://insta.nextacademy.com/api/v1/users/${id}`)
    .then(result => {
      // If successful, we do stuffs with 'result'
      setUser(result.data)
      setIsLoading(false)
   //     console.log(result)
    })
    .catch(error => {
      // If unsuccessful, we notify users what went wrong
      console.log('ERROR: ', error)
    })
  }, [id])


  if (isLoading) {
    return <LoadingIndicator width="150px" height="150px" color="blue" />
  }
  
    return (
        <div>
            <CardBody id ="userGallery">
                <Col>
                    <p>{user.id}: {user.username}</p>
                </Col>
                <Col>
                    <UserImages userId={user.id}/>
                </Col>
            </CardBody>
        </div>
    )
}

export default UserProfile