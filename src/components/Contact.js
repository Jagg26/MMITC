import React from 'react';
import styled from '@emotion/styled';

const ContactDiv = styled.section`
    width: 100%;
    max-height: 300px;
    background: #fff;
`;

const Title = styled.h3`
    font-size: 40px;
    max-width: 220px;
    text-align: center;
    margin: 1em auto;
    border-bottom: 3px solid #E4002B;
    padding-bottom: 0.4em;
`;

const ControlledForm = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    & input[type="text"] {
        margin-right: 1.5em !important;
    }

    & input {
        margin-bottom: 1.5em !important;
    }
`;

const Submit = styled.button`
    margin: 5em auto !important;
`;


const Contact = ({
    contact_menu
}) => {

    return (
        <ContactDiv>
            <div className="container">
                <Title>{contact_menu}</Title>
                <form>
                    <ControlledForm className="input-field">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" />
                    </ControlledForm>

                    <textarea name="message" placeholder="Message: " className="materialize-textarea"></textarea>

                    <Submit className="btn waves-effect waves-light red darken-4" type="submit" name="action">Submit
                    </Submit>
                </form>

            </div>

        </ContactDiv>
    );
}

export default Contact;