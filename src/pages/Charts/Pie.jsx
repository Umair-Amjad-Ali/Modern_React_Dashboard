import React from "react";

import { pieChartData } from "../../data/dummy";
import { ChartHeader, Pie as PieChart } from "../../components";

const Pie = () => (
  <div className="m-2 md:m-10 mt-20 p-10 bg-white dark:bg-secondary-dark-bg rounded-2xl">
    <ChartHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart
        id="chart-pie"
        data={pieChartData}
        legendVisiblity
        height="full"
      />
    </div>
  </div>
);

export default Pie;
