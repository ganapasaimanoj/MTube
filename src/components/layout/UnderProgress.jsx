import React from "react";

const UnderProgress = ({ page }) => {
  return (
    <div className='flex flex-col mt-24 items-center'>
      <img alt='devImg' src='assets/dev.png' className='w-[20%]' />
      <h3 className='text-2xl font-semibold '>
        {`Thank you for visiting. ${page ? page : "page"} under progress.`}
      </h3>
    </div>
  );
};

export default UnderProgress;
