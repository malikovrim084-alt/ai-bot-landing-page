import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function PricingSection() {
  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              Стоимость
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Rocket" className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">Старт (внедрение)</h3>
                <p className="text-4xl font-bold text-primary mb-2">100 000 ₽</p>
                <p className="text-muted-foreground">Разовый платеж</p>
              </Card>
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="RefreshCw" className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">Поддержка</h3>
                <p className="text-4xl font-bold text-primary mb-2">30 000 ₽</p>
                <p className="text-muted-foreground">В месяц</p>
              </Card>
            </div>
            <p className="text-center text-muted-foreground mt-8">
              *Точный расчет после аудита вашего проекта
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              Как мы работаем
            </h2>
            <div className="space-y-6">
              {[
                { number: '1', title: 'Бесплатный аудит автосалона', desc: 'Анализируем ваши обращения клиентов и процессы продаж' },
                { number: '2', title: 'Демо на ваших данных БЕСПЛАТНО', desc: 'Обучаем бота на вашем автопарке и реальных диалогах' },
                { number: '3', title: 'Запуск за 2-3 недели', desc: 'Интегрируем во все каналы: сайт, WhatsApp, Telegram, Авито' },
                { number: '4', title: 'Рост продаж на 75%', desc: 'Получаете больше контактов клиентов и увеличиваете прибыль' }
              ].map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-center font-semibold text-green-800">
                <Icon name="Shield" className="inline mr-2" size={20} />
                Важно: Никаких предоплат до демо!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}