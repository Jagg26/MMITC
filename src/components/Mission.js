import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Title = styled.h3`
    font-size: 40px;
  max-width: 550px;
  text-align: center;
  margin: 1em auto;
  border-bottom: 3px solid #E4002B;
  padding-bottom: 20px;
  margin-top: 50px !important;
`;

const CardTitle = styled.p`
    font-size: 23px;
    font-weight: 600;
    text-align: justify;
    color: white;
`;

const PreMission = styled.div`
    width: 100%;
    color: #ccc;
    background: /* #6B060C */ #AD1C29;
    text-align: center;
    padding: 4em;

    & h3{
        font-size: 36px;
        margin: 0 auto;
        margin-bottom: 0.5em;
    }
    & p{
        font-size: 22px;
        font-weight: 600;
        margin: 0 auto;
    }
`;

const Mission = ({
    mission_title,
    our_values,
    our_values_text,
    mission_1,
    mission_2,
    mission_3,
    mission_4
}) => {
    return (
        <Fragment>
            

            <div classNameName="mission">
                <Title>{mission_title}</Title>

                {/*CARD 1*/}
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card card-1">
                            <div>
                                <CardTitle>{mission_1}</CardTitle>
                            </div>
                        </div>
                    </div>

                    {/*CARD 2*/}

                    <div className="col s12 m3">
                        <div className="card card-2">
                            <div>
                                <CardTitle>{mission_2}</CardTitle>
                            </div>
                        </div>
                    </div>

                    {/*CARD 3*/}

                    <div className="col s12 m3">
                        <div className="card card-3">
                            <div>
                                <CardTitle>{mission_3}</CardTitle>
                            </div>
                        </div>
                    </div>

                    {/*CARD 4*/}
                    <div className="col s12 m3">
                        <div className="card card-4">
                            <div>
                                <CardTitle>{mission_4}</CardTitle>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PreMission >
                <h3>{our_values}</h3>
                <p>{our_values_text}</p>
            </PreMission>
        </Fragment>
    );
}

export default Mission;