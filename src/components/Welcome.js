import React from 'react';
import logo from '../img/Logo.jpeg';

const Welcome = ({
    welcome,
    slogan
}) => {
    return (
        <div className="welcome">
            <div className="container">
                <div>
                    <h1 className="name">{welcome}</h1>
                    <h4 key="slogan">{slogan}</h4>
                    <img className="responsive-img" src={logo} alt="Brand Logo" />
                </div>
            </div>
        </div>
    );
}

export default Welcome;
