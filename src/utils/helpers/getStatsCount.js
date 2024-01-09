const getStatsCount = (statsCount, statType) => {
  statsCount = Number(statsCount);

  if (statsCount >= 1000000) {
    return `${Math.round(statsCount / 1000000)}M ${
      statType === "views"
        ? "views"
        : statType === "subscribers"
        ? "subscribers"
        : ""
    }`;
  } else if (statsCount >= 1000) {
    return `${
      statsCount <= 10000
        ? Math.round(statsCount / 1000).toFixed(1)
        : Math.round(statsCount / 1000)
    }K ${
      statType === "views"
        ? "views"
        : statType === "subscribers"
        ? "subscribers"
        : ""
    }`;
  } else {
    return `${statsCount} ${
      statType === "views"
        ? "views"
        : statType === "likes"
        ? "likes"
        : "subscribers"
    }`;
  }
};

export default getStatsCount;
