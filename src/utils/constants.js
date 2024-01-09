const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

const YOUTUBE_BASEURL = (type) =>
  `https://youtube.googleapis.com/youtube/v3/${type}?part=snippet%2CcontentDetails%2Cstatistics&`;

export const TITLE_MAX_LENGTH = 55;

export const SEARCH_URL = (query) =>
  `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;

export const GET_OPENCAGE_API_URL = (latitude, longitude) =>
  `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`;

export const GET_VIDEOS_API_URL = (countryCode) =>
  YOUTUBE_BASEURL("videos") +
  `chart=mostPopular&maxResults=50&regionCode=${countryCode}&key=${YOUTUBE_API_KEY}`;

export const GET_VIDEO_BY_ID_URL = (id) =>
  YOUTUBE_BASEURL("videos") + `id=${id}&key=${YOUTUBE_API_KEY}`;

export const GET_SUBSCRIBER_API_URL = (id) =>
  YOUTUBE_BASEURL("channels") + `id=${id}&key=${YOUTUBE_API_KEY}`;

export const SEARCH_RESULTS_URL = (query) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}=${YOUTUBE_API_KEY}`;
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
        route: "/under-progress",
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
        route: "/under-progress",
        title: "Trending",
      },
      {
        id: 5304,
        icon_stroke: "assets/icons/films.svg",
        icon_fill: "assets/icons/films-fill.svg",
        route: "/under-progress",
        title: "Films",
      },
      {
        id: 5305,
        icon_stroke: "assets/icons/history.svg",
        icon_fill: "assets/icons/history-fill.svg",
        route: "/under-progress",
        title: "Watch later",
      },
      {
        id: 5306,
        icon_stroke: "assets/icons/news.svg",
        icon_fill: "assets/icons/news-fill.svg",
        route: "/under-progress",
        title: "News",
      },

      {
        id: 5307,
        icon_stroke: "assets/icons/sports.svg",
        icon_fill: "assets/icons/sports-fill.svg",
        route: "/under-progress",
        title: "Sports",
      },
      {
        id: 5308,
        icon_stroke: "assets/icons/podcasts.svg",
        icon_fill: "assets/icons/podcasts-fill.svg",
        route: "/under-progress",
        title: "Podcasts",
      },
      {
        id: 5309,
        icon_stroke: "assets/icons/learning.svg",
        icon_fill: "assets/icons/learning-fill.svg",
        route: "/under-progress",
        title: "Learning",
      },
    ],
  },
];
export const COMMENTS = [
  {
    name: "Kushi",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Rony",
        comment: "lorem dolor tolant etonal",
        replies: [
          {
            name: "Kushi",
            comment:
              " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            replies: [],
          },
        ],
      },
      {
        name: "Davey",
        comment:
          '"de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
        replies: [],
      },
    ],
  },
  {
    name: "Rony",
    comment: "It is a long established fact that a reader",
    replies: [
      {
        name: "Sammy",
        comment:
          "here are many variations of passages of Lorem Ipsum available",
        replies: [],
      },
    ],
  },
  {
    name: "Ruby",
    comment:
      "The standard chunk of Lorem Ipsum used since the 1500s is below for those interested.",
    replies: [],
  },
  {
    name: "Tom",
    comment: "lorem ipsum randon etica",
    replies: [
      {
        name: "Lorena",
        comment:
          '"de Finibus Bonorum et Malorum" by Cicero are also in their exact original form',
        replies: [],
      },
    ],
  },
  { name: "Sammy", comment: "lorem ipsum randon etica", replies: [] },
];
export const OFFSET_LIVE_CHAT = 35;
