const getDuration = (durationString) => {
  const durationRegex = /PT(\d+H)?(\d+M)?(\d+S)?/;
  const matches = durationString.match(durationRegex);

  if (!matches) return null;

  const hours = matches[1] ? parseInt(matches[1], 10) : 0;
  const minutes = matches[2] ? parseInt(matches[2], 10) : 0;
  const seconds = matches[3] ? parseInt(matches[3], 10) : 0;

  let formattedDuration;

  if (hours > 0) {
    formattedDuration = `${hours}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  } else {
    formattedDuration = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return formattedDuration;
};
export default getDuration;
