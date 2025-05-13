import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 - Present",
    role: "Student",
    company: "National University of Battambang",
    description: "Studying Information Technology at the National University of Battambang.",
  },
  {
    year: "2025",
    role: "Student",
    company: "Sala IT",
    description: "Learning Full-Stack App Development.",
  },
  {
    year: "2023 - 2024",
    role: "Student",
    company: "Master IT",
    description: "Learn to become a full-stack developer.",
  },
  {
    year: "2023",
    role: "Student",
    company: "Kdol Doun Teav High School",
    description: "Obtained a Diploma from Kdol Doun Teav High School.",
  },
];

const skills = [
  { name: "React.js", bgLight: "bg-sky-200", bgDark: "bg-sky-900", textLight: "text-sky-600", textDark: "text-sky-300" },
  { name: "JavaScript", bgLight: "bg-yellow-200", bgDark: "bg-yellow-500", textLight: "text-orange-600", textDark: "text-black" },
  { name: "NodeJS", bgLight: "bg-green-500", bgDark: "bg-green-900", textLight: "text-green-900", textDark: "text-green-300" },
  { name: "Tailwind CSS", bgLight: "bg-emerald-100", bgDark: "bg-emerald-900", textLight: "text-emerald-600", textDark: "text-emerald-300" },
  { name: "MongoDB", bgLight: "bg-green-300", bgDark: "bg-green-900", textLight: "text-green-700", textDark: "text-green-500" },
  { name: "Flutter", bgLight: "bg-blue-200", bgDark: "bg-blue-900", textLight: "text-blue-900", textDark: "text-blue-300" },
  { name: "Dart", bgLight: "bg-blue-500", bgDark: "bg-blue-400", textLight: "text-white", textDark: "text-blue-900" },
  { name: "Java", bgLight: "bg-red-300", bgDark: "bg-red-700", textLight: "text-white", textDark: "text-white" },
  { name: "C++", bgLight: "bg-orange-300", bgDark: "bg-orange-600", textLight: "text-orange-900", textDark: "text-orange-100" },
  { name: "Docker", bgLight: "bg-rose-200", bgDark: "bg-rose-500", textLight: "text-red-400", textDark: "text-red-700" },
  { name: "Git/Github", bgLight: "bg-gray-400", bgDark: "bg-gray-500", textLight: "text-white", textDark: "text-white" },
  { name: "Html/Css", bgLight: "bg-pink-300", bgDark: "bg-orange-700", textLight: "text-red-800", textDark: "text-white" },

];

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          About <span className="text-rose-500">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Here's a brief overview of my background and experience
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Who I Am
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am a Junior Front-End Web Developer specializing in creating
              dynamic and user-friendly websites. My primary focus is on
              delivering engaging experiences that users enjoy. Currently, I am
              enhancing my skills in API integration and state management with
              Redux. I am eager to contribute to innovative projects and open to
              new job opportunities.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`px-4 py-2 ${skill.bgLight} dark:${skill.bgDark} ${skill.textLight} dark:${skill.textDark} rounded-sm shadow-lg font-medium`}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              My Experience
            </h3>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-rose-500 border-4 border-white dark:border-gray-800 top-1"></div>

                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-sm font-medium text-rose-500">
                      {exp.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mt-1 mb-2">
                      {exp.role}
                    </h4>
                    <h5 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                      {exp.company}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}