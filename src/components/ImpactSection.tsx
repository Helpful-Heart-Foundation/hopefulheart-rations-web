
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  // Animate counter when visible
  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold text-hope-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-hope-softGray">
      <div className="container mx-auto px-4 d-flex justify-content-center align-items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hope-dark">Our Impact</h2>
          <p className="text-lg text-hope-dark/80 max-w-3xl mx-auto">
            Through the dedication of our volunteers and the generosity of our donors,
            we've been able to make a meaningful difference in thousands of lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Impact Card 1 */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center animate-fade-in">
            <Counter end={1280} duration={2000} suffix="+" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-hope-dark">Ration Kits</h3>
            <p className="text-hope-dark/70">Distributed to widows and their families</p>
          </div>

          {/* Impact Card 3 */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center animate-fade-in">
            <Counter end={15000} duration={2500} suffix="+" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-hope-dark">Lives</h3>
            <p className="text-hope-dark/70">Positively impacted by our work</p>
          </div>

          {/* Impact Card 4 */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center animate-fade-in">
            <Counter end={50} duration={1800} suffix="+" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-hope-dark">Volunteers</h3>
            <p className="text-hope-dark/70">Dedicated to our mission</p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-hope-dark">Real Stories, Real Impact</h3>
              <blockquote className="border-l-4 border-hope-primary pl-6 italic text-hope-dark/80">
                "The ration kit from HopefulHeart Foundation came at a time when I had lost all hope.
                It not only provided food for my children, but also restored my faith in humanity.
                Now I volunteer with the foundation to help others like me."
              </blockquote>
              <p className="mt-4 font-semibold text-hope-dark">- Amina, Beneficiary & Volunteer</p>
            </div>
            <div className="animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1617575522693-11be8be0542f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Woman smiling after receiving aid"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
