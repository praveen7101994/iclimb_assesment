import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "../src/App.css";
import Card from "./components/Card.component";

import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  let request_date = `${startDate.getDate()}/${
    startDate.getMonth() + 1
  }/${startDate.getFullYear()}`;

  const [lectures, setLectures] = useState({});

  useEffect(() => {
    console.log(request_date);
    const fetchFunc = async () => {
      const response = await fetch(
        "https://www.presencex.com/REVA/school/gettimetable",
        {
          headers: {
            request_date,
            section: "A",
            semester: 3,
          },
        }
      );
      const resJson = await response.json();
      setLectures(resJson);
      await console.log("Lectures", lectures);
    };
    fetchFunc();
  }, [startDate]);

  return (
    <div className="container">
      <DatePicker
        dateFormat="dd/yyyy/MM"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <Card lectures={lectures} />
    </div>
  );
};

export default App;
