const getViewsCount = (views) => {
  views = Number(views);

  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M views`;
  } else if (views >= 10000) {
    return `${(views / 1000).toFixed(1)}K views`;
  } else {
    return `${views} views`;
  }
};

export default getViewsCount;
