// components/Skills.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Waves from './Waves';

const skills = [
  { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500', category: 'frontend' },
  { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-amber-500', category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-emerald-500', category: 'frontend' },
  { name: 'Node.js', level: 80, color: 'from-green-400 to-lime-500', category: 'backend' },
  { name: 'MongoDB', level: 75, color: 'from-green-400 to-green-800', category: 'backend' },
  { name: 'Flutter', level: 75, color: 'from-blue-700 to-blue-500', category: 'frontend' },
  { name: 'Dart', level: 85, color: 'from-blue-900 to-blue-200', category: 'frontend' },
  { name: 'HTML/CSS', level: 95, color: 'from-red-900 to-red-300', category: 'frontend' },
  { name: 'Java', level: 80, color: 'from-pink-300 to-pink-700', category: 'backend' },
  { name: 'C++', level: 80, color: 'from-purple-500 to-pink-500', category: 'backend' },
  { name: 'Laravel-12', level: 70, color: 'from-black to-red-700', category: 'backend' },
  { name: 'PHP', level: 80, color: 'from-blue-400 to-sky-800', category: 'backend' },
];

const categories = ['all', 'frontend', 'backend'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          My <span className="text-rose-500">Skills</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Technologies I've been working with recently
        </motion.p>

        {/* Category Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                activeCategory === category
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Waves />
    </section>
  );
}