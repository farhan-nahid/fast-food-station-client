import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './SingleUser.css';

const SingleUser = ({user}) => {
    const {name, img, about, address, phone, dislikes, likes} = user.user;
    
    return (
         <Card className="user">
             <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <strong>About: </strong> {about}</ListGroupItem>
                    <ListGroupItem> <strong>Address: </strong> {address}</ListGroupItem>
                    <ListGroupItem> <strong>Phone: </strong> {phone}</ListGroupItem>
                </ListGroup>
                <Card.Body className="habit d-flex justify-content-between">   
                    <Card.Text> <strong>Favorite Food: </strong> { likes.map(like => <h6>{like}</h6> ) }</Card.Text>  
                    <Card.Text> <strong>Unlike Foods: </strong> { dislikes.map(dislike => <h6>{dislike}</h6>) }</Card.Text>
                </Card.Body>
            </Card>
    );
};

export default SingleUser;