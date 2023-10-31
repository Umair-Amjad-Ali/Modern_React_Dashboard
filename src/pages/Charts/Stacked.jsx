import React from "react";

import { ChartHeader, Stacked as StackedChart } from "../../components";

const Stacked = () => (
  <div className="m-2 md:m-10 mt-20 p-10 bg-white dark:bg-secondary-dark-bg rounded-2xl">
    <ChartHeader category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;
