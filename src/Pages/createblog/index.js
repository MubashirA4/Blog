import React,{useState} from "react";
import {Form, Button} from "react-bootstrap";
import axios from "axios";
import { apiUrl } from "../../utils";

const CreateBlog = () => {
    const[CatName,setCatName] = useState('')
    const[Catdesc, setCatDesc] = useState('')
    const catFormData = {
        cat_name:CatName,
        cat_disc:Catdesc
    }

    const handleCat = () =>{
        axios.post(`${apiUrl}add_category`, catFormData)
          .then(function (response) {
            console.log(response);
            setCatName('')
            setCatDesc('')
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <div>
      <div className="container text-white">
      <Form.Group className="mb-3">
        <Form.Label>Category Name</Form.Label>
        <Form.Control placeholder="Disabled input" value={CatName} onChange={(e)=>setCatName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category Discription</Form.Label>
        <Form.Control placeholder="Disabled input" value={Catdesc} onChange={(e)=>setCatDesc(e.target.value)}/>
      </Form.Group>
    <Button onClick={handleCat}>Add Category</Button>
      </div>
    </div>
  );
};

export default CreateBlog;
