import React from 'react';
import { Table, Button } from 'react-bootstrap';

const users = [
    { id: 1, name: 'shikha', email: 'shikha@singh.com' },
    { id: 2, name: 'singh', email: 'singh@70219.com' },
];

const UserList = () => {
    return (
        <div>
            <h2>User Management</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="primary" size="sm">Edit</Button>{' '}
                                <Button variant="danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserList;
