import React from "react";
import ChartBar from "./ChartBar";
import "../../styles/chart.css";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValues);

  console.log("in chart.js - "  +totalMax)

  return (
    <div className="chart">
      {props.dataPoints.map( dataPoint => 
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
        />
      )}
    </div>
  );
}

export default Chart;
