export function getAppointmentsForDay(state, day) {
  const results = [];
  const matchDay = state.days.find((item) => item.name === day);

  if (matchDay) {
    const appointmentIDs = matchDay.appointments;
    for (const id of appointmentIDs) {
      results.push(state.appointments[id]);
    }
  }

  return results;
}
