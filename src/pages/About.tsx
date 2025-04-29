
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Trophy } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | HopefulHeart Foundation";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Main Hero Section */}
      <section className="py-16 bg-hero-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-hope-dark animate-fade-in">About HopefulHeart Foundation</h1>
            <p className="text-lg md:text-xl text-hope-dark/80 mb-8 animate-fade-in">
              Empowering widow communities through compassion, support, and sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6 text-hope-dark">Our History</h2>
              <p className="mb-6 text-hope-dark/80">
                Hopeful Heart Foundation (HHF) was founded with a deep understanding of the hardships faced by those in need. Our founder,
                who grew up in a large family with limited resources, experienced the harsh realities of poverty firsthand. From a young age,
                he worked various jobs to support his family, witnessing the stark inequalities in society. His journey, filled with challenges
                like struggling to afford education and witnessing others’ difficulties in celebrating occasions like Ramadan, fueled his determination to make a difference.
              </p>
              <p className="mb-8 text-hope-dark/80">
                Officially established on January 11, 2024, but rooted in nearly two decades of personal efforts, HHF was created to provide
                support and dignity to those who need it most. Our mission is to prevent others from enduring the same struggles by offering
                assistance that allows them to live without relying on anyone but Allah.
              </p>
              <p className="text-hope-dark/80">
                HHF focuses on empowering individuals and families, ensuring that no parent has to struggle silently or feel the burden
                of providing for their loved ones. Through acts of kindness and generosity, HHF aims to create a future where everyone
                can live with dignity, security, and hope, fulfilling our founder’s vision of a compassionate and supportive community.
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000"
                alt="Group of women supporting each other"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-48">
                <p className="font-medium text-hope-primary text-center">Since 2015</p>
                <p className="text-sm text-hope-dark/70 text-center">Making a difference</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-hope-softGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-hope-dark">Our Core Values</h2>
            <p className="text-lg text-hope-dark/80">
              The principles that guide everything we do at HopefulHeart Foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-scale-in bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-hope-softPink flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-hope-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-hope-dark">Compassion</h3>
                <p className="text-hope-dark/80">
                  We approach every interaction with kindness, empathy, and a genuine desire to understand
                  and address the needs of those we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-scale-in delay-100 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-hope-softPink flex items-center justify-center mx-auto mb-6">
                  <Users className="text-hope-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-hope-dark">Dignity</h3>
                <p className="text-hope-dark/80">
                  We respect the inherent worth of every individual and strive to preserve and enhance
                  their dignity through all our programs and interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-scale-in delay-200 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-hope-softPink flex items-center justify-center mx-auto mb-6">
                  <Trophy className="text-hope-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-hope-dark">Excellence</h3>
                <p className="text-hope-dark/80">
                  We are committed to delivering high-quality services and continuously improving our
                  programs to create the greatest possible impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-hope-dark">Our Team</h2>
            <p className="text-lg text-hope-dark/80 max-w-3xl mx-auto">
              Meet the dedicated individuals whose passion and expertise drive our mission forward every day.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-fade-in">
              <img
                src="/images/team.png"
                alt="Sarah Johnson"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-hope-dark">Mohammed Zubair</h3>
                <p className="text-hope-primary font-medium mb-3">Founder & President</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-fade-in delay-200">
              <img
                src="/images/team2.png"
                alt="Amina Patel"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-hope-dark">Habeeb Mohd Rafayee</h3>
                <p className="text-hope-primary font-medium mb-3">Vice President</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-fade-in delay-100">
              <img
                src="/images/team5.jpeg"
                alt="David Chen"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-hope-dark">Mohammed Aziz</h3>
                <p className="text-hope-primary font-medium mb-3">Secretary</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-fade-in delay-200">
              <img
                src="/images/team3.png"
                alt="Amina Patel"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-hope-dark">Husmani Mohd Arbaz</h3>
                <p className="text-hope-primary font-medium mb-3">Treasurer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
