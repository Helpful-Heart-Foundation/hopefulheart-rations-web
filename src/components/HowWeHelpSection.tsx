
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowWeHelpSection = () => {
  return (
    <section id="how-we-help" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hope-dark">How We Help</h2>
          <p className="text-lg text-hope-dark/80 max-w-3xl mx-auto">
            Our ration kit program is designed to provide comprehensive support to widow women
            and their families, ensuring they have access to essential nutrition and supplies.
          </p>
        </div>

        {/* Ration Kit Information */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-left order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-hope-dark">Our Ration Kits</h3>
            <p className="mb-6 text-hope-dark/80">
              Each carefully assembled ration kit contains essential food items and supplies
              to support a family for a month. We ensure nutritional balance and quality in every kit.
            </p>

            <div className="bg-hope-softGray p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4 text-hope-dark">Each kit typically includes:</h4>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-hope-dark/80">
                  <span className="w-2 h-2 bg-hope-primary rounded-full"></span>
                  Rice (5 kg)
                </li>
                <li className="flex items-center gap-2 text-hope-dark/80">
                  <span className="w-2 h-2 bg-hope-primary rounded-full"></span>
                  Wheat Flour (5 kg)
                </li>
                <li className="flex items-center gap-2 text-hope-dark/80">
                  <span className="w-2 h-2 bg-hope-primary rounded-full"></span>
                  Dal/Lentils (2 kg)
                </li>
                <li className="flex items-center gap-2 text-hope-dark/80">
                  <span className="w-2 h-2 bg-hope-primary rounded-full"></span>
                  Cooking Oil (2 L)
                </li>
                <li className="flex items-center gap-2 text-hope-dark/80">
                  <span className="w-2 h-2 bg-hope-primary rounded-full"></span>
                  Sugar (1 kg)
                </li>
                <li className="flex items-center gap-2 text-hope-dark/80">
                  <span className="w-2 h-2 bg-hope-primary rounded-full"></span>
                  Tea (250 g)
                </li>
                <li className="flex items-center gap-2 text-hope-dark/80">
                  <span className="w-2 h-2 bg-hope-primary rounded-full"></span>
                  Spices Assortment
                </li>
                <li className="flex items-center gap-2 text-hope-dark/80">
                  <span className="w-2 h-2 bg-hope-primary rounded-full"></span>
                  Soap & Hygiene Items
                </li>
              </ul>
            </div>

            <Button className="flex items-center gap-2 bg-hope-primary hover:bg-hope-secondary transition-all">
              Sponsor a Ration Kit <ArrowRight size={16} />
            </Button>
          </div>

          <div className="relative animate-fade-in-right order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Ration kit contents"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-5 -right-5 bg-hope-primary text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">$25</p>
              <p className="text-sm">Feeds a family for a month</p>
            </div>
          </div>
        </div>

        {/* Distribution Process */}
        <div className="bg-hope-softGray rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-semibold mb-8 text-center text-hope-dark">Our Distribution Process</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative animate-fade-in">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-hope-primary rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h4 className="font-semibold text-xl mb-4 text-hope-dark pt-4">Identification</h4>
              <p className="text-hope-dark/80">
                We work with community leaders to identify widow women and families in need of support.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative animate-fade-in">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-hope-primary rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h4 className="font-semibold text-xl mb-4 text-hope-dark pt-4">Preparation</h4>
              <p className="text-hope-dark/80">
                Our volunteers carefully prepare custom ration kits based on family size and specific needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative animate-fade-in">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-hope-primary rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h4 className="font-semibold text-xl mb-4 text-hope-dark pt-4">Distribution</h4>
              <p className="text-hope-dark/80">
                We deliver ration kits directly to beneficiaries' homes, ensuring dignity and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
