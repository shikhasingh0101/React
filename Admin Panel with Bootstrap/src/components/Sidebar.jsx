import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
    return (
        <Nav className="flex-column bg-light vh-100 p-3">
            <LinkContainer to="/users">
                <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/settings">
                <Nav.Link>Settings</Nav.Link>
            </LinkContainer>
        </Nav>
    );
};

export default Sidebar;
