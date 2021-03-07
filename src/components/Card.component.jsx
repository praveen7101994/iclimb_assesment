import React from "react";

const Card = ({ lectures, day }) => {
  //   const ObjArray = lectures.weekdays;
  return (
    <div>
      <h1>this is the card component</h1>
      {lectures.weekdays
        .filter((item) => item.day === lectures.day)
        .map((it) => (
          <h1>{it.day}</h1>
        ))}
    </div>
  );
};

export default Card;
