import React from 'react';
import logo from '../img/logo.png';

const Header = ({ 
     setLang, 
     slogan, 
     home_menu,
     about_us_menu,
     mission_menu,
     location_menu,
     market_menu,
     contact_menu
    }) => {


    const chooseLangEN = (e) => {
        e.preventDefault();

        setLang('en')

    }

    const chooseLangES = (e) => {
        e.preventDefault();

        setLang('es')

    }

    const chooseLangFR = (e) => {
        e.preventDefault();

        setLang('fr')

    }

    const chooseLangRU = (e) => {
        e.preventDefault();

        setLang('ru')

    }

    const chooseLangPR = (e) => {
        e.preventDefault();

        setLang('pr')

    }

    return (
        <header>
            <div className="header-wrapper">
                <div className="subheader">
                    <nav className="menu">
                        <a href="#!" id="btn-about">{home_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-menu">{about_us_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-galery">{mission_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-location">{location_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-location">{market_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-location">{contact_menu}</a>
                    </nav>
                    <div className="logo">
                        <img src={logo} alt="MMITC Logo"></img>
                    </div>

                    <nav className="language">
                        <div className="en" key="en" id="en" onClick={chooseLangEN}>
                        </div>
                        <div className="es" key="es" id="es" onClick={chooseLangES}>
                        </div>
                        <div className="fr" key="fr" id="fr" onClick={chooseLangFR}>
                        </div>
                        <div className="ru" key="ru" id="ru" onClick={chooseLangRU}>
                        </div>
                        <div className="pr" key="pr" id="pr" onClick={chooseLangPR}>
                        </div>
                    </nav>

                </div>
                <div className="container">
                    <div className="texts">
                        <h1 className="name">MMITC</h1>
                        <h3 key="slogan">{slogan}</h3>
                    </div>
                </div>

            </div>

        </header>
    );
}

export default Header;