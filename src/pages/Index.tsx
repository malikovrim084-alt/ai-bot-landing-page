import { useState } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import ResultsSection from '@/components/sections/ResultsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Index() {
  const [chatsPerMonth, setChatsPerMonth] = useState(300);

  const calculateProfit = () => {
    const currentLeads = Math.round(chatsPerMonth * 0.70);
    const newLeads = Math.round(chatsPerMonth * 0.87);
    const additionalLeads = newLeads - currentLeads;
    const sales = Math.round(additionalLeads * 0.15);
    const profit = sales * 50000;
    return { currentLeads, newLeads, additionalLeads, sales, profit };
  };

  const stats = calculateProfit();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ResultsSection />
      <TestimonialsSection />
      <FeaturesSection />
      <ComparisonSection />
      <CalculatorSection 
        chatsPerMonth={chatsPerMonth} 
        setChatsPerMonth={setChatsPerMonth} 
        stats={stats} 
      />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}