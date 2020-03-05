import React from 'react'
import styled from 'styled-components'

import { Map } from 'components/atoms'
import { TradeDataArea, MenuArea } from 'components/organisms'


const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: rows;
    align-items: flex-start;
`


const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    flex-direction: colums;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 5px 5px 5px 5px;
    
`
const Item = styled.div`
    display: flex;
    margin: 10px 10px 10px 10px;
`
function Template() {
    return(
        <Layout>
            <MenuArea/>
            <Container>
                <Item><Map/></Item>
                <Item><TradeDataArea/></Item>
            </Container>
        </Layout>
    )
}

export default Template;