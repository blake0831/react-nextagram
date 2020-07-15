import React, {useState} from 'react';
import {FormGroup, Input, FormText, Button, Form, } from 'reactstrap'

const UploadPage = () => {
    const handleSubmit = event => {
        event.preventDefault();
      };



  const [imageFile, setImageFile] = useState(null)
    return(
        <Form onSubmit={
            e => handleSubmit(e)
          }>
            <FormGroup>
              <Input
                type="file"
                name="image-file"
                onChange={
                    e => setImageFile(e.target.files[0]) 
                }    
              />
              <FormText color="muted">
                Make sure the image being uploaded is a supported format.
              </FormText>
            </FormGroup>
            <Button type="submit" color="primary">
              Upload
            </Button>
          </Form>
    )
}

export default UploadPage;