import React, { useState } from "react";

const DateScrollPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const startDate = new Date(); // Set your start date here
  const endDate = new Date(); // Set your end date here
  endDate.setDate(endDate.getDate() + 30); // Set the range (e.g., 30 days)

  const dateArray: Date[] = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ display: "flex", overflowX: "auto", padding: "20px" }}>
      {dateArray.map((date, index) => (
        <div
          key={index}
          style={{
            margin: "0 10px",
            border: selectedDate.getTime() === date.getTime() ? "2px solid blue" : "none",
            borderRadius: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleDateClick(date)}
        >
          {date.toLocaleDateString()}
        </div>
      ))}
    </div>
  );
};

export default DateScrollPicker;
