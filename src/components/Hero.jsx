import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00c3f8]' />
          <div className='w-2 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
              <span className='text-[#4da0ee]'>Enmanuel Marcano C.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 md:w-4/5 lg:w-3/5`}>
          Desarrollador con experiencia tanto en el desarrollo de aplicaciones web frontend, como en el diseño y construcción de APIs  y servicios backend.
          </p>
        </div>
      </div>


      <div className='absolute md:bottom-20 bottom-14 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-2xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
