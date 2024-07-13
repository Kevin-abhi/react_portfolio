import { EXPERIENCES } from "../constants"
import { delay, motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="pb-4 border-b border-neutral-50-900" id="education">
        <motion.h2
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}   
            className="my-20 text-4xl text-center">Education</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) =>(
                <div key={index} className="flex flex-wrap mb-8 flx lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience.role} -{" "}
                            <span className="text-sm text-purple-100">
                                {experience.company}
                            </span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
      
    </div>
  );
};

export default Experiences;
