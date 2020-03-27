import React from 'react'
import styled from 'styled-components'

import * as HighTag from 'components/molecules'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    > * {
        margin: 2px 2px 2px 2px;
    }
`
function AnalyMenu({icons, ...other}){
    return (
        <Container>
            {icons.map( x => <HighTag.IconButton name={x} />)}
        </Container>
    )
}
AnalyMenu.defaultProps = {
    icons: ['table_chart', 'show_chart', 'pie_chart', 'insert_chart']
}

export default AnalyMenu;