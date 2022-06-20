import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { selectedDay, setDay, days } = props;
  const days = days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={selectedDay === day.name}
        setDay={setDay}
      />
    );
  });

  return <ul>{days}</ul>;
}
