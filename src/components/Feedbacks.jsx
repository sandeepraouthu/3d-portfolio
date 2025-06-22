import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({
  index,
  title,
  event,
  description,
  image,
  imageTop,
  imageBottom,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full"
  >
    {imageTop && (
      <img
        src={imageTop}
        alt="Top Certificate"
        className="w-full h-40 object-contain mb-4 rounded-lg border"
      />
    )}

    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain mb-4 rounded-lg border"
      />
    )}

    <h3 className="text-white font-bold text-[20px]">{title}</h3>
    <p className="text-secondary text-[14px] mt-1">{event}</p>

    <ul className="mt-4 list-disc list-inside space-y-2 text-white text-[14px]">
      {description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>

    {imageBottom && (
      <img
        src={imageBottom}
        alt="Bottom Certificate"
        className="w-full h-40 object-contain mt-4 rounded-lg border"
      />
    )}
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Header */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Highlights of my journey</p>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>

      {/* Cards */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((item, index) => (
          <AchievementCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
