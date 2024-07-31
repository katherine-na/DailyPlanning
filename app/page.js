"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardItem from "./components/DashboardItem";
import Calendar from "./components/Calendar";

const App = () => {
  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="sm:w-1/3 xl:w-1/5 bg-white flex items-center">
        <Sidebar changeFilter={changeFilter} />
      </div>
      <div className="w-full pl-7 pt-8">
        <h2 className="text-3xl font-semibold text-indigo-950 p-5">
          Calendar
        </h2>
        <div>
          <DashboardItem />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default App;
