# Scheduler Project

Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Final Product

User can load a given days schedule to see booked and available time slots:
!["Gif of loading schedule"](https://github.com/dazycki/scheduler/blob/master/github-images/loading.gif)

User may book, edit, or delete an appointment:
!["Gif of booking, editing and deleteing appointment"](https://github.com/dazycki/scheduler/blob/master/github-images/Modify.gif)

Includes form validation:
!["Image of form validation"](https://github.com/dazycki/scheduler/blob/master/github-images/Validation.png)

Also includes error handling:
!["Gif of error handling"](https://github.com/dazycki/scheduler/blob/master/github-images/Errors.gif)

## Dependencies

- axios
- classname
- node-sass
- normalize.css
- react
- react-dom
- react-hooks-testing-library
- react-scripts
- [scheduler-api](https://github.com/dazycki/scheduler-api)

## Getting Started

- Install all dependencies (using the `npm install` command).
- Download the [scheduler-api](https://github.com/dazycki/scheduler-api)
- Run the web server using the `npm run` command from within the root of the scheduler-api repo.
- Run the web server using the `npm run` command from within the root of the scheduler repo.
- Access the app by navigating to http://localhost:8000/ in a web browser.
