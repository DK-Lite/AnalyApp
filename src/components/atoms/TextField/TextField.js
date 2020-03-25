import React from 'react';
import styled from 'styled-components'

const Container = styled.input`
    outline: none;
    color: black;
    background: white;
    border: 1px solid #0005;
    border-radius: 3px;
    opacity: 0.5;
    font-size: 13px;
    padding: 0 0 0 10px;

    ::placeholder {
    }
    &:hover {
        opacity: 1;
    }
    &:focus {
        opacity: 1;
    }
`

function TextField({ children, ...other }){
    return (
        <Container {...other}>
            {children}
        </Container>
    )
}

export default TextField