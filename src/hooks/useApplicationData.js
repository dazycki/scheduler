import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch((err) => console.log(err.message));
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    setState({
      ...state,
      appointments,
    });

    let days = state.days;

    if (!state.appointments[id].interview) {
      days = state.days.map((day) => {
        const copyOfDay = { ...day };
        if (copyOfDay.appointments.includes(id)) {
          copyOfDay.spots--;
          return copyOfDay;
        } else {
          return copyOfDay;
        }
      });
    }
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState({ ...state, appointments, days });
    });
  }

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = state.days.map((day) => {
      const copyOfDay = { ...day };
      if (copyOfDay.appointments.includes(id)) {
        copyOfDay.spots++;
        return copyOfDay;
      } else {
        return copyOfDay;
      }
    });

    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({ ...state, appointments, days });
    });
  };

  return { state, setDay, bookInterview, cancelInterview };
}
