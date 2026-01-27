import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CalculatorModal from '@/components/CalculatorModal';

interface CalculatorSectionProps {
  chatsPerMonth: number;
  setChatsPerMonth: (value: number) => void;
  stats: {
    leadsWithoutBot: number;
    salesWithoutBot: number;
    profitWithoutBot: number;
    profitYearWithoutBot: number;
    leadsWithBot: number;
    salesWithBot: number;
    profitWithBot: number;
    profitYearWithBot: number;
    additionalLeads: number;
    additionalSales: number;
    additionalProfit: number;
    additionalProfitYear: number;
    profitGrowthPercent: number;
  };
}

export default function CalculatorSection({ chatsPerMonth, setChatsPerMonth, stats }: CalculatorSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
            Сколько машин продадите дополнительно?
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Реальные данные из кейса автосалона «АвтоХайп»
          </p>
          
          <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-white border-2 border-primary/20">
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                Обращений в автосалон в месяц: <span className="text-2xl font-bold text-primary">{chatsPerMonth}</span>
              </label>
              <input
                type="range"
                min="100"
                max="500"
                step="10"
                value={chatsPerMonth}
                onChange={(e) => setChatsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>100</span>
                <span>500</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-center mb-3">БЕЗ AI-бота</h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-muted-foreground mb-1">Лидов в месяц</p>
                  <p className="text-3xl font-bold text-red-600">{stats.leadsWithoutBot}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-muted-foreground mb-1">Продаж в месяц</p>
                  <p className="text-3xl font-bold text-red-600">{stats.salesWithoutBot}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-muted-foreground mb-1">Прибыль в месяц</p>
                  <p className="text-2xl font-bold text-red-600">{stats.profitWithoutBot.toLocaleString()} ₽</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-muted-foreground mb-1">Прибыль в год</p>
                  <p className="text-2xl font-bold text-red-600">{stats.profitYearWithoutBot.toLocaleString()} ₽</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-center mb-3">С AI-ботом</h3>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-muted-foreground mb-1">Лидов в месяц</p>
                  <p className="text-3xl font-bold text-green-600">{stats.leadsWithBot}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-muted-foreground mb-1">Продаж в месяц</p>
                  <p className="text-3xl font-bold text-green-600">{stats.salesWithBot}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-muted-foreground mb-1">Прибыль в месяц</p>
                  <p className="text-2xl font-bold text-green-600">{stats.profitWithBot.toLocaleString()} ₽</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-muted-foreground mb-1">Прибыль в год</p>
                  <p className="text-2xl font-bold text-green-600">{stats.profitYearWithBot.toLocaleString()} ₽</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-primary to-orange-500 p-6 rounded-lg text-white text-center">
                <p className="text-sm mb-2">🚀 Рост прибыли</p>
                <p className="text-5xl font-bold mb-1">+{stats.profitGrowthPercent}%</p>
                <p className="text-sm opacity-90">или +{stats.additionalProfit.toLocaleString()} ₽/мес</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">+Лидов</p>
                  <p className="text-2xl font-bold text-primary">{stats.additionalLeads}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">+Продаж</p>
                  <p className="text-2xl font-bold text-primary">{stats.additionalSales}</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-lg font-semibold text-primary mb-2">
              Окупаемость &lt; 2 недель
            </p>
            <p className="text-muted-foreground">При средней прибыли 50 000 ₽ с одного проданного авто</p>
          </div>
        </div>
      </div>

      <CalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        profit={stats.additionalProfit}
      />
    </section>
  );
}