import { useEffect } from "react";
import { SEARCH_RESULTS_URL } from "../../utils/constants";

const Results = () => {
  const searchResults = async () => {
    const res = await fetch(SEARCH_RESULTS_URL);
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    searchResults();
  }, []);
  return <div>Results</div>;
};

export default Results;
