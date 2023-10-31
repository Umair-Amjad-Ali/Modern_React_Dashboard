import React from "react";

import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-20 p-10 bg-white dark:bg-secondary-dark-bg rounded-2xl ">
      <Header catagory="Chart" title="Inflation" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
