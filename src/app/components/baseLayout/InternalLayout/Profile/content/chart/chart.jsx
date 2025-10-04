import React from 'react';

import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
  Export
} from 'devextreme-react/pie-chart';

// import { populationByRegions } from './data.js';


function Chart({ data }) {
  return (
    <PieChart
      id="pie"
      type="doughnut"
      palette="Soft Pastel"
      dataSource={data}
    >
      <Series argumentField="difficulty">
        <Connector visible={true} />
      </Series>

      <Legend
        horizontalAlignment="right"
        verticalAlignment="top"
      />

      <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
        <Format type="millions" />
      </Tooltip>

    </PieChart>
  );
}

function customizeTooltip(arg) {
  return {
    text: `${(arg.percent * 100).toFixed()}%`
  };
};

export default Chart;
