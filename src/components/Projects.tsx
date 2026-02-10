import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Campus-Connnect ',
    description: 'A full-stack website that helps university students connect on campus by linking through clubs and events',
    image: 'https://images.unsplash.com/photo-1760237877084-189a676623ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBtb2NrdXB8ZW58MXx8fHwxNzcwNTY5NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'MongoDB', 'graphQL', 'Redux', "tailwindCSS"],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1.demo.com',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization dashboard with advanced filtering and export capabilities.',
    image: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwNjA5NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2.demo.com',
    gradient: 'from-violet-500 to-purple-500'
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            My Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent works that showcase my skills and passion for web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                  
                  {/* Overlay with links on hover */}
                  <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-full mb-4 self-start`}>
                    Featured
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}