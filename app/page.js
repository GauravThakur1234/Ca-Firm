'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import TaxFinancialSection from './componets/feature';
import StatsSection from './componets/Service';
import ProductsSection from './componets/ProductSections';
import FeaturesSection from './componets/FeaturesSection';
import ExpertServicesSection from './componets/ExpertServicesSection';
import PlugAndPlaySection from './componets/PlugandPlay';

export default function HeroSection() {
  return (
    <main>
    <section className="flex flex-col items-center text-center py-20 px-4 bg-white">
      <h1 className="text-6xl font-bold text-slate-900">Save your money!</h1>
      <p className="mt-2 text-gray-400">India's largest tax and financial services</p>
      
      <motion.div
        className="mt-6 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="mr-2">⭐</span> Best And Innovative CA Firm!
      </motion.div>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
          <div className="bg-green-200 p-3 rounded-full">
            <span>📊</span>
          </div>
          <h3 className="mt-4 font-semibold text-lg text-gray-900">ITC</h3>
          <p className="text-gray-600 text-sm text-center">Increase Accuracy, Efficiency, Productivity</p>
          {/* <Button className="mt-4 bg-blue-600 text-white">See product</Button> */}
        </div>

        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
          <div className="bg-blue-200 p-3 rounded-full">
            <span>🏢</span>
          </div>
          <h3 className="mt-4 font-semibold text-lg text-gray-900">Enterprise</h3>
          <p className="text-gray-600 text-sm text-center">GST, E-Invoicing, Secretarial compliance & more</p>
          {/* <Button className="mt-4 bg-blue-600 text-white">Explore more</Button> */}
        </div>

        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
          <div className="bg-purple-200 p-3 rounded-full">
            <span>📝</span>
          </div>
          <h3 className="mt-4 font-semibold text-lg text-gray-900">Calculate Tax Liability</h3>
          <p className="text-gray-600 text-sm text-center">Know your Tax liability as per the latest budget 2025 updates.</p>
          {/* <Button className="mt-4 bg-blue-600 text-white">Calculate Now</Button> */}
        </div>
      </div>
    </section>

    <TaxFinancialSection />
    <StatsSection />
    <ProductsSection />
    <FeaturesSection />
    <ExpertServicesSection />
    <PlugAndPlaySection />

    </main>
  );
}
