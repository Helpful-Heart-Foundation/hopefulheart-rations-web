
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";


const NGO_ADDRESS = {
  name: "18-12-418/O/35/12/A, Omer Colony, ",
  street: "Hafiz Baba Nagar,",
  city: " Hyderabad, Telangana 500005",
  country: "India",
  email: "hopefulheart1993@gmail.com",
  phone: "+91 90639 06886",
};

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.818907667748!2d78.48535847577817!3d17.32428450461866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb994b956275a9%3A0x7d02ad640c27d091!2sHopeful%20Heart%20Foundation!5e0!3m2!1sen!2sin!4v1745920439442!5m2!1sen!2sin";

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
      <div className="min-h-screen bg-gray-50 flex flex-col justify-start p-10">
        <div className="container mx-auto px-4 py-10 w-full max-w-5xl">
          <h1 className="text-4xl md:text-4xl font-bold text-hope-dark mb-3 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
            We would love to hear from you. Reach out to us with questions, support, or collaboration ideas!
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-10 mt-10">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col justify-between min-w-0"
              style={{width:'20rem'}}
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
                  <MapPin className="mr-1" size={26} />
                  <span className="font-semibold" style={{fontSize:'1.2rem'}}>{NGO_ADDRESS.name}</span>
                </div>
                <div className="text-gray-700 flex items-start mb-1">
                  <span className="min-w-[24px] mr-2 flex justify-center">
                    <MapPin size={24} />
                  </span>
                  <span style={{fontSize:'1.2rem'}}>
                    {NGO_ADDRESS.street}<br />
                    {NGO_ADDRESS.city}<br />
                    {NGO_ADDRESS.country}
                  </span>
                </div>
                <div className="text-gray-700 flex items-center mb-1">
                  <span className="min-w-[24px] mr-2 flex justify-center">
                    <Mail size={24} />
                  </span>
                  <span style={{fontSize:'1.2rem'}} >{NGO_ADDRESS.email}</span>
                </div>
                <div className="text-gray-700 flex items-center">
                  <span className="min-w-[24px] mr-2 flex justify-center">
                    <Phone size={24} />
                  </span>
                  <span style={{fontSize:'1.2rem'}} >{NGO_ADDRESS.phone}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="w-full h-80 rounded-lg overflow-hidden mt-auto shadow">
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
      <Footer/>
    </>
  );
}

