import React from 'react'
import styled from 'styled-components'

import { Map } from 'components/atoms'
import { TradeDataArea, MenuArea } from 'components/organisms'


const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: row wrap;
    align-items: center;
    padding: 0px 0px 0px 0px;
`

const Item = styled.div`
    display: flex;
    margin: 0px 0px 10px 0px;
`

function Template() {
    return(
        <Layout>
            <MenuArea/>
            <Item><Map/></Item>
            <Item><TradeDataArea/></Item>
        </Layout>
    )
}

export default Template;