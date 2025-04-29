
import { Heart, Gift, HandHeart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hope-dark">About Hopefulheart Foundation</h2>
          <p className="text-lg text-hope-dark/80">
            Founded with compassion and care, our mission is to provide essential support to widow women
            through nutritious ration kits, helping them achieve stability and dignity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column with image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Women community support"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-hope-softPink rounded-lg p-6 shadow-lg w-64">
              <p className="font-poppins font-medium italic text-hope-dark">
                "Every ration kit represents hope and dignity for a family in need."
              </p>
              <p className="text-sm text-hope-dark/70 mt-2">- Founder, HopefulHeart Foundation</p>
            </div>
          </div>

          {/* Right column with text and values */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-hope-dark">Our Story</h3>
            <p className="mb-6 text-hope-dark/80">
              Hopeful Heart Foundation (HHF) was founded with a deep understanding of the hardships faced by those in need. Our founder, who grew up in a large family with limited resources, experienced the harsh realities of poverty firsthand. From a young age, he worked various jobs to
              support his family, witnessing the stark inequalities in society. His journey, filled with challenges like struggling to afford education and witnessing others’ difficulties in celebrating occasions like Ramadan, fueled his determination to make a difference. Officially established
              on January 11, 2024, but rooted in nearly two decades of personal efforts, HHF was created to provide support and dignity to those who need it most. Our mission is to prevent others from enduring the same struggles by offering assistance that allows them to live without
              relying on anyone but Allah.
            </p>
            <p className="mb-8 text-hope-dark/80">
              HHF focuses on empowering individuals and families, ensuring that no parent has to struggle silently or feel the burden of providing for their loved ones.
              Through acts of kindness and generosity, HHF aims to create a future where everyone can live with dignity, security, and hope, fulfilling our founder’s vision of a compassionate and supportive community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-card-gradient p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-full bg-hope-softPink flex items-center justify-center mb-4 group-hover:bg-hope-primary transition-colors">
                  <Heart className="text-hope-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-hope-dark">Compassion</h4>
                <p className="text-sm text-hope-dark/80">
                  We approach our work with deep empathy and care for every individual we serve.
                </p>
              </div>

              <div className="bg-card-gradient p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-full bg-hope-softPink flex items-center justify-center mb-4 group-hover:bg-hope-primary transition-colors">
                  <Gift className="text-hope-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-hope-dark">Dignity</h4>
                <p className="text-sm text-hope-dark/80">
                  We believe in preserving and enhancing the dignity of every person we support.
                </p>
              </div>

              <div className="bg-card-gradient p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-full bg-hope-softPink flex items-center justify-center mb-4 group-hover:bg-hope-primary transition-colors">
                  <HandHeart className="text-hope-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-hope-dark">Community</h4>
                <p className="text-sm text-hope-dark/80">
                  We foster a sense of belonging and mutual support among all those we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
