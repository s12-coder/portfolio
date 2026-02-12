import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing interfaces',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and user experience',
    color: 'from-fuchsia-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams and with clients',
    color: 'from-emerald-500 to-teal-500'
  },
];

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate web developer with a love for creating innovative digital solutions.
            With expertise in modern web technologies, I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-white">My Tech Stack</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-lg mb-4 font-semibold text-cyan-400">Frontend</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Motion','Rest APIs','Vite', 'Promises / Fetch / Axios','Error Handling',''].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-200 hover:border-cyan-400/50 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg mb-4 font-semibold text-violet-400">Backend</p>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Express.js', 'GraphQL', 'CRUD Operations', 'JWT Authentication',
                  'Password Hashing', 'Modular Architecture'].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-200 hover:border-violet-400/50 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg mb-4 font-semibold text-fuchsia-400">Tools</p>
              <div className="flex flex-wrap gap-3">
                {['Git', 'VSCode', 'Figma', 'npm', 'Node', 'Postman', 'pgAdmin'].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-200 hover:border-fuchsia-400/50 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}