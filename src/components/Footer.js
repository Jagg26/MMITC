import React from 'react';
import styled from '@emotion/styled';

const FooterDiv = styled.footer`
    width: 100%;
    background: #222222;
    padding: 3em;
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const Footer = () => {
    return ( 
        <FooterDiv>
            <p>P. Sherman Wallaby Street 42 Sydney</p>
            <p>email@email.com</p>
            <p><strong>This site is a Work in Progress</strong></p>
            <p>Web by John García</p>
        </FooterDiv>
     );
}
 
export default Footer;