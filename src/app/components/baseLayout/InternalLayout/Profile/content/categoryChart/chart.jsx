import React from 'react';

import PieChart, {
  Legend,
  SeriesTemplate,
   CommonSeriesSettings,
} from 'devextreme-react/chart';



function Chart({ data }) {
  return (
    <PieChart
      id="piecategory"
      dataSource={data}
      palette="Bright"
      className="piecateory"
    >

      <CommonSeriesSettings
        argumentField="category"
        valueField="value"
        type="bar"
        ignoreEmptyPoints={true}
      />

      <SeriesTemplate nameField="category" />

      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
        itemTextPosition="right"
      />

    </PieChart>
  );
}

export default Chart;

