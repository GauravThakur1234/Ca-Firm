import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaTrademark } from "react-icons/fa";

export default function ExpertServicesSection() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Looking for Your Type?</h2>
        <p className="text-gray-500 mt-4">
          In addition to providing many features, we also offer expert services to help you manage your business
          and legal compliances.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 text-left">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">For You</h3>

            <div className="flex items-start mt-6">
              <FaFileInvoiceDollar className="text-orange-500 text-3xl mt-1" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">ITR Filing</h4>
                <p className="text-gray-500">
                  Get expert assistance in tax filing for salaried and self-employed individuals, NRIs, capital gains, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start mt-6">
              <FaHome className="text-green-500 text-3xl mt-1" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">TDS on Sale of Property</h4>
                <p className="text-gray-500">
                  Complaince on sale property
                </p>
              </div>
            </div>

            <div className="flex items-start mt-6">
              <FaBalanceScale className="text-orange-500 text-3xl mt-1" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Legal Services</h4>
                <p className="text-gray-500">
                  For drafting and review of legal documents such as sale deeds, vendor agreements, co-founder agreements, etc.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">For Your Business</h3>

            <div className="flex items-start mt-6">
              <FaRocket className="text-purple-500 text-3xl mt-1" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Launch and run a startup</h4>
                <p className="text-gray-500">
                  Legal drafting, documentation review, change in company name, etc.
                </p>
              </div>
            </div>

            <div className="flex items-start mt-6">
              <FaBuilding className="text-blue-500 text-3xl mt-1" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Government registrations</h4>
                <p className="text-gray-500">
                  Registration for shop licenses, PF, PAN, FSSAI, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start mt-6">
              <FaTrademark className="text-purple-500 text-3xl mt-1" />
              <div className="ml-4">
                <h4 className="text-xl font-bold">Trademark & digital signature</h4>
                <p className="text-gray-500">
                  Trademark registrations and renewals; digital signature certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
