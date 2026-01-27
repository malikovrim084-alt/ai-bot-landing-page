import { useState } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import Icon from '@/components/ui/icon';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ResultsSection from '@/components/sections/ResultsSection';
import ScreenshotsSection from '@/components/sections/ScreenshotsSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Index() {
  const [chatsPerMonth, setChatsPerMonth] = useState(180);

  const calculateProfit = () => {
    // Без бота
    const leadsWithoutBot = Math.round(chatsPerMonth * 0.25);
    const salesWithoutBot = Math.round(leadsWithoutBot * 0.15);
    const profitWithoutBot = salesWithoutBot * 50000;
    const profitYearWithoutBot = profitWithoutBot * 12;

    // С ботом
    const leadsWithBot = Math.round(chatsPerMonth * 0.40);
    const salesWithBot = Math.round(leadsWithBot * 0.15);
    const profitWithBot = salesWithBot * 50000;
    const profitYearWithBot = profitWithBot * 12;

    // Прирост
    const additionalLeads = leadsWithBot - leadsWithoutBot;
    const additionalSales = salesWithBot - salesWithoutBot;
    const additionalProfit = profitWithBot - profitWithoutBot;
    const additionalProfitYear = profitYearWithBot - profitYearWithoutBot;

    // Рост в процентах
    const profitGrowthPercent = Math.round(((profitWithBot - profitWithoutBot) / profitWithoutBot) * 100);

    return { 
      leadsWithoutBot,
      salesWithoutBot,
      profitWithoutBot,
      profitYearWithoutBot,
      leadsWithBot,
      salesWithBot,
      profitWithBot,
      profitYearWithBot,
      additionalLeads, 
      additionalSales, 
      additionalProfit,
      additionalProfitYear,
      profitGrowthPercent
    };
  };

  const stats = calculateProfit();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection />
      
      <ScreenshotsSection />
      
      <FeaturesSection />
      
      <ResultsSection />
      
      <CalculatorSection 
        chatsPerMonth={chatsPerMonth} 
        setChatsPerMonth={setChatsPerMonth} 
        stats={stats} 
      />
      
      <PricingSection />
      
      <section id="callback-form" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Узнайте, нужен ли вам ИИ-агент
            </h2>
            <p className="text-lg text-muted-foreground">
              Проведу бесплатный аудит вашего автосалона и расскажу о возможностях ИИ-агента именно для вашего бизнеса
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}