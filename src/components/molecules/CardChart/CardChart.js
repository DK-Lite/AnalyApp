import React from 'react'
import styled from 'styled-components'
import { LineGraph } from 'components/atoms'



const StyledCard = styled.div`
    width: 400px;
    height: 300px;
    border: 0.5px solid #6663;
    &:hover {
        box-shadow: 1px 1px 2px 1px gray;
    }
    background: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 5px 5px 5px 5px;
`

const Title = styled.h3`
    display: flex;
    flex: 1;
    height: 20px;
    box-shadow: 0px 0px 0px 0px gray;
    margin: 5px 5px 5px 5px;
    font-family: Nanum Gothic;
`

const Contents = styled.div`
    display: flex;
    height: 230px;
    background : white;
    padding: 10px 5px 10px 5px;
`


function CardChart(props) {

    const { width, height, ...other } = props;

    return(
        <StyledCard
            style= {{
                width: width,
                height: height,
                ...other
            }}>
            <Title>실시간 차트</Title>

            <Contents>
                <LineGraph width='380px' height='100%' ></LineGraph>
            </Contents>
            
        </StyledCard>
    )

};

export default CardChart;