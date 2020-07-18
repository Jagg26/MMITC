import React from 'react';
import styled from '@emotion/styled';
import port1 from '../img/port1.jpg';
import port2 from '../img/port2.jpg';

const AboutContainer = styled.div`
    background: #fff;
    margin: 0 auto;
`;

const AboutUsTitle = styled.h3`
    font-size: 46px;
    max-width: 200px;
    margin: 0 auto;
    margin-top: 50px !important ;
    color: black;
    border-bottom: 3px solid #E4002B;
    padding-bottom: 10px;
`;

const Text = styled.p`
    font-size: 25px;
    padding: 2em 5em;
    text-align: justify;
`;

const AboutUS = ({
    about_us_menu,
    about_us_1,
    about_us_2
}) => {
    return (
        <AboutContainer>
            <div className="row grey lighten-5">
                <div className="col s6">
                    <AboutUsTitle>{about_us_menu}</AboutUsTitle>
                    <Text>{about_us_1}</Text>
                </div>
                <img className="col s6 responsive-img" src={port1} alt="Port 1" />
            </div>
            <div className="row grey lighten-5">
                <img className="col s6 responsive-img" src={port2} alt="Port 1" />
                <div className="col s6">
                    <Text className="flow-text">{about_us_2}</Text>
                </div>
            </div>
        </AboutContainer>
    );
}

export default AboutUS;