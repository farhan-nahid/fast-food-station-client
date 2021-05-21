import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center bg-light">
             <small>Designed & Build by <a href="https://www.facebook.com/dev.farhanNahid" target="blank">Farhan Ahmed Nahid</a></small> <br />
            <small>{(new Date()).getFullYear()} &copy; copyright | Farhan</small>     
        </footer>
    );
};

export default Footer;