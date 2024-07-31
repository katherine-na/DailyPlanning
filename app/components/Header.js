import React from "react";

const Header = () => {
  const daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December ",
  ];

  const date = () => {
    const currentDate = new Date();
    const dayWeek = daysWeek[currentDate.getDay()];
    const day = currentDate.getDate();
    const mounth = months[currentDate.getMonth()];

    return `${dayWeek} ${day} ${mounth}`;
  };

  return (
    <header className="container mx-auto pt-8">
      <div className="">
        <h1 className="text-3xl font-semibold text-indigo-950 uppercase tracking-[]0.3em pb-2">
          Today
        </h1>
      </div>
      <div>
        <p className="pb-10 text-indigo-950">{date()}</p>
      </div>
    </header>
  );
};

export default Header;
