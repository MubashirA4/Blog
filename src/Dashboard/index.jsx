import React, { useState, useEffect } from 'react'
import { json } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
    let userData = localStorage.getItem('user_data');
    let user = null;

    if (userData) {
        try {
            user = JSON.parse(userData);
        } catch (e) {
            console.error("Failed to parse user_data:", e);
        }
    }

    if (!user) {
        return <div>Error: No user data available.</div>;
    }

    return (
        <div>
            <div className="container text-white">
                <Container>
                    <Row>
                        <Col md={4}>
                            {/* Card 1 */}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text
                                        to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </Col>
                        <Col
                            md={4}>
                            {/* Card 2 */}
                            {/* ... */}
                        </Col>
                        <Col md={4}>
                            {/* Card 3 */}
                            {/* ... */}
                        </Col>
                    </Row>
                </Container>

                {/* Name: {user.name} */}
            </div>
        </div>
    );

}

export default Dashboard