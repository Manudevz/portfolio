import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, img } from "../constants";

const Tech = () => {
  return (
    <>
    <div className='hidden sm:flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology?.name}>
          <BallCanvas className='bg-secondary' icon={technology?.icon} />
        </div>
      ))}
    </div>
    <div className="flex flex-wrap justify-center sm:hidden ">
      <img src={img} alt="" />
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
