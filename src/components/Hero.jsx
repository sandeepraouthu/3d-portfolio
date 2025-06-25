import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import selfImg from "../assets/self.jpg";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left Side (Text) */}
        <div className='flex flex-col justify-center items-start mt-5 w-1/2'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'> Raouthu Sandeep</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack Developer <br className='sm:block hidden' />
            skilled in building responsive apps & experiences.
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className='w-1/2 flex justify-end items-center'>
  <img
    src={selfImg}
    alt='Sandeep'
    className='w-[280px] h-[500px] object-cover rounded-3xl shadow-lg border-4 border-[#915EFF]'
  />
</div>

      </div>

      {/* 3D Computer Animation Below */}
      <div className='absolute bottom-0 w-full h-[400px]'>
        <ComputersCanvas />
      </div>

      {/* Scroll Down Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
