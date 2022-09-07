import React from "react";
import { Navbar } from "..";

function Container({ children }) {
  return (
    <div>
      <div className='flex flex-row items-center h-[10vh] md:pt-0'>
       <Navbar />
      </div>
      {children}
    </div>
  );
}

export default Container;
