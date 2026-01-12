import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function FeaturesSection() {
  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                ⚡ ВОЗМОЖНОСТИ
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Что умеет AI-консультант автосалона
              </h2>
              <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Обучен на вашем автопарке • Знает все комплектации и цены • Консультирует как опытный менеджер
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Car', title: 'Консультирует по авто', desc: 'Рассказывает о комплектациях, ценах, акциях и трейд-ин' },
                { icon: 'Calendar', title: 'Записывает на тест-драйв', desc: 'Собирает контакты и бронирует удобное время' },
                { icon: 'MessageSquare', title: 'Отвечает за 10 секунд', desc: 'Клиент не ждет — получает ответ мгновенно, даже ночью' },
                { icon: 'TrendingUp', title: 'Увеличивает продажи на 157%', desc: 'Реальная статистика конверсии наших клиентов' }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
              Работает во всех каналах
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[
                { name: 'Сайт', items: ['Jivo', 'Tilda'] },
                { name: 'Авто-площадки', items: ['Авито', 'Авто.ру', 'Дром.ру'] },
                { name: 'Мессенджеры', items: ['WhatsApp', 'Telegram'] },
                { name: 'CRM', items: ['amoCRM', 'Bitrix24'] },
                { name: 'Соцсети', items: ['VK', 'Instagram'] }
              ].map((group, index) => (
                <div key={index} className="p-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon name="Link" className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold mb-2">{group.name}</h3>
                  <p className="text-sm text-muted-foreground">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}