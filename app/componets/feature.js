'use client';

// import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FaCloud, FaFileInvoice, FaFileAlt, FaCalculator } from 'react-icons/fa';

const features = [
  {
    title: 'Taxcloud',
    description: 'ITR filing software for Tax Experts',
    icon: <FaCloud className='text-blue-500 text-3xl' />, 
    link: '#',
    hoverColor: 'hover:border-blue-500',
  },
  {
    title: 'Enterprise',
    description: 'GST, E-Invoicing, Max-ITC, E-Way bill & more',
    icon: <FaFileInvoice className='text-green-500 text-3xl' />, 
    link: '#',
    hoverColor: 'hover:border-green-500',
  },
  {
    title: 'E-invoicing',
    description: 'Bulk invoice in Tally or any ERP',
    icon: <FaFileAlt className='text-orange-500 text-3xl' />, 
    link: '#',
    hoverColor: 'hover:border-orange-500',
  },
  {
    title: 'GST',
    description: 'G1-G9 filings made 3x faster',
    icon: <FaCalculator className='text-purple-500 text-3xl' />, 
    link: '#',
    hoverColor: 'hover:border-purple-500',
  },
];

export default function TaxFinancialSection() {
  return (
    <section className='py-16 px-6 bg-gray-100'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl font-bold text-gray-900'>India’s largest tax and financial services platform</h2>
        <p className='text-gray-500 mt-2'>Explore our wide range of software solutions</p>
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
        {features.map((feature, index) => (
          <motion.a
            key={index}
            href={feature.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'block rounded-2xl border bg-white shadow-md p-6 transition-all',
              feature.hoverColor
            )}
          >
            <div className='flex items-center space-x-4'>
              <div className='p-3 rounded-lg bg-gray-100'>{feature.icon}</div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>{feature.title}</h3>
                <p className='text-gray-500 text-sm'>{feature.description}</p>
                <p className='text-blue-500 font-medium mt-2 flex items-center'>Know more →</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
