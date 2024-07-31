import React from "react";

const Calendar = () => {
  const data = [
    {
      date: "1 January 2024",
      name: "New Year's Day 🥂",
    },
    {
      date: "5 February 2024",
      name: "Constitution Day 📜",
    },
    {
      date: "21 March 2024",
      name: "Benito Juárez's Birthday 👴🏻",
    },
    {
      date: "1 May 2024",
      name: "Labor Day 👷🏻‍♂️",
    },
    {
      date: "16 September 2024",
      name: "Independence Day 🇲🇽",
    },
    {
      date: "2 November 2024",
      name: "Day of the Dead 💀",
    },
    {
      date: "12 December 2024",
      name: "Day of the Virgin of Guadalupe ⛪",
    },
    {
      date: "15 September 2024",
      name: "Mexican Night 🌮",
    },
    {
      date: "20 November 2024",
      name: "Revolution Day ⚔️",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold text-indigo-950 p-5">
        Holidays ✨
      </h2>
      <div className="flex flex-wrap ">
        {data.map((data) => (
          <div className="p-6 m-5 w-52 bg-indigo-200 rounded-2xl shadow-md">
            <p className="font-semibold">{data.date}</p>
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
