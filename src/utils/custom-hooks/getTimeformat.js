const getTimeformat = (dateString) => {
  const currentDate = new Date();
  const inputDate = new Date(dateString);
  const timeDifference = currentDate - inputDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const getTimeUnit = (value, unit) =>
    `${value} ${unit}${value === 1 ? "" : "s"} ago`;

  if (years > 0) {
    return getTimeUnit(years, "year");
  } else if (months > 0) {
    return getTimeUnit(months, "month");
  } else if (days > 0) {
    return days === 1 ? "Yesterday" : getTimeUnit(days, "day");
  } else if (hours > 0) {
    return getTimeUnit(hours, "hour");
  } else if (minutes > 0) {
    return getTimeUnit(minutes, "minute");
  } else {
    return "Just now";
  }
};

export default getTimeformat;
