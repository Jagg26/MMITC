import React from 'react';
import styled from '@emotion/styled';
import logo from '../img/logo.png';

const HeaderNavBar = styled.header`
    width: 90%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    background: #FFF;
    padding: 0;
    max-height: 100px;
/*     padding: 0.5em; */
`;

const BrandLogo = styled.div`
    width: 100%;
    margin: 0 auto;

    & img {
        vertical-align: top;
        max-width: 35%;
    } 
`;

const MenuNavbar = styled.div`
  text-align: right;
  float: right;
  & a{
    color: #333;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin: 40px 30px;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
    &:hover{
        font-weight: 500;
  /* border-bottom: 2px solid #AE1C29; */
    }
  }
  & p{
    color: #000;
  font-size: 16px;
  font-weight: 300;
  display: inline-block;
  margin: 40px 0px;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  }
`;

const LanguageBar = styled.div`
    text-decoration: none;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 1rem;

  & div{
    width: 30px;
  height: 30px;
  margin: 20px 20px;
  border-radius: 50%;
  background-clip: padding-box;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, .35);
  cursor: pointer;
  }

`;

const Header = ({
    setLang,
    slogan,
    home_menu,
    about_us_menu,
    mission_menu,
    products_menu,
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
        <HeaderNavBar>
            <div className="subheader row">

                {/*LOGO*/}
                <div className="col s3">
                    <BrandLogo>
                        <img className="responsive-img" src={logo} alt="MMITC Logo"></img>
                    </BrandLogo>
                </div>

                {/*LANG*/}
                <div className="col s3">
                    <LanguageBar className="language">
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
                    </LanguageBar>
                </div>

                {/*MENU*/}

                <div className="col s6">
                    <MenuNavbar>
                        <a href="#!" id="btn-about">{home_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-menu">{about_us_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-galery">{mission_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-location">{products_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-location">{market_menu}</a>
                        <p>|</p>
                        <a href="#!" id="btn-location">{contact_menu}</a>
                    </MenuNavbar>
                </div>
            </div>
        </HeaderNavBar>
    );
}

export default Header;