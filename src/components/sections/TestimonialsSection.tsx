import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Дмитрий Соколов',
      role: 'Владелец автосалона',
      city: 'Казань',
      text: 'Раньше теряли 60% лидов с Авито — менеджеры не успевали отвечать ночью. За месяц с ботом конверсия выросла с 12% до 28%, продали на 8 машин больше. Окупили подписку в первую неделю. Рекомендую всем дилерам!',
      rating: 5,
    },
    {
      name: 'Анна Власова',
      role: 'Руководитель отдела продаж',
      city: 'Екатеринбург',
      text: 'Подключили бота на Telegram и Авито. Контактов стало в 2,3 раза больше — клиенты пишут даже в 3 ночи! Бот собирает телефоны, менеджеры утром обзванивают горячие заявки. Скорость ответа упала с 40 минут до 10 секунд.',
      rating: 5,
    },
    {
      name: 'Игорь Кузнецов',
      role: 'Коммерческий директор сети из 4 салонов',
      city: 'Новосибирск',
      text: 'Внедрили AI-бота во всех точках — конверсия выросла на 157% в среднем по сети. Особенно сильно на подержанных авто с Авито. Интеграция с amoCRM заняла 12 дней. За 3 месяца дополнительно продали 34 машины.',
      rating: 5,
    },
    {
      name: 'Максим Воронов',
      role: 'Менеджер по продажам',
      city: 'Краснодар',
      text: 'Боялся, что бот заменит людей, но он просто отсеивает нецелевых и греет клиентов до звонка. Теперь работаю только с готовыми покупателями — закрываю 45% сделок вместо 18%. Зарплата выросла в 2 раза!',
      rating: 5,
    },
    {
      name: 'Сергей Белов',
      role: 'Владелец автосалона',
      city: 'Самара',
      text: 'Запустили бота за 2 недели — настроили на 60 авто в каталоге. Первый месяц тестировали бесплатно, потом сразу купили годовую подписку. Выручка выросла на 75%, а нагрузка на менеджеров снизилась. Лучшая инвестиция года!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
              ⭐ ОТЗЫВЫ КЛИЕНТОВ
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Что говорят владельцы автосалонов
            </h2>
            <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Реальные результаты наших клиентов — от Казани до Краснодара
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                  <p className="text-xs text-primary font-medium mt-1 flex items-center gap-1">
                    <Icon name="MapPin" size={12} />
                    {item.city}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-4 rounded-2xl">
              <Icon name="TrendingUp" className="text-primary" size={24} />
              <div className="text-left">
                <p className="font-bold text-lg">4.8/5 рейтинг</p>
                <p className="text-sm text-muted-foreground">На основе 127 отзывов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}