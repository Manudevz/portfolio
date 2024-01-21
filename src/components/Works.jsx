import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { sitioWeb } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  developed,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
      style={{position: "relative",}}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full sm:h-[476px]'
      >
        <div className='relative w-full h-[230px]'>
          <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl object-left'
          />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {  developed &&    
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='bg-white  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
              <img
               src={sitioWeb}
               alt='source code'
               className='w-1/2 h-1/2 object-contain  w-25 h-25 rounded'
               />
            </div>
            }
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div style={{position: 'absolute', bottom:' 1.2rem'}}  className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Desarrollos.</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Dale un vistazo a alguno de los siguientes proyectos, en ellos he usado conocimientos en diversas tecnologias. 
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
