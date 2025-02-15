import { useRef } from "react";
import { FaBuilding, FaBalanceScale, FaClipboardList, FaCloud } from "react-icons/fa";

export default function PlugAndPlaySection() {
  const taxExpertSectionRef = useRef(null);

  const scrollToTaxExpert = () => {
    if (taxExpertSectionRef.current) {
      taxExpertSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Play With Fun!</h2>
        <p className="text-gray-500 mt-4">
          An amazing and relaible CA Firm.
        </p>

        <div className="flex justify-center space-x-8 mt-8 border-b pb-4">
          <div className="flex items-center space-x-2">
            <FaBuilding className="text-blue-500 text-xl" />
            <span className="text-gray-900 font-bold">Enterprise</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer" onClick={scrollToTaxExpert}>
            <FaBalanceScale className="text-orange-500 text-xl" />
            <span className="text-blue-500 font-bold">Taxes</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 text-left">
          <div>
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full">
                <FaClipboardList className="text-gray-500 text-2xl" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">e-Invoicing</h4>
                <p className="text-gray-500">Fast, relaible, and affordable solution.</p>
              </div>
            </div>

            <div className="flex items-start mt-6">
              <div className="bg-gray-100 p-3 rounded-full">
                <FaBalanceScale className="text-gray-500 text-2xl" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">Waybill</h4>
                <p className="text-gray-500">10x faster waybill solution for large businesses.</p>
              </div>
            </div>

            <div className="flex items-start mt-6">
              <div className="bg-gray-100 p-3 rounded-full">
                <FaBuilding className="text-gray-500 text-2xl" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold">ITC</h4>
                <p className="text-gray-500">Easily ITC For businesses</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={taxExpertSectionRef} className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full">
                  <FaClipboardList className="text-gray-500 text-2xl" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold">GST</h4>
                  <p className="text-gray-500">Easy GST Complaince</p>
                </div>
              </div>

              <div className="flex items-start mt-6">
                <div className="bg-gray-100 p-3 rounded-full">
                  <FaBalanceScale className="text-gray-500 text-2xl" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold">TDS</h4>
                  <p className="text-gray-500">Easy TDS Returns.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full">
                  <FaCloud className="text-gray-500 text-2xl" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold">TaxCloud</h4>
                  <p className="text-gray-500">ITR Fillings Forms Accountants.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <img 
              src="/path-to-your-image.png" 
              alt="Mobile App Preview" 
              className="w-64 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
