import Icon from '@/components/ui/icon';
import ContactForm from '@/components/ContactForm';

export default function CTASection() {
  return (
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
  );
}
