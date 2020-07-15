import React, { useEffect, useState } from "react"
import axios from 'axios'
import {Col } from "reactstrap"
import LoadingIndicator from '../components/LoadingIndicator'

const UserImages = (user) => {
    const { userId } = user;
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://insta.nextacademy.com/api/v1/images/?userId=${userId}`)
        .then(result => {
            setImages(result.data)
            setLoading(false)
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }, [userId])

    if (loading) {
        return <LoadingIndicator width="100px" height="100px" color="red" />
      }

    return (
        <Col id="pics">
            {
                images.map((image,index)=>{
                    return (
                        <img src={image} alt="user images" width="200" height="250" key={`${userId}-images${index}`} />
                    ) 
                } )
            }
        </Col>
    )
}

export default UserImages
