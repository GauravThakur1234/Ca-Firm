import { FaPiggyBank, FaShieldAlt, FaCheckCircle, FaChartBar, FaServer } from "react-icons/fa";

export default function GstSoftwareSection() {
  const features = [
    { title: "Upto 7% tax savings", desc: "Claim 100% ITC and save an average of 4% GST everytime.", icon: <FaPiggyBank className="text-orange-500" /> },
     { title: "Bank-grade security", desc: "Leading GSP with SSL, SOC 2 and ISO certifications.", icon: <FaShieldAlt className="text-green-500" /> },
    { title: "100% accurate", desc: "Multiple validation at each step, reviewed by 60+ experts.", icon: <FaCheckCircle className="text-blue-500" /> },
    { title: "25+ smart reports", desc: "Choose from a variety of smart analytics reports on tap.", icon: <FaChartBar className="text-orange-500" /> },
    { title: "99.99% uptime", desc: "Multiple redundancies, ensures your GST filings never go down.", icon: <FaServer className="text-pink-500" /> },
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center leading-tight">
          Our Features
        </h2>
        <p className="text-gray-500 text-center mt-2">
          All-in-one Platform. Everything in one place.
        </p>

        <div className="flex justify-center mt-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center space-x-2">
            <span className="text-lg font-bold">4.7</span>
            <div className="flex space-x-1">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <span className="text-sm">Capterra</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
              <div className="text-4xl bg-gray-100 p-3 rounded-lg">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
