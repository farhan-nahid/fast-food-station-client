import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleItem.css';

const SingleItem = ({item}) => {
    const {name, category, price, currency, tax_pct} = item;

    return (
            <Col md={6} lg={3} className='p-2 item'>
                <Card className="p-2 item-card">
                    <Card.Title style={{color:'coral'}}>Name: {name}</Card.Title>
                    <Card.Body>
                        <Card.Text style={{color:'#0c880a'}}>Category : {category}</Card.Text>
                        <Card.Text style={{color:'#911caf'}}>Price : {price} {currency}</Card.Text>
                        <Card.Text>Tax : {tax_pct}%</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default SingleItem;