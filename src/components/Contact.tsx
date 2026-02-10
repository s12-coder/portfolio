import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/xreaebwa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again later.");
    }
  } catch (error) {
    alert("Network error. Please try again later.");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-400 text-lg mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:your.email@example.com"
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 text-white p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-lg">seifsariedd@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 text-white p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-violet-500/50 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-lg">+961 81-489651</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 text-white p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-lg">Beirut, Lebanon</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-6">
                <p className="text-gray-400 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/s12-coder"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-500/50 transition-all"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/seif-sarieddine-3abb78370/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-violet-500/50 transition-all"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="example example"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-8"></div>
          <p className="text-gray-500">
            © 2026 Seif Sarieddine. Built to help build and create.
          </p>
        </motion.div>
      </div>
    </section>
  );
}