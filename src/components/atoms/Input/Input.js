import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    display: flex;
    width: 100px;
    height: 100%;
`
function Input(props){
    return (
        <StyledInput style={props}/>
    )
}

export default Input;