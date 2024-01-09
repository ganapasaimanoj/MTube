const getSearchQueryFormat = (query) =>
  query.includes(" ") ? query.split(" ").join("+") : query;

export default getSearchQueryFormat;
