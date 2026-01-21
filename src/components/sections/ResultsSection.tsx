import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ResultsSection() {
  const cases = [
    {
      title: 'Автосалон «АтлантикПРО»',
      task: 'Автосалон сталкивался с потерей клиентов в нерабочее время. Ночные и вечерние заявки с площадок Avito, Auto.ru и Дром оставались без ответа до утра. Конверсия из обращения в лид составляла 70%. Кроме того, не было системной работы с «тёплой» базой клиентов, которые ранее интересовались автомобилями, но не совершили покупку.',
      solution: [
        'Ночной ИИ-агент: Работал с 20:00 до 09:00, обрабатывая заявки с автомобильных площадок. Консультировал по автомобилям, отвечал на вопросы и собирал контактные данные.',
        'Круглосуточный ИИ-агент ВКонтакте: Обеспечивал мгновенный ответ на сообщения и комментарии в соцсети в любое время суток.',
        'ИИ-агент для реактивации: Работал с ушедшей клиентской базой, отправляя персонализированные сообщения, напоминая о салоне, информируя о новых поступлениях и специальных предложениях.'
      ],
      result: 'Конверсия из обращения в лид выросла с 70% до 87%, что дало прирост в 17 абсолютных процентных пунктов. Автосалон перестал терять ночные заявки, а база «тёплых» клиентов стала постоянным источником повторного вовлечения.',
      highlight: '+17% к конверсии',
      icon: 'Moon'
    },
    {
      title: 'Автосалон «АвтоКипр»',
      task: 'Поток лидов с множества источников (Avito, Auto.ru, Дром, ВК) обрабатывался вручную, что создавало задержки и риски потери клиентов. Особенно страдала скорость обработки срочных кредитных заявок. Менеджеры тратили время на первичный сбор информации, вместо того чтобы заниматься продажами.',
      solution: [
        'Основной ИИ-хаб: Единый агент, подключенный ко всем рекламным источникам. Он не только консультировал клиентов и собирал телефоны, но и автоматически создавал сделку в CRM, давал краткий аналитический комментарий по диалогу и отправлял готовое уведомление с контактом клиента и сутью запроса в общий чат отдела продаж в Telegram.',
        'ИИ-агент для кредитных заявок: Специализированный бот, настроенный на мгновенный отклик. Он быстро уточнял все необходимые для предварительного одобрения параметры (сумма, первоначальный взнос, срок) и сразу передавал готовую заявку в работу менеджеру.'
      ],
      result: 'Количество лидов, поступающих в автосалон за месяц, увеличилось со 160 до 240. Это чистая прибавка в 80 лидов ежемесячно, достигнутая за счет автоматизации и ликвидации «протекающей» воронки. Кредитные заявки теперь обрабатываются в течение первой минуты после обращения.',
      highlight: '+80 лидов в месяц',
      icon: 'Zap'
    },
    {
      title: 'Автосалон «АвтоХайп»',
      task: 'Клиенту был необходим простой и быстрый способ увеличить количество поступающих лидов без увеличения бюджета на рекламу. Существующий поток заявок с Avito, Auto.ru и ВК не обрабатывался в полном объеме в нерабочее время, что приводило к потере части клиентов.',
      solution: [
        'Мы реализовали проект «под ключ» по внедрению одного универсального ИИ-агента. Этот бот был обучен консультировать по автомобилям в наличии, отвечать на частые вопросы и грамотно запрашивать номер телефона для связи с менеджером. Агент работал 24/7, без выходных, и был интегрирован с CRM-системой для автоматического создания лидов.'
      ],
      result: 'После запуска ИИ-агента среднемесячное количество лидов стабильно выросло с 170-190 до 250-270 лидов в месяц. Автосалон стал получать стабильную прибавку в 80-100 лидов каждый месяц, что соответствует росту на 40-50%.',
      highlight: '+50% роста лидов',
      icon: 'TrendingUp'
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
            Реальные кейсы автосалонов
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Как ИИ-агенты помогли автосалонам увеличить конверсию и количество лидов
          </p>
          
          <div className="space-y-8 mb-16">
            {cases.map((caseItem, index) => (
              <Card key={index} className="p-6 md:p-8 hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                      <Icon name={caseItem.icon as any} className="text-white" size={28} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 text-primary">
                      {caseItem.title}
                    </h3>
                    
                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Icon name="AlertCircle" className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <div>
                          <h4 className="font-semibold text-base mb-1">Задача:</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{caseItem.task}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Icon name="Lightbulb" className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                        <div>
                          <h4 className="font-semibold text-base mb-2">Решение:</h4>
                          <ul className="space-y-2">
                            {caseItem.solution.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-blue-200">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="text-green-600 mt-1 flex-shrink-0" size={18} />
                        <div>
                          <h4 className="font-semibold text-base mb-1">Результат:</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-2">{caseItem.result}</p>
                          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                            {caseItem.highlight}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-6 md:p-8 bg-gradient-to-r from-blue-600 to-primary text-white text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Icon name="MessageCircle" className="text-white" size={32} />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                Попробуйте AI-бота прямо сейчас!
              </h3>
              <p className="text-base md:text-lg mb-6 text-blue-100">
                Тестовый бот продавец-консультант автосалона уже работает в Telegram
              </p>
              <Button 
                size="lg" 
                className="text-base md:text-lg px-8 md:px-10 py-5 md:py-6 bg-white text-primary hover:bg-blue-50 shadow-xl font-bold w-full md:w-auto"
                asChild
              >
                <a 
                  href="https://t.me/khurmapro_bot" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(106250852, 'reachGoal', 'click_try_bot_results');
                    }
                  }}
                >
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