import { Card } from '@/components/ui/card';

interface CalculatorSectionProps {
  chatsPerMonth: number;
  setChatsPerMonth: (value: number) => void;
  stats: {
    currentLeads: number;
    newLeads: number;
    additionalLeads: number;
    sales: number;
    profit: number;
  };
}

export default function CalculatorSection({ chatsPerMonth, setChatsPerMonth, stats }: CalculatorSectionProps) {
  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
            Сколько вы заработаете?
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Настройте количество чатов в месяц
          </p>
          
          <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-white border-2 border-primary/20">
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                Количество чатов в месяц: <span className="text-2xl font-bold text-primary">{chatsPerMonth}</span>
              </label>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={chatsPerMonth}
                onChange={(e) => setChatsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>100</span>
                <span>1000</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <p className="text-sm text-muted-foreground mb-2">Было</p>
                  <p className="text-4xl font-bold text-red-600">{stats.currentLeads}</p>
                  <p className="text-sm text-muted-foreground mt-1">лидов (14%)</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <p className="text-sm text-muted-foreground mb-2">Стало</p>
                  <p className="text-4xl font-bold text-green-600">{stats.newLeads}</p>
                  <p className="text-sm text-muted-foreground mt-1">лидов (25%)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="font-medium">Дополнительно лидов</span>
                <span className="text-2xl font-bold text-primary">+{stats.additionalLeads}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="font-medium">Продажи (конверсия 15%)</span>
                <span className="text-2xl font-bold text-primary">+{stats.sales}</span>
              </div>
              <div className="flex items-center justify-between p-6 bg-primary text-white rounded-lg">
                <span className="font-bold text-lg">Дополнительная прибыль</span>
                <span className="text-3xl font-bold">{stats.profit.toLocaleString()} ₽/мес</span>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-lg font-semibold text-primary mb-4">
              Окупаемость &lt; 2 недель
            </p>
            <p className="text-muted-foreground">При прибыли 50 000 руб. с продажи</p>
          </div>
        </div>
      </div>
    </section>
  );
}
