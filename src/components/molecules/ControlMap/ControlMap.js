import React from 'react'
import styled from 'styled-components'

import { Input, Map } from 'components/atoms'


const TuningdMap = styled.div`
    width: 1200px;
    height: 800px;
    position: absolute;
    border: 2px solid;
   
`
const TuningInput = styled.div`
    width: 100px;
    height:100px;
    position: relative;
    border: 4px solid;
    top:150px;
    left:10px;
`

function ControlMap(){
    return (
        <div>
            <TuningdMap>
                <Map></Map>
            </TuningdMap>
            <TuningInput>
                <Input></Input>
            </TuningInput>
        </div>
    )
}

export default ControlMap;