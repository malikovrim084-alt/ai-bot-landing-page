import { useState } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';

import FeaturesSection from '@/components/sections/FeaturesSection';
import ResultsSection from '@/components/sections/ResultsSection';

import ComparisonSection from '@/components/sections/ComparisonSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactForm from '@/components/ContactForm';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Index() {
  const [chatsPerMonth, setChatsPerMonth] = useState(180);

  const calculateProfit = () => {
    const withoutBotRate = 170 / 180;
    const withBotRate = 260 / 180;
    const currentLeads = Math.round(chatsPerMonth * withoutBotRate);
    const newLeads = Math.round(chatsPerMonth * withBotRate);
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
      
      <FeaturesSection />
      
      <ResultsSection />
      
      <ComparisonSection />
      
      <CalculatorSection 
        chatsPerMonth={chatsPerMonth} 
        setChatsPerMonth={setChatsPerMonth} 
        stats={stats} 
      />
      
      <PricingSection />
      
      <section id="callback-form" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1 shadow-xl">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <Icon name="User" className="text-orange-500" size={80} />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white rounded-full p-2 shadow-lg">
                    <Icon name="Award" size={24} />
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                  Марат Хурматуллин
                </h3>
                <p className="text-lg text-muted-foreground mb-1">
                  Владелец маркетингового агенства
                </p>
                <p className="text-base text-muted-foreground">
                  Опыт работы в автобизнесе более 8 лет
                </p>
              </div>
            </div>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Узнайте, нужен ли вам ИИ-агент
              </h2>
              <p className="text-lg text-muted-foreground">
                Проведу бесплатный аудит вашего автосалона и расскажу о возможностях ИИ-агента именно для вашего бизнеса
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}