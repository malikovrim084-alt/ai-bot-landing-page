import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ResultsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
            Реальные результаты автосалонов
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Доказанный рост продаж и записей на тест-драйв с AI-ботом
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon name="TrendingDown" className="text-red-600" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">Без AI-бота</h3>
                  <p className="text-muted-foreground">Старая система</p>
                </div>
              </div>
              <img 
                src="https://cdn.poehali.dev/files/IMG_20260112_161551_300.jpg" 
                alt="Статистика без чат-бота" 
                className="w-full rounded-lg shadow-md mb-4"
              />
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="font-semibold">Средняя конверсия:</span>
                  <span className="text-2xl font-bold text-red-600">0,14%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="font-semibold">Записей на тест-драйв:</span>
                  <span className="text-xl font-bold">4-5</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-2 border-green-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">С AI-ботом</h3>
                  <p className="text-green-600 font-semibold">Новая система</p>
                </div>
              </div>
              <img 
                src="https://cdn.poehali.dev/files/IMG_20260112_161554_093.jpg" 
                alt="Статистика с чат-ботом" 
                className="w-full rounded-lg shadow-md mb-4"
              />
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold">Средняя конверсия:</span>
                  <span className="text-2xl font-bold text-green-600">0,36%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="font-semibold">Записей на тест-драйв:</span>
                  <span className="text-xl font-bold">11-12</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-center">
                <p className="text-sm font-semibold mb-1">РЕЗУЛЬТАТ</p>
                <p className="text-3xl font-bold">+157% конверсии</p>
                <p className="text-sm mt-1">В 2.5 раза больше записей на тест-драйв!</p>
              </div>
            </Card>
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-primary text-white text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Icon name="MessageCircle" className="text-white" size={32} />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                Попробуйте AI-бота прямо сейчас!
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Тестовый бот продавца-консультанта автосалона уже работает в Telegram
              </p>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 bg-white text-primary hover:bg-blue-50 shadow-xl font-bold"
                asChild
              >
                <a href="https://t.me/khurmapro_bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Icon name="Send" size={20} />
                  ОТКРЫТЬ БОТА В TELEGRAM
                </a>
              </Button>
              <p className="text-sm mt-4 text-blue-100">
                Посмотрите, как бот отвечает на вопросы и собирает контакты
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}