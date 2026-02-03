import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function PricingSection() {
  return (
    <>
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
              Стоимость
            </h2>
            <Card className="p-10 text-center bg-gradient-to-br from-primary/5 to-white border-2 border-primary/20">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Calculator" className="text-primary" size={40} />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Формируем стоимость индивидуально под ваш проект
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Каждый автосалон уникален: разное количество обращений, каналы коммуникации и процессы продаж. Мы составим предложение именно для вашего бизнеса после бесплатного аудита.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span className="font-medium">Без переплат за лишние функции</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span className="font-medium">Учитываем объём обращений</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span className="font-medium">Гибкая система оплаты</span>
                </div>
              </div>
            </Card>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              Узнайте точную стоимость для вашего автосалона — оставьте заявку на бесплатный аудит
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
                { number: '3', title: 'Запуск за 2-3 недели', desc: 'Интегрируем во все каналы: сайт, WhatsApp, VK, Авито' },
                { number: '4', title: 'Рост лидов на 40-50%', desc: 'Получаете на 80-100 лидов больше каждый месяц без увеличения рекламы' }
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