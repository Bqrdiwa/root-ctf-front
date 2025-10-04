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

function Chart({ data }) {
  return (
    <PieChart
      id="pie"
      type="doughnut"
      palette="Soft Pastel"
      dataSource={data}
      className="pie"
    >
      <Series argumentField="rate">
        <Connector visible={true} />
      </Series>

      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
        itemTextPosition="right"
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
