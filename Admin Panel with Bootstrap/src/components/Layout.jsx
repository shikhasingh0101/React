import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="p-0">
                    <Sidebar />
                </Col>
                <Col xs={10} className="p-3">
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;
