import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ScrollToTop from "react-scroll-to-top";
import spinner from '../../spinner/spinner.gif';
import SingleUser from '../SingleUser/SingleUser';

const UserInformation = () => {
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
        <Container className="mt-3">
             <ScrollToTop smooth />
            <h3 style={{color:'darkblue'}}>User Information: </h3>
                <Row className="mt-3">
                    {
                        users.length > 0? 
                        users.map(user => <SingleUser key={user.order_id}  user={user} />)
                        : <img className="text-center m-auto"  src={spinner} alt="spinner" />
                    }
                </Row>
        </Container>
    );
};

export default UserInformation;