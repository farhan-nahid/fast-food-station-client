import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import spinner from '../../spinner/spinner.gif';
import OrderedUser from '../OrderedUser/OrderedUser';
import SingleItem from '../SingleItem/SingleItem';

const SingleOrder = ({order}) => {

    const {name,  street, city, state} = order.restaurant
    const {items} = order
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://fast-food-station.herokuapp.com/user-information',{
            headers:{
                'Content-Type':'Application/JSON'
            },
            body:JSON.stringify()
        })
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
   
    
    return (
            <Container className='m-auto text-center'>
                <h3 style={{color:'crimson'}}>{name}</h3>
                <h6 style={{color:'blueviolet'}}>{city}, {state}</h6>
                <p className="mb-3">{street}</p>
                        {
                            users.length > 0 ?
                            users.map(user => <OrderedUser user={user} />)
                            :<img className="text-center m-auto"  src={spinner} alt="spinner" />
                        }
                    <Row className="my-3">
                        {
                            items.length > 0 ?
                            items.map(item => <SingleItem item={item} />)
                            :<img className="text-center m-auto"  src={spinner} alt="spinner" />
                        }
                    </Row>
            </Container>
    );
};

export default SingleOrder;