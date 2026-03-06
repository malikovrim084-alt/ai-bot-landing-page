import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CapabilityItem {
  icon: string;
  title: string;
  desc: string;
}

interface Category {
  icon: string;
  color: string;
  title: string;
  items: CapabilityItem[];
}

const categories: Category[] = [
  {
    icon: 'Car',
    color: 'from-orange-500 to-red-500',
    title: 'Консультации по автомобилям',
    items: [
      {
        icon: 'BookOpen',
        title: 'Знание всего каталога',
        desc: 'Обучен на вашем автопарке — знает каждую модель, комплектацию, цвет, цену и наличие в режиме реального времени',
      },
      {
        icon: 'Search',
        title: 'Подбор по бюджету',
        desc: 'Уточняет бюджет клиента и сразу предлагает подходящие варианты с учётом trade-in и кредита',
      },
      {
        icon: 'GitCompare',
        title: 'Сравнение моделей',
        desc: 'Сравнивает комплектации, объясняет разницу между моделями простым языком — как лучший менеджер зала',
      },
      {
        icon: 'Calculator',
        title: 'Расчёт кредита и trade-in',
        desc: 'Мгновенно рассчитывает ежемесячный платёж, первоначальный взнос и предварительную оценку trade-in',
      },
    ],
  },
  {
    icon: 'ShoppingBag',
    color: 'from-blue-500 to-indigo-500',
    title: 'Маркетплейсы',
    items: [
      {
        icon: 'MessageSquare',
        title: 'Авито',
        desc: 'Перехватывает каждый входящий чат, отвечает за 10 секунд, квалифицирует лид и записывает на визит в салон',
      },
      {
        icon: 'Car',
        title: 'Авто.ру',
        desc: 'Обрабатывает заявки с Авто.ру 24/7 — уточняет интерес, отвечает на вопросы и передаёт горячий лид менеджеру',
      },
      {
        icon: 'MapPin',
        title: 'Дром',
        desc: 'Работает с обращениями с Дрома — консультирует по наличию, ценам и записывает клиента на осмотр',
      },
      {
        icon: 'TrendingUp',
        title: 'Рост конверсии x2',
        desc: 'Ни один лид не теряется: бот отвечает мгновенно даже ночью, пока конкуренты молчат до утра',
      },
    ],
  },
  {
    icon: 'Monitor',
    color: 'from-emerald-500 to-teal-500',
    title: 'Чаты на сайте',
    items: [
      {
        icon: 'MessageCircle',
        title: 'Онлайн-консультант',
        desc: 'Встраивается в виджет на сайте салона — встречает посетителя, помогает с выбором авто и собирает контакты',
      },
      {
        icon: 'Zap',
        title: 'JivoSite / Tilda',
        desc: 'Подключается к Jivo, Tilda-чату и другим виджетам — работает там, где уже привыкли ваши клиенты',
      },
      {
        icon: 'UserPlus',
        title: 'Захват лидов',
        desc: 'Вовлекает посетителя сайта в диалог, квалифицирует потребность и получает телефон для перезвона менеджера',
      },
    ],
  },
  {
    icon: 'Send',
    color: 'from-violet-500 to-purple-500',
    title: 'Мессенджеры и соцсети',
    items: [
      {
        icon: 'MessageCircle',
        title: 'WhatsApp',
        desc: 'Ведёт переписку от имени салона в WhatsApp — отвечает на вопросы, отправляет фото авто, записывает на визит',
      },
      {
        icon: 'Send',
        title: 'Telegram',
        desc: 'Полноценный консультант в Telegram: каталог, цены, запись — клиент получает ответ не выходя из мессенджера',
      },
      {
        icon: 'Users',
        title: 'ВКонтакте',
        desc: 'Обрабатывает сообщения сообщества ВК: отвечает на вопросы, присылает подборки авто и ведёт к сделке',
      },
      {
        icon: 'Instagram',
        title: 'Instagram Direct',
        desc: 'Реагирует на сообщения в Директ — консультирует по наличию, ценам и направляет в салон',
      },
    ],
  },
  {
    icon: 'CalendarCheck',
    color: 'from-amber-500 to-orange-500',
    title: 'Запись на тест-драйв и сервис',
    items: [
      {
        icon: 'Calendar',
        title: 'Тест-драйв',
        desc: 'Записывает клиента на тест-драйв конкретной модели — выбирает удобное время и отправляет подтверждение',
      },
      {
        icon: 'Wrench',
        title: 'Запись на сервис',
        desc: 'Принимает заявки на ТО, ремонт, шиномонтаж — уточняет проблему, марку авто и записывает на свободный слот',
      },
      {
        icon: 'Bell',
        title: 'Напоминания',
        desc: 'Отправляет клиенту напоминание за день до визита — снижает количество «не пришедших» на 40%',
      },
    ],
  },
  {
    icon: 'Database',
    color: 'from-cyan-500 to-blue-500',
    title: 'CRM и базы клиентов',
    items: [
      {
        icon: 'Link',
        title: 'amoCRM',
        desc: 'Автоматически создаёт сделку, заполняет поля контакта и ставит задачу менеджеру — без ручного ввода',
      },
      {
        icon: 'Layers',
        title: 'Bitrix24',
        desc: 'Интегрируется с Bitrix24: передаёт лиды, обновляет статусы и сохраняет всю переписку в карточке клиента',
      },
      {
        icon: 'UserCheck',
        title: 'Квалификация лидов',
        desc: 'Определяет «горячих» клиентов по сценарию: бюджет, сроки, потребности — менеджер получает готовую заявку',
      },
      {
        icon: 'ArrowRight',
        title: 'Передача менеджеру',
        desc: 'Если клиент готов к покупке — мгновенно переводит диалог на живого менеджера с полной историей переписки',
      },
    ],
  },
  {
    icon: 'RefreshCcw',
    color: 'from-rose-500 to-pink-500',
    title: 'Повторные продажи',
    items: [
      {
        icon: 'Heart',
        title: 'Прогрев базы',
        desc: 'Связывается с клиентами из базы: напоминает о ТО, предлагает новые модели, сообщает об акциях',
      },
      {
        icon: 'Gift',
        title: 'Допродажи',
        desc: 'Предлагает аксессуары, страховку, доп. оборудование — увеличивает средний чек без нагрузки на менеджеров',
      },
      {
        icon: 'RotateCcw',
        title: 'Программа trade-in',
        desc: 'Напоминает владельцам через 2-3 года о возможности обмена — возвращает клиента на новую сделку',
      },
    ],
  },
  {
    icon: 'BarChart3',
    color: 'from-slate-500 to-gray-600',
    title: 'Отчёты и аналитика',
    items: [
      {
        icon: 'PieChart',
        title: 'Дашборд в реальном времени',
        desc: 'Количество диалогов, конверсия в лиды, популярные модели — вся статистика в одном месте',
      },
      {
        icon: 'FileText',
        title: 'Отчёты по каналам',
        desc: 'Видно, откуда приходят лучшие лиды: Авито, Авто.ру, сайт или мессенджеры — оптимизируйте бюджет',
      },
      {
        icon: 'AlertCircle',
        title: 'Контроль качества',
        desc: 'Анализирует диалоги: выявляет проблемные ситуации и причины отказов клиентов для улучшения скриптов',
      },
    ],
  },
];

const bottomIcons = [
  { icon: 'Car', label: 'Каталог', color: 'bg-orange-100 text-orange-600' },
  { icon: 'ShoppingBag', label: 'Площадки', color: 'bg-blue-100 text-blue-600' },
  { icon: 'Monitor', label: 'Сайт', color: 'bg-emerald-100 text-emerald-600' },
  { icon: 'Send', label: 'Мессенджеры', color: 'bg-violet-100 text-violet-600' },
  { icon: 'CalendarCheck', label: 'Запись', color: 'bg-amber-100 text-amber-600' },
  { icon: 'Database', label: 'CRM', color: 'bg-cyan-100 text-cyan-600' },
  { icon: 'RefreshCcw', label: 'Допродажи', color: 'bg-rose-100 text-rose-600' },
  { icon: 'BarChart3', label: 'Аналитика', color: 'bg-slate-100 text-slate-600' },
];

export default function AICapabilitiesSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 bg-white" id="capabilities">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Icon name="Sparkles" size={16} />
              Полный набор возможностей
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5">
              Что умеет{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                AI-консультант
              </span>{' '}
              автосалона
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Обучен на вашем каталоге. Знает каждый автомобиль, цену и комплектацию.
              Работает 24/7 во всех каналах — от Авито до WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === idx
                    ? 'bg-gradient-to-r ' + cat.color + ' text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon name={cat.icon } size={16} />
                <span className="hidden sm:inline">{cat.title}</span>
                <span className="sm:hidden">{cat.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categories[activeCategory].color} flex items-center justify-center`}
              >
                <Icon
                  name={categories[activeCategory].icon}
                  className="text-white"
                  size={24}
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold">
                  {categories[activeCategory].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {categories[activeCategory].items.length} возможностей
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {categories[activeCategory].items.map((item, idx) => (
                <Card
                  key={idx}
                  className="group p-5 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${categories[activeCategory].color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}
                      style={{ opacity: 0.15 }}
                    >
                      <Icon
                        name={item.icon}
                        size={22}
                        className="text-gray-800"
                        style={{ opacity: 1 }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-bold text-base mb-1.5 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
              Охватывает все направления работы автосалона
            </p>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {bottomIcons.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeCategory === idx
                      ? 'bg-primary/10 scale-105'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center transition-transform group-hover:scale-110`}
                  >
                    <Icon name={item.icon} size={26} />
                  </div>
                  <span className="text-xs font-medium text-gray-600">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(106250852, 'reachGoal', 'click_try_free');
                }
                document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}