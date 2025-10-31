// This middleware restricts access to the site based on the current day and time
module.exports = function workingHours(req, res, next) {
  // Get the current date and time
  const now = new Date();

  // getDay(): Sunday = 0, Monday = 1, ..., Saturday = 6
  const day = now.getDay();

  // getHours(): returns hours in 24-hour format (0–23)
  const hour = now.getHours();

  // Define allowed range (Monday–Friday, 9:00–17:00)
  const isWeekday = day >= 1 && day <= 5;
  const isWithinWorkingHours = hour >= 9 && hour < 17;

  // If the request is within allowed days and hours, continue to the next function
  if (isWeekday && isWithinWorkingHours) {
    return next();
  }

  // If not, block access and show the "closed" page
  res.status(403).render('closed', {
    message: 'This website is available Monday to Friday, from 09:00 to 17:00 only.'
  });
};
