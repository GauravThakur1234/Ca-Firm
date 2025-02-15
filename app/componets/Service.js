import { FaCloudUploadAlt, FaBuilding, FaMoneyBillWave, FaUserFriends, FaFileInvoiceDollar } from "react-icons/fa";
import { Card } from "@/components/ui/card";

const stats = [
  { value: "100M+", label: "invoices", icon: <FaCloudUploadAlt className="text-blue-500 text-3xl" /> },
  { value: "1000+", label: "Businesses", icon: <FaBuilding className="text-purple-500 text-3xl" /> },
  { value: "200+", label: "trade value", icon: <FaMoneyBillWave className="text-green-500 text-3xl" /> },
  { value: "35,000+", label: "retail", icon: <FaUserFriends className="text-pink-500 text-3xl" /> },
  { value: "3500+", label: "tax returns", icon: <FaFileInvoiceDollar className="text-orange-500 text-3xl" /> },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900">Our Stats</h2>
          <p className="text-gray-500 mt-4">
            We are having Bests CA Firm
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2 mt-8 md:mt-0">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[120px]"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
              <div className="flex items-center justify-center">{stat.icon}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
