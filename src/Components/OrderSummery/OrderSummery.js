import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ScrollToTop from "react-scroll-to-top";
import spinner from '../../spinner/spinner.gif';
import SingleOrder from '../SingleOrder/SingleOrder';

const OrderSummery = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://fast-food-station.herokuapp.com/order-summery', {
            headers:{
                'Content-Type':'Application/JSON'
            },
            body:JSON.stringify()
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

  
    return (
        <Container className="mt-3">
             <ScrollToTop smooth />
            <h3 style={{color:'darkblue'}}>Order Summery: </h3>
               <Row className="mt-3">
                    {   orders.length > 0 ? 
                        orders.map(order => <SingleOrder  key={order.name} order={order} />)
                        :<img  className="text-center m-auto" src={spinner} alt="spinner" />
                    }
               </Row>
        </Container>
    );
};

export default OrderSummery;