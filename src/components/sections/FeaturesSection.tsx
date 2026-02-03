import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function FeaturesSection() {
  const features = [
    { 
      icon: 'Clock', 
      title: '24/7 консультации', 
      desc: 'Отвечает клиентам круглосуточно, даже в выходные и праздники' 
    },
    { 
      icon: 'Zap', 
      title: 'Ответ за 10 секунд', 
      desc: 'Мгновенная реакция — клиент не успевает уйти к конкуренту' 
    },
    { 
      icon: 'Phone', 
      title: 'Сбор телефонов', 
      desc: 'Получает контакты для записи на тест-драйв и звонка менеджера' 
    },
    { 
      icon: 'Globe', 
      title: 'Авито / Авто.ру', 
      desc: 'Работает на всех площадках: Авито, Дром, Авто.ру, сайт салона' 
    },
    { 
      icon: 'Workflow', 
      title: 'Интеграция с CRM', 
      desc: 'Передаёт заявки в amoCRM, Bitrix24 автоматически — ничего не потеряется' 
    },
    { 
      icon: 'Target', 
      title: 'Передача горячих заявок', 
      desc: 'Определяет готовность клиента и отправляет менеджеру в приоритете' 
    },
    { 
      icon: 'TrendingUp', 
      title: '+40-50% лидов', 
      desc: 'Стабильный рост количества заявок без увеличения бюджета на рекламу' 
    },
    { 
      icon: 'Rocket', 
      title: 'Запуск за 2 недели', 
      desc: 'Настройка на ваш каталог авто, обучение, интеграция — всё под ключ' 
    }
  ];

  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Что умеет AI-консультант автосалона
              </h2>
              <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-6">
                Обучен на вашем автопарке • Знает все комплектации и цены • Консультирует как опытный менеджер
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Работает во всех каналах
            </h2>
            <p className="text-muted-foreground mb-12">
              Интегрируется с площадками, мессенджерами и CRM за 2 недели
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[
                { name: 'Сайт', items: ['Jivo', 'Tilda'], icon: 'Globe' },
                { name: 'Авто-площадки', items: ['Авито', 'Авто.ру', 'Дром.ру'], icon: 'Car' },
                { name: 'Мессенджеры', items: ['WhatsApp', 'VK'], icon: 'MessageCircle' },
                { name: 'CRM', items: ['amoCRM', 'Bitrix24'], icon: 'Database' },
                { name: 'Соцсети', items: ['VK', 'Instagram'], icon: 'Share2' }
              ].map((group, index) => (
                <div key={index} className="p-4 hover:bg-slate-50 rounded-xl transition-colors">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon name={group.icon as any} className="text-primary" size={28} />
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