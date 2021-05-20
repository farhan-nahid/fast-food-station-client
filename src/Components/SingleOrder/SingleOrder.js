import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleItem from '../SingleItem/SingleItem';

const SingleOrder = ({order}) => {
    console.log(order);
    const {name,  street, city, state} = order.restaurant
    const {items} = order
    console.log(items);

    
    return (
            <Container className='m-auto text-center'>
                <h3 style={{color:'crimson'}}>{name}</h3>
                <h6 style={{color:'blueviolet'}}>{city}, {state}</h6>
                <p>{street}</p>
                    <Row>
                        {
                            items.map(item => <SingleItem item={item} />)
                        }
                    </Row>
            </Container>
    );
};

export default SingleOrder;