import React from 'react'
import styled from 'styled-components'

import { CardTable, BarChart, LineChart, PieChart } from 'components/molecules'

const Container = styled.div`
    width: 430px;
    height: 100%;
    background: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 5px 5px 5px 5px;
`
const Item = styled.div`
    display: flex;
    margin: 10px 10px 10px 10px;
`
function TradeDataArea(){

    return(
        <Container>
            <Item>
                <CardTable/>
            </Item>
            <Item>
                <LineChart/>
            </Item>
            <Item>
                <BarChart/>
            </Item>
            <Item>
                <PieChart/>
            </Item>
        </Container>
    )
}

export default TradeDataArea;