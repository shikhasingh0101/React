
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
    { id: 1, name: "Oil", price: "$10", img: "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" },
    { id: 2, name: "Product 2", price: "$20", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$30", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$40", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: "$50", img: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: "$60", img: "https://via.placeholder.com/150" },
];

const ProductGrid = () => {
    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductGrid;
