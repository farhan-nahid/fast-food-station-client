import React from 'react';
import './OrderedUser.css';

const OrderedUser = ({user}) => {
    const {name, img, phone, address} = user.user;
    return (
        <div className='user-card' >
            <div>
                 <img src={img} alt="user" />
            </div>
            <div>
                <h5>{name}</h5>
                <p><small>Address : {address}</small></p>
                <p><small>Phone : {phone}</small></p>
            </div>
        </div>
    );
};

export default OrderedUser;