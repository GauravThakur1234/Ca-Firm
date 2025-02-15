import { FaPiggyBank } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">All our products are designed to deliver</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center text-center">
            <FaPiggyBank className="text-yellow-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Maximum tax savings</h3>
            <p className="text-gray-500 mt-2">
              Businesses save up to 2–7% of their net GST with us every month. Individuals can save up to ₹86,500 by filing their tax returns through us.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaHourglassHalf className="text-green-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Unparalleled speed</h3>
            <p className="text-gray-500 mt-2">
              Experience 3x faster GST filings, 5x faster invoice reconciliation, and 10x faster e-waybill generation. Individuals file their tax returns in under 3 min.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaFileInvoice className="text-pink-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Accurate Compliance</h3>
            <p className="text-gray-500 mt-2">
              Our products are designed and tested by in-house tax experts, ensuring every new clause, form, or feature is updated and sent to you over the cloud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
