import React from 'react';
import './App.css';

import { Table } from 'components/atoms/Table'
import { Card } from 'components/atoms/Card'

function App() {
  return (
    <div className="App">
      {/* <div>
      <Table 
          colums={[
              {name: 'Date', tag : 'name'},
              {name: 'Value', tag : 'name'},
          ]}
          datas={[
              {age: '19', name: 'kdk' },
              {age: '18', name: 'ddk' },
          ]}></Table>
      </div> */}
      
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
    </div>
  );
}

export default App;
