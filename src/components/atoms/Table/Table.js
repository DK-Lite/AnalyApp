import React from 'react'
import styled from 'styled-components'

const CustomDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    float: left;
`
const StyledTable = styled.table`
    width: 390px;
    height: 100%;
`
const Tr = styled.tr`

`
const Td = styled.td`
    border: 0.05px solid #6663;
`
const Th = styled.th`
    height: 25px;
    border-radius: 3px;
    background: #5459FF; 
    color: white;
    font-family: Nanum Gothic; 
`

function Table(props){
    const { colums, datas } = props;

    const header_line = colums.map( object => (
            <Th >{object.name}</Th>
    ))
    const data_lines = datas.map( data => 
        <Tr>
            {colums.map( object =>  (<Td> {data[object.tag]}</Td>)) }
        </Tr>
    )

    return (
        <CustomDiv> 
            <StyledTable>
                <Tr>
                    {header_line}
                </Tr>
                {data_lines}
            </StyledTable>
        </CustomDiv>
        
    )
}

export default Table;