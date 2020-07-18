import React from 'react';
import styled from '@emotion/styled';
import markets from '../img/market.jpg';

const Title = styled.h3`
    font-size: 40px;
    max-width: 220px;
    text-align: center;
    margin: 1em auto;
    border-bottom: 3px solid #E4002B;
`;

const MarketContainer = styled.section`
    background: #eee;
    padding-top: 1em;
`;

const TextGroup = styled.div`
    padding: 1.3em 6em 6em 6em !important;
`;

const MarketsIntro = styled.div`
    font-size: 20px;
    margin-bottom: 2em;
    text-align: justify;
`;

const MarketCountries = styled.div`
    font-size: 20px;
    font-weight: 500;

    & h4{
        font-size: 20px;
        font-weight: 600;
        font-style: italic;
    }
`;

const Market = ({
    market_menu,
    market_text_1,
    market_text_2,
    market_text_3,
    countries
}) => {
    return (
        <MarketContainer>
            <Title className="container">
                <h3>{market_menu}</h3>
            </Title>

            <div className="row">
                <img className="col s6 responsive-img market-img" src={markets} alt="Port 1" />
                <TextGroup className="col s6">
                    <MarketsIntro>
                        <p>{market_text_1}</p>
                        <p>{market_text_2}</p>
                    </MarketsIntro>
                    <MarketCountries>
                        <h4>{market_text_3}</h4>
                        <p>{countries}</p>
                    </MarketCountries>
                </TextGroup>
            </div>
        </MarketContainer>
    )
}

export default Market;