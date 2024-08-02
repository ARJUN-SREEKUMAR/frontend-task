import React from 'react';

const BreakpointShower = () => {
  
  return (
    <div className="fixed top-2 rounded-l-3xl   t right-0 z-50 animate-pulse flex items-center space-x-2 text-xl dark:bg-[#ffffff10] bg-[#00000061]    px-4 py-2">
    
        <span  className={`  sm:block md:hidden `}>
         sm
        </span>
        <span  className={` hidden md:block lg:hidden`}>
         md
        </span>
        <span  className={` hidden lg:block xl:hidden`}>
         lg
        </span>
        <span  className={`hidden xl:block 2xl:hidden`}>
         xl
        </span>
        <span  className={`hidden 2xl:block`}>
         2xl
        </span>


    </div>
  );
};

export default BreakpointShower;
