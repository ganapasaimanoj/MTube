const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

const YOUTUBE_BASEURL = (type) =>
  `https://youtube.googleapis.com/youtube/v3/${type}?part=snippet%2CcontentDetails%2Cstatistics&`;
export const TITLE_MAX_LENGTH = 55;

export const GET_OPENCAGE_API_URL = (latitude, longitude) => {
  return `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`;
};
export const GET_VIDEOS_API_URL = (countryCode) => {
  return (
    YOUTUBE_BASEURL("videos") +
    `chart=mostPopular&maxResults=50&regionCode=${countryCode}&key=${YOUTUBE_API_KEY}`
  );
};
export const GET_VIDEO_BY_ID_URL = (id) => {
  return YOUTUBE_BASEURL("videos") + `id=${id}&key=${YOUTUBE_API_KEY}`;
};

export const GET_SUBSCRIBER_API_URL = (id) => {
  return YOUTUBE_BASEURL("channels") + `id=${id}&key=${YOUTUBE_API_KEY}`;
};
export const SIDE_NAV = [
  {
    heading: null,
    layout: [
      {
        id: 5300,
        icon_stroke: "assets/icons/home.svg",
        icon_fill: "assets/icons/home-fill.svg",
        route: "/",
        title: "Home",
      },
      {
        id: 5301,
        icon_stroke: "assets/icons/subscribe.svg",
        icon_fill: "assets/icons/subscribe-fill.svg",
        route: "/subscriptions",
        title: "Subscriptions",
      },
      {
        id: 5302,
        icon_stroke: "assets/icons/like.svg",
        icon_fill: "assets/icons/like-fill.svg",
        route: "/liked-videos",
        title: "Liked videos",
      },
    ],
  },
  {
    heading: "Explore",
    layout: [
      {
        id: 5303,
        icon_stroke: "assets/icons/Trending.svg",
        icon_fill: "assets/icons/Trending-fill.svg",
        route: "/trending",
        title: "Trending",
      },
      {
        id: 5304,
        icon_stroke: "assets/icons/films.svg",
        icon_fill: "assets/icons/films-fill.svg",
        route: "/films",
        title: "Films",
      },
      {
        id: 5305,
        icon_stroke: "assets/icons/history.svg",
        icon_fill: "assets/icons/history-fill.svg",
        route: "/watch-later",
        title: "Watch later",
      },
      {
        id: 5306,
        icon_stroke: "assets/icons/news.svg",
        icon_fill: "assets/icons/news-fill.svg",
        route: "/news",
        title: "News",
      },

      {
        id: 5307,
        icon_stroke: "assets/icons/sports.svg",
        icon_fill: "assets/icons/sports-fill.svg",
        route: "/sports",
        title: "Sports",
      },
      {
        id: 5308,
        icon_stroke: "assets/icons/podcasts.svg",
        icon_fill: "assets/icons/podcasts-fill.svg",
        route: "/podcasts",
        title: "Podcasts",
      },
      {
        id: 5309,
        icon_stroke: "assets/icons/learning.svg",
        icon_fill: "assets/icons/learning-fill.svg",
        route: "/learning",
        title: "Learning",
      },
    ],
  },
];
