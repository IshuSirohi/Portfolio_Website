import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Instagram
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // Success message disappears after 3 seconds

    // Clear the form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'ishuchoudhary8476@gmail.com',
      link: '#',
    },
    // {
    //   icon: <Phone size={20} />,
    //   title: 'Phone',
    //   value: '+91 9876543210',
    //   link: 'tel:+919876543210',
    // },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      link: 'https://github.com/IshuSirohi',
    },
    {
      icon: <Linkedin size={20} />,
      link: 'https://www.linkedin.com/in/ishu-choudhary-8b9763330/',
    },
    {
      icon: <Instagram size={20} />,
      link: 'https://instagram.com/choudhary_4589',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
         <p className="text-lg text-gray-300 py-7 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>

            <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, need consultation, or just want to say hello, 
                I'd love to hear from you. I typically respond within 24 hours.
              </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                >
                  <div className="text-blue-400">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-blue-400 rounded-full transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>

            {submitted && (
              <div className="flex items-center gap-2 bg-green-600 text-white p-4 rounded mb-6">
                <CheckCircle size={20} />
                <span>Your message was sent successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                placeholder="Subject"
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                placeholder="Your Message"
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
