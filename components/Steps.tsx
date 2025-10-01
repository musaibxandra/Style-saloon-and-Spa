// components/HowItWorks.tsx

import { MapPin, Calendar, BookCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { 
      title: "Choose Location", 
      description: "Select where you want your Session.", 
      icon: MapPin 
    },
    { 
      title: "Pick a Date", 
      description: "Decide on the date that works best for you.", 
      icon: Calendar 
    },
    { 
      title: "Book Your Session", 
      description: "Confirm your booking instantly.", 
      icon: BookCheck 
    },
  ];

  return (
    <section className="w-full py-26 bg-gray-50 mt-8 mb-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Make your first steps</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center">
                {/* Step Card */}
                <div className="bg-white shadow-lg rounded-2xl p-10 w-60">
                  <div className="flex justify-center mb-4 p-3">
                    <Icon className="w-10 h-10 text-black-600" />
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                </div>

                {/* Wave Connector (only between steps on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block mx-8 w-40 h-20">
                    <svg
                      viewBox="0 0 200 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M0 30 C 50 0, 150 60, 200 30"
                        stroke="#000000"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
