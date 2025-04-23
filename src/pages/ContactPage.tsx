
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const NGO_ADDRESS = {
  name: "HopefulHeart Foundation",
  street: "123 Hope Street",
  city: "Compassion City, CC 12345",
  country: "United States",
  email: "info@hopefulheart.org",
  phone: "+1 (555) 123-4567",
};

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.177116079093!2d-73.98502838443261!3d40.748817179328215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af0711d49d%3A0x13ee0c18e9beebeb!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1582648705471!5m2!1sen!2sus";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 1800);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-start">
        <div className="container mx-auto px-4 py-10 w-full max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-hope-dark mb-3 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
            We would love to hear from you. Reach out to us with questions, support, or collaboration ideas!
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-10 mt-10">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col justify-between min-w-0"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-hope-primary focus:outline-none text-base"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-hope-primary focus:outline-none text-base"
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-hope-primary focus:outline-none resize-none text-base"
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-hope-primary hover:bg-hope-secondary transition-colors w-full"
                disabled={submitted}
              >
                {submitted ? "Sending..." : "Send Message"}
              </Button>
              {submitted && (
                <div className="text-green-700 text-center py-2 font-medium transition-all">
                  Message sent! Thank you for contacting us.
                </div>
              )}
            </form>
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center text-hope-dark mb-4">
                  <MapPin className="mr-2" />
                  <span className="font-semibold">{NGO_ADDRESS.name}</span>
                </div>
                <div className="text-gray-700 flex items-start mb-1">
                  <span className="min-w-[24px] mr-2 flex justify-center">
                    <MapPin size={20} />
                  </span>
                  <span>
                    {NGO_ADDRESS.street}<br />
                    {NGO_ADDRESS.city}<br />
                    {NGO_ADDRESS.country}
                  </span>
                </div>
                <div className="text-gray-700 flex items-center mb-1">
                  <span className="min-w-[24px] mr-2 flex justify-center">
                    <Mail size={20} />
                  </span>
                  <span>{NGO_ADDRESS.email}</span>
                </div>
                <div className="text-gray-700 flex items-center">
                  <span className="min-w-[24px] mr-2 flex justify-center">
                    <Phone size={20} />
                  </span>
                  <span>{NGO_ADDRESS.phone}</span>
                </div>
              </div>
              <div className="w-full h-52 md:h-60 rounded-lg overflow-hidden mt-auto shadow">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  title="NGO Location"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

