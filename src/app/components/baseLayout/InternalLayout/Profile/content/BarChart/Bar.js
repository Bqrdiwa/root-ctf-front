import React from 'react';
import { Chart, Series, CommonSeriesSettings, Legend, Export, Tooltip, Title } from 'devextreme-react/chart';


function customizeTooltip(arg) {
  return {
    text: `${arg.valueText}`
  };
}



function get_data(data) {
  List(data);
  const chartData = data.map(item => {
    const tempData = { category: item.category }
    Object.keys(item).map(key => {
      if (key !== 'category') {
        tempData[key] = item[key].val
      }
    })
    return tempData
  })
  return chartData;
}

let seriesList = [];
function List(data) {
  seriesList = [];
  var id=0;
  if (data.length > 0) {
    Object.keys(data[0]).map(key => {
      if (key !== 'category') {
        seriesList.push({
          id:id++,
          valueField: key,
          name: data[0][key].display
        })
      }
    })
  }
  return seriesList;
}


function BarChart({ data }) {
  return (
    <Chart
      id="chart"
      dataSource={get_data(data)}
    >

      <CommonSeriesSettings argumentField="category"
        type="fullstackedbar"
        barWidth="15"
      />


      {seriesList.map(item => (
        <Series key={item.id} valueField={item.valueField} name={item.name} />
      ))}


      <Legend verticalAlignment="buttom"
        horizontalAlignment="center"
        itemTextPosition="right"
      />

      <Tooltip
        enabled={true}
        customizeTooltip={customizeTooltip}
      />
    </Chart>
  );
}



export default BarChart;
