import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              СТОП! Проверьте себя
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent animate-slide-up">
              Ваш автосалон теряет клиентов?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: 'Moon', text: 'Клиенты пишут ночью — а менеджеры спят. Утром покупают у конкурентов' },
              { icon: 'Clock', text: 'Вопросы о комплектациях и ценах остаются без ответа часами' },
              { icon: 'TrendingDown', text: 'Менеджеры не успевают обработать все заявки на тест-драйв' },
              { icon: 'AlertCircle', text: 'Теряете 70% горячих клиентов из-за медленного ответа' }
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
            <p className="text-2xl font-bold text-red-600 mb-2">Знакомая ситуация?</p>
            <p className="text-muted-foreground">Каждый день ваши конкуренты получают этих клиентов!</p>
          </div>
        </div>
      </div>
    </section>
  );
}