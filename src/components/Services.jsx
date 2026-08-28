import { ShieldCheck, Zap, Globe } from 'lucide-react';

const servicesData = [
  {
    icon: <Zap className="text-accent" size={32} />,
    title: "Fast Execution",
    description: "Rapid delivery of modern tech solutions built on solid infrastructure."
  },
  {
    icon: <ShieldCheck className="text-accent" size={32} />,
    title: "Secure Infrastructure",
    description: "Enterprise-grade protection ensuring data safety and reliable access."
  },
  {
    icon: <Globe className="text-accent" size={32} />,
    title: "Local & Global Reach",
    description: "Configured for local Nigerian compliance with global standards."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Services</h2>
          <p className="text-gray-600 mt-2">What we bring to the table</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}