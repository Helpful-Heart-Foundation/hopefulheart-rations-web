import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to the backend or email)
    alert("Form submitted");
  };

  return (
    <>
         <Navbar />
    <div className="bg-gray-50">
      {/* Contact Form Section */}
      <section className="container mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-hope-dark mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We would love to hear from you! Please fill out the form below to get in touch with us.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hope-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hope-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hope-primary"
              rows={4}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <Button className="bg-hope-primary hover:bg-hope-secondary text-white px-8 py-3 rounded-md">
              Send Message
            </Button>
          </div>
        </motion.form>
      </section>

      {/* Map Section */}
      <section className="container mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-hope-dark mb-4">Our Location</h2>
          <p className="text-lg text-gray-600 mb-6">Visit us at our office for more information.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* Embed Google Map (replace with your NGO's address) */}
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.177116079093!2d-73.98502838443261!3d40.748817179328215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af0711d49d%3A0x13ee0c18e9beebeb!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1582648705471!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
    </>
  );
};

export default ContactPage;
