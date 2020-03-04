import React from 'react';
import './App.css';
import styled from 'styled-components'


import { Map } from 'components/atoms'
import { CardTable, CardChart } from 'components/molecules'

const Container = styled.div`
    display: flex;
    margin: 10px 10px 10px 10px;
`


function App() {
  return (
    <div className="App">
      <Container><Map/></Container>
      
      <Container>
        <CardTable/>
      </Container>

      <Container>
       <CardChart/>
      </Container>
      
      {/* <div>
      
      </div> 
      
      <div style={
        {
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "space-around",
        }
      }>
      <Card width='500px' height='300px' margin='10px 10px 10px 10px'></Card>
      <Card width='500px' height='300px' margin='10px 10px 10px 10px'></Card>
      <Card width='500px' height='300px' margin='10px 10px 10px 10px'></Card>
      <Card width='500px' height='300px' margin='10px 10px 10px 10px'></Card>
      <Card width='500px' height='300px' margin='10px 10px 10px 10px'></Card>
      <Card width='500px' height='300px' margin='10px 10px 10px 10px'></Card>
      <Card width='500px' height='300px' margin='10px 10px 10px 10px'></Card>
      </div>
       */}
    </div>
   
  );
}

export default App;
