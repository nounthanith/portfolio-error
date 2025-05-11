// components/About.jsx
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 - Present",
    role: "Student",
    company: "Nubb( Nation Univercity of Battambang. )",
    description: "Information Techologyat at Nation Univercity of Battambang.",
  },
  {
    year: "2025 - Present",
    role: "Student",
    company: "Sala IT",
    description: "Learn Full-stack Appdeveloper",
  },
  {
    year: "2023 - 2024",
    role: "Student",
    company: "Master IT",
    description: "Lern a full stack developer.",
  },
  {
    year: "2020 - 2023",
    role: "Student",
    company: "Kdol Doun Teav",
    description: "Diploma Certified at Kdol Doun Teav Height School.",
  },
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

            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-300 rounded-full font-medium"
              >
                React.js
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-yellow-200 dark:bg-yellow-500 text-orange-600 dark:text-black rounded-full font-medium"
              >
                JavaScript
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full font-medium"
              >
                Tailwind CSS
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-green-300 dark:bg-green-900 text-white dark:text-green-500 rounded-full font-medium"
              >
                MongoDB
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-green-500 dark:bg-green-900 text-green-900 dark:text-green-300 rounded-full font-medium"
              >
                NodeJS
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-300 rounded-full font-medium"
              >
                Flutter
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-blue-500 dark:bg-blue-400 text-white dark:text-blue-900 rounded-full font-medium"
              >
                Dart
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-red-500 dark:bg-red-700 text-white dark:text-white rounded-full font-medium"
              >
                Java
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-orange-500 dark:bg-orange-700 text-orange-200 dark:text-orange-200 rounded-full font-medium"
              >
                C++
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-orange-300 dark:bg-stone-500 text-black dark:text-white rounded-full font-medium"
              >
                Html/Css
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-gray-400 dark:bg-gray-500 text-white dark:text-white rounded-full font-medium"
              >
                Git/Github
              </motion.div>
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
