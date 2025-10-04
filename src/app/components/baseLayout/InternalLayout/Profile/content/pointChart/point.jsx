import React from 'react';
import {
  Chart,
  Series,
  ArgumentAxis,
  Legend,
  Label
} from 'devextreme-react/chart';


function Pint({ data }) {
  return (
  <Chart
  id="chart"
  dataSource={data}

>
  <Series argumentField="date" valueField="score"/>
  <ArgumentAxis>
    <Label
      wordWrap="none"
    />
  </ArgumentAxis>
  <Legend visible={false} />
</Chart>
  );
}


export default Pint;
