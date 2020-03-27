import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Map } from 'components/atoms'
import * as Tag from 'components/atoms'
import * as HighTag from 'components/molecules'
import * as Item from 'components/organisms'


const boxFade = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: row wrap;
    align-items: center;
    padding: 0px 0px 0px 0px;
`

const ContainerNav = styled.div`
    width : 100%;
    height : 50px;
    background: white;
    z-index: 1;
`
const ContainerContents = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 10px 0 0 0;
    z-index: 1;
`





function Template() {
    return(
        <Container>
            <Map/>
            <ContainerNav>
                <Item.Nav />
            </ContainerNav>
            <ContainerContents>
                <Item.AnalyMenu />
                <Item.TradeDataArea/>
                <Item.ControlButton />
            </ContainerContents>

            
            {/*<Item.SettingNav />
             <MenuArea/>
            <Item><Map/></Item>
            <Item><Item.TradeDataArea/></Item> */}
        </Container>
    )
}

export default Template;