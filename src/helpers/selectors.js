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

export function getInterviewersForDay(state, day) {
  const results = [];
  const matchDay = state.days.find((item) => item.name === day);

  if (matchDay) {
    const interviewerIDs = matchDay.interviewers;
    for (const id of interviewerIDs) {
      results.push(state.interviewers[id]);
    }
  }

  return results;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];

  return { ...interview, interviewer: interviewer };
}
