import { FaUsers, FaLightbulb, FaChartLine, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import { FaCloudUploadAlt, FaIndustry, FaFileInvoice, FaMoneyBillWave, FaPercent } from "react-icons/fa";
import { FaFileInvoiceDollar, FaRupeeSign, FaTruck, FaCloud, FaCreditCard, FaPlane, FaShieldAlt, FaProjectDiagram, FaFileAlt, FaChartBar, FaStar } from "react-icons/fa";


export default function About() {
	const services = [
		{ name: "GST", desc: "From G1 to G9, file 3x faster", icon: <FaFileInvoiceDollar className="text-pink-500" /> },
		{ name: "E-Invoicing", desc: "Fast, dependable, affordable", icon: <FaRupeeSign className="text-green-500" /> },
		{ name: "ClearTaxCloud", desc: "ITR for people & businesses", icon: <FaCloud className="text-green-500" /> },
		{ name: "TDS", desc: "Never miss a challan again", icon: <FaCreditCard className="text-orange-500" /> },
		{ name: "AirTravel", desc: "Claim every tax credit", icon: <FaPlane className="text-blue-500" /> },
		{ name: "Protect", desc: "Employee health benefits", icon: <FaShieldAlt className="text-green-500" /> },
		{ name: "Vendor", desc: "Manage supplier relations", icon: <FaProjectDiagram className="text-blue-500" /> },
		{ name: "ITR", desc: "Tax returns in under 7 min", icon: <FaFileAlt className="text-purple-500" /> },
		{ name: "Invest", desc: "Save and grow wealth", icon: <FaChartBar className="text-orange-500" /> },
		{ name: "Services", desc: "200+ expert assisted plans", icon: <FaStar className="text-orange-500" /> },
	  ];
	const stats = [
		{ value: "₹1,000Cr +", label: "taxes saved per year", icon: <FaCloudUploadAlt className="text-blue-500" /> },
		{ value: "$300B", label: "worth invoices filed", icon: <FaIndustry className="text-purple-500" /> },
		{ value: "50M +", label: "e-Invoices run-rate", icon: <FaFileInvoice className="text-pink-500" /> },
		{ value: "$4B +", label: "tax payments in FY20", icon: <FaPercent className="text-orange-500" /> },
		{ value: "6M +", label: "ITRs filed in 2020", icon: <FaMoneyBillWave className="text-green-500" /> },
		{ value: "10M +", label: "e-Waybills every year", icon: <FaFileInvoice className="text-blue-500" /> },
	  ];
  return (
	<>
	<section className="py-16 px-8 bg-white">
	<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
	  <div>
		<h3 className="text-gray-500 text-lg font-semibold">About us</h3>
		<h2 className="text-5xl font-bold text-gray-900 leading-tight mt-2">
		  We are <span className="text-blue-600">Chanderkant & Associates
		  .</span>
		</h2>
		<h3 className="text-4xl font-bold text-gray-900 mt-2">
		  Connected finances <br /> for Indian tax payers.
		</h3>
		<p className="text-gray-500 mt-4 leading-relaxed">
		  Our mission is to simplify finances, save money of 
		  millions of Indian businesses and people. We are a 
		  CA Firm Associates company that improve their relationship with money.
		</p>
	  </div>

	  <div className="flex justify-center">
		<Image 
		  src="/path-to-your-about-image.png"
		  alt="About Us Illustration"
		  width={500}
		  height={300}
		  className="max-w-full"
		/>
	  </div>
	</div>
  </section>
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="text-gray-500 mt-4">
          Empowering businesses and individuals with cutting-edge financial solutions.
          Our mission is to simplify compliance and make tax filing effortless.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 text-left">
          <div>
            <div className="flex items-start">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaUsers className="text-blue-500 text-2xl" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Who We Are</h4>
               <p className="text-gray-500"> 
				  We are a team of experts in compliance finance dedicated to making your life easier.
			   </p>
              </div>
            </div>

            <div className="flex items-start mt-6">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaLightbulb className="text-yellow-500 text-2xl" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Our Vision</h4>
                <p className="text-gray-500">
                  To build a future where compliance is seamless, accessible, and stress-free.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaChartLine className="text-green-500 text-2xl" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Our Growth</h4>
                <p className="text-gray-500">
                  Trusted by thousands, we've helped businesses scale with ease.
                </p>
              </div>
            </div>

            <div className="flex items-start mt-6">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaHandshake className="text-purple-500 text-2xl" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Our Commitment</h4>
                <p className="text-gray-500">
                  We are dedicated to providing the best compliance solutions with trust and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <img 
            src="/path-to-your-about-image.png" 
            alt="About Us" 
            className="w-80 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
	<section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Creating value <br /> at scale
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Products that perform seamlessly during any kind of surge, 
            so you don’t have to worry about up-time and reliability. 
            Upload and process any amount of data any time of the month, smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
              <div className="text-4xl">{stat.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
	<section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center leading-tight">
          From compliance to financial services, <br /> we cover them all.
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
              <div className="text-4xl bg-gray-100 p-3 rounded-lg">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                <p className="text-gray-500">{service.desc}</p>
              </div>
              <div className="text-xl text-gray-400">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
	</>
  );
}
