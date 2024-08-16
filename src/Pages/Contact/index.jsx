import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Contact = () => {
  return (
    <div className=''>
      <div className="d-flex align-items-center min-vh-100 text-white">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div
                className="m-5 p-3 rounded shadow-sm"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #ccc',
                }}
              >
                <div className="text-center mb-4">
                  <h1>Contact Us</h1>
                  <p className="text-white ">
                    Fill up the form below to send us a message.
                  </p>
                </div>
                <Form action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                  <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label className="text-white">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="text-dark bg-light"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="text-light">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      className="text-dark bg-light"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label className="text-white">Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="+1 (555) 1234-567"
                      required
                      className="text-dark bg-light"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label className="text-white">Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Your Message"
                      required
                      className="text-dark bg-light"
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contact