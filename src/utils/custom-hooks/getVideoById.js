import { GET_VIDEO_BY_ID_URL } from "../constants";

const getVideoById = async (id) => {
  const url = GET_VIDEO_BY_ID_URL(id);
  const res = await fetch(url);
  return await res.json();
};
export default getVideoById;
