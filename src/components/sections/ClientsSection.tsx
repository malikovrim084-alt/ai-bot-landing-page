export default function ClientsSection() {
  const clients = [
    {
      name: "AutoKIPR",
      logo: "https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/9e85ccff-e738-45ee-9274-112bb2862991.jpg",
      clipStyle: "clip-path: inset(0 20% 0 0)",
    },
    {
      name: "Атлантик PRO",
      logo: "https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/24421767-410e-4e8f-992c-8280b9af7c4c.jpg",
    },
    {
      name: "Лидер Трак",
      logo: "https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/2e02a5c2-b52b-410c-8af4-9c119be6c4ca.jpg",
    },

    {
      name: "Компания Автомобилия",
      logo: "https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/369efa90-dde7-4a62-be39-ee379f716414.jpg",
    },
    {
      name: "АвтоХайп с пробегом",
      logo: "https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/cb953acf-0683-45f8-b005-8c6c700605a3.jpg",
    },
    {
      name: "UDMAUTO",
      logo: "https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/97b6a75e-56a3-47d9-9640-5f59c98d6adf.jpg",
    },
    {
      name: "Pioner Auto",
      logo: "https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/4eb47541-cd28-4096-b6be-b22875814b73.jpg",
    },
    {
      name: "Авто Плюс",
      logo: "https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/1169bf2f-2dae-4da6-8b8d-b0538a5fa324.jpg",
    },
    {
      name: "Абакан Авто",
      logo: "https://cdn.poehali.dev/projects/a342f07f-f1f9-4615-b861-611d73a35a53/bucket/f8967ffb-7424-4a0e-ad07-bd4550c2e3df.jpg",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Нам доверяют
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-16 w-44 overflow-hidden grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
                style={client.clipStyle ? { clipPath: 'inset(0 20% 0 0)' } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}