import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ContactForm from '@/components/ContactForm';

export default function Index() {
  const [chatsPerMonth, setChatsPerMonth] = useState(300);

  const calculateProfit = () => {
    const currentLeads = Math.round(chatsPerMonth * 0.14);
    const newLeads = Math.round(chatsPerMonth * 0.25);
    const additionalLeads = newLeads - currentLeads;
    const sales = Math.round(additionalLeads * 0.15);
    const profit = sales * 50000;
    return { currentLeads, newLeads, additionalLeads, sales, profit };
  };

  const stats = calculateProfit();



  return (
    <div className="min-h-screen bg-white">
      <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://cdn.poehali.dev/files/Основной знак на белом фоне.png" 
              alt="Khurma Marketing" 
              className="h-12 md:h-16"
            />
            <div className="flex items-center gap-4">
              <a href="tel:+79870266416" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold">
                <Icon name="Phone" size={20} />
                +7 987 026 6416
              </a>
              <Button 
                size="sm"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="animate-pulse hover:animate-none"
              >
                Заказать демо
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg">
                  <Icon name="Zap" size={16} />
                  <span>Ответ за 10 секунд • Работает 24/7</span>
                </div>
                <h1 className="font-heading text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6 leading-tight">
                  AI-бот 24/7 — ваш отдел продаж, который не спит
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Превращаем чаты в деньги. Отвечает за 10 секунд. Работает, пока вы отдыхаете.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-6"
                    onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Рассчитать прибыль
                  </Button>
                </div>
              </div>
              <div className="animate-scale-in">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                СТОП! Проверьте себя
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent animate-slide-up">
                Ваш бизнес теряет деньги?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: 'Moon', text: 'Лиды «умирают» ночью и в выходные' },
                { icon: 'Clock', text: 'Клиенты уходят к конкурентам из-за медленного ответа' },
                { icon: 'TrendingDown', text: 'Низкая конверсия из чата в заявку' },
                { icon: 'AlertCircle', text: '80% потенциала чатов не используется' }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-scale-in border-l-4 border-l-red-500 bg-gradient-to-r from-white to-red-50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon name={item.icon as any} className="text-red-600" size={26} />
                    </div>
                    <p className="text-lg text-foreground font-semibold leading-relaxed pt-2">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-red-600 mb-2">Узнали себя?</p>
              <p className="text-muted-foreground">Пора что-то менять!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
              Реальные результаты наших клиентов
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Доказанный рост конверсии и количества обращений с AI-ботом
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
                    <span className="font-semibold">Чатов с телефоном:</span>
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
                    <span className="font-semibold">Чатов с телефоном:</span>
                    <span className="text-xl font-bold">11-12</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-center">
                  <p className="text-sm font-semibold mb-1">РЕЗУЛЬТАТ</p>
                  <p className="text-3xl font-bold">+157% конверсии</p>
                  <p className="text-sm mt-1">В 2.5 раза больше обращений!</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                { number: '1', title: 'Бесплатный аудит', desc: 'Анализируем ваши чаты и бизнес-процессы' },
                { number: '2', title: 'Демо на ваших данных БЕСПЛАТНО', desc: 'Создаем рабочий прототип на реальных диалогах' },
                { number: '3', title: 'Договор и запуск (2-3 недели)', desc: 'Внедряем и настраиваем систему под ваш бизнес' },
                { number: '4', title: 'Рост конверсии', desc: 'Получаете больше заявок и увеличиваете прибыль' }
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

      <section id="contact-form" className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Готовы увеличить прибыль?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Оставьте заявку и я свяжусь с вами в течение 15 минут!
            </p>
            
            <ContactForm />

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  Осталось 2 места
                </div>
                <Icon name="Gift" className="mx-auto mb-3 text-yellow-300" size={32} />
                <p className="font-semibold text-lg">
                  Первым 3 клиентам — скидка 20% на внедрение!
                </p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Icon name="Zap" className="mx-auto mb-3 text-yellow-300" size={32} />
                <p className="font-semibold text-lg">
                  💡 Интрига: В примерах — только ночные часы... а если 24/7?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="font-heading text-2xl font-bold mb-4">Свяжитесь со мной</h3>
            
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <a href="tel:+79870266416" className="hover:text-primary transition-colors flex items-center gap-2 text-lg">
                <Icon name="Phone" size={24} />
                +7 987 026 6416
              </a>
              <span className="text-slate-600">|</span>
              <a href="https://wa.me/79870266416" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-lg">
                <Icon name="MessageCircle" size={24} />
                WhatsApp
              </a>
              <span className="text-slate-600">|</span>
              <a href="https://vk.ru/khurma.marketing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-lg">
                <Icon name="MessageSquare" size={24} />
                VK
              </a>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <p className="font-semibold text-xl mb-2">Рим Маликов</p>
              <a href="https://khurma.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-300 transition-colors text-lg">
                khurma.pro
              </a>
            </div>

            <div className="pt-4">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
            </div>
            <p className="text-sm text-slate-500">
              © 2026 AI-бот 24/7. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}