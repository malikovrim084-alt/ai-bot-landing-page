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
                Ваш круглосуточный помощник по продажам
              </h2>
              <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                На базе 4 AI-моделей (OpenAI, DeepSeek и др.) • Обучается на ваших данных • Читает файлы, сайты, таблицы
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Zap', title: 'Отвечает за 10 сек 24/7', desc: 'Мгновенная реакция на любой запрос в любое время' },
                { icon: 'MessageSquare', title: 'Консультирует как лучший менеджер', desc: 'Отвечает на вопросы и помогает принять решение' },
                { icon: 'Users', title: 'Собирает контакты', desc: 'Автоматически квалифицирует и сохраняет лиды' },
                { icon: 'TrendingUp', title: 'Увеличивает конверсию на 50-100%', desc: 'Доказанный рост продаж и заявок' }
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
                { name: 'Маркетплейсы', items: ['Авито', 'OZON'] },
                { name: 'Мессенджеры', items: ['WhatsApp', 'Telegram'] },
                { name: 'CRM', items: ['Bitrix24'] },
                { name: 'Соцсети', items: ['VK'] }
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
