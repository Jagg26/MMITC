import React from 'react';

const AboutUS = ({
    about_us_menu,
    about_us_1,
    about_us_2,
    about_us_3,
    about_us_4
}) => {
    return ( 
        <div className="about-us">
            <h3>{about_us_menu}</h3>
        <div className="list">
    <div className="list-element"><i className="fas fa-check"></i><p>{about_us_1}</p></div>
    <div className="list-element"><i className="fas fa-check"></i><p>{about_us_2}</p></div>
            <div className="list-element"><i className="fas fa-check"></i><p>{about_us_3}.</p></div>
            <div className="list-element"><i className="fas fa-check"></i><p>{about_us_4}</p></div>
        </div>

        </div>
     );
}
 
export default AboutUS;