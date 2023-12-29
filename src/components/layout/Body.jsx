import MainContainer from "../main-container/MainContainer";
import Sidebar from "../sidebar/Sidebar";

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
