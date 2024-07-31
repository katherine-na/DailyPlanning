import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Función para obtener los días de la semana a partir de la fecha actual
const getWeekDays = (date) => {
  const days = [];
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay()); // Ajustar al inicio de la semana (domingo)

  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    days.push(day);
  }
  console.log(days);
  return days;
};

const DateCarousel = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekDays = getWeekDays(currentDate);

  const handlePrev = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 7);
      return newDate;
    });
  };

  const handleNext = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 7);
      return newDate;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 overflow-x-auto">
        <button onClick={handlePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col w-24 h-24 flex items-center justify-center rounded-lg bg-white`}
          >
            <p className="uppercase font-semibold	">
              {day.toLocaleDateString("es-ES", { weekday: "short" })}
            </p>
            <p>{day.toLocaleDateString("es-ES", { day: "numeric" })}</p>
            <p>{day.toLocaleDateString("es-ES", { month: 'short' })}</p>
          </div>
        ))}
        <button onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight}/>
        </button>
      </div>
    </div>
  );
};

export default DateCarousel;
