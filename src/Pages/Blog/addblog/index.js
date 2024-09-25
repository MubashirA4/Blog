import React,{useState} from 'react'
import { Form, Button, Container } from "react-bootstrap";
import axios from 'axios'
import { apiUrl } from '../../../utils'
import { useNavigate } from 'react-router-dom';

const CreateNewBlog = () => {
    const navigate = useNavigate();
    const [CatId, setCatID ] = useState("");
    const [name, setName] = useState("");
    const [BlogDetails, setBlogDetails] = useState("");
    const [AuthorName, setAuthorName] = useState("");
    const [BlogCreateDate, setBlogCreatedate] = useState("");

    const NewBlogData = {
        cat_id: CatId,
        name: name,
        blog_details: BlogDetails,
        author_name: AuthorName,
        blog_create_date: BlogCreateDate
    }


    const handleBlog = () => {
        axios
        .post(`${apiUrl}create_blog`, NewBlogData)
        .then(function (response) {
            console.log(response)
            setCatID("");
            setName("");
            setBlogDetails("");
            setAuthorName("");
            setBlogCreatedate("");
            navigate("/blog")
            navigate(0);
        }).catch(function (error){
            console.log(error)
        })
    }
  return (
    <div className="text-white m-5">
        <Container style={{ maxWidth: "720px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Category Id</Form.Label>
          <Form.Control
            placeholder="Disabled input"
            value={CatId}
            onChange={(e) => setCatID(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            placeholder="Disabled input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Blog Details</Form.Label>
          <Form.Control
            placeholder="Disabled input"
            value={BlogDetails}
            onChange={(e) => setBlogDetails(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            placeholder="Disabled input"
            value={AuthorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Create date</Form.Label>
          <Form.Control
            placeholder="Disabled input"
            value={BlogCreateDate}
            onChange={(e) => setBlogCreatedate(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleBlog}>Add New Blog</Button>
      </Container>
    </div>
  )
}

export default CreateNewBlog