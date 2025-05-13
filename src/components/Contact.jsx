import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSend, FiMail, FiPhone, FiGithub, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'nounthanith99@gmail.com'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try my social media links below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          Get In <span className="text-rose-500">Touch</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </motion.p>

        {/* Contact Info and Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <div className="bg-rose-100 dark:bg-rose-900 p-3 rounded-full mb-4">
                <FiMail className="text-rose-500 dark:text-rose-300 text-2xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Email</h3>
              <a 
                href="mailto:nounthanith99@gmail.com" 
                className="text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors"
              >
                nounthanith99@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <div className="bg-rose-100 dark:bg-rose-900 p-3 rounded-full mb-4">
                <FiPhone className="text-rose-500 dark:text-rose-300 text-2xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Phone</h3>
              <a 
                href="tel:+855 93939290" 
                className="text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors"
              >
                093 939 290
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <div className="bg-rose-100 dark:bg-rose-900 p-3 rounded-full mb-4">
                <FiFacebook className="text-rose-500 dark:text-rose-300 text-2xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/nounthanith" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-2xl" />
                </a>
                <a 
                  href="https://web.facebook.com/tha.nith.549" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook className="text-2xl" />
                </a>
                <a 
                  href="https://www.instagram.com/tonq_tong/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors"
                  aria-label="Facebook"
                >
                  <FiInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-rose-500 bg-transparent placeholder-transparent"
                placeholder=" "
                required
              />
              <label 
                htmlFor="name" 
                className="absolute left-4 -top-3 px-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-rose-500"
              >
                Your Name
              </label>
            </div>
            
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-rose-500 bg-transparent placeholder-transparent"
                placeholder=" "
                required
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 -top-3 px-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-rose-500"
              >
                Email Address
              </label>
            </div>
            
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="peer w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-rose-500 bg-transparent placeholder-transparent"
                placeholder=" "
                required
              />
              <label 
                htmlFor="message" 
                className="absolute left-4 -top-3 px-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-rose-500"
              >
                Your Message
              </label>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <FiSend className="ml-2" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}