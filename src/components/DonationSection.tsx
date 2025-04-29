
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>("");

  const predefinedAmounts = [25, 50, 100, 250];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseInt(value));
    } else {
      setSelectedAmount(0);
    }
  };

  const handleAmountSelection = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  return (
    <section id="donation" className="section-padding bg-hope-softPurple">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-hope-primary flex items-center justify-center mb-6 animate-float">
            <Heart className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hope-dark">Make a Difference Today</h2>
          <p className="text-lg text-hope-dark/80 max-w-2xl mx-auto">
            Your donation helps us provide essential ration kits to widow women and their families.
            Every contribution, no matter the size, brings hope and dignity to those in need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Donation Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 animate-scale-in">
            <img
              src="/images/qr_code.jpeg"
              alt="GPay Scanner"
              className="w-full h-auto mx-auto"
            />
          </div>

          {/* Right column: Impact Information */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-hope-dark">Your Impact</h3>

            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">

                <div>
                  <h4 className="font-semibold text-lg mb-2 text-hope-dark">Ration Kit</h4>
                  <p className="text-hope-dark/70">
                    Provides essential food and supplies to sustain a family for a month.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">

                <div>
                  <h4 className="font-semibold text-lg mb-2 text-hope-dark">Extended Support</h4>
                  <p className="text-hope-dark/70">
                    Provides a ration kit plus hygiene products and educational materials.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">

                <div>
                  <h4 className="font-semibold text-lg mb-2 text-hope-dark">Family Support</h4>
                  <p className="text-hope-dark/70">
                    Helps four families with essential ration kits or provides extended support to two families.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">

                <div>
                  <h4 className="font-semibold text-lg mb-2 text-hope-dark">Community Impact</h4>
                  <p className="text-hope-dark/70">
                    Supports a small community of 10 families with essential ration kits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
