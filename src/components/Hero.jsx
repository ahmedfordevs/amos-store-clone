export default function Hero() {
  return (
    <section id="home" className="bg-slate-900 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Empowering Digital Solutions in Nigeria
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Delivering specialized solutions tailored to your unique requirements with reliability and speed.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#services" className="bg-accent hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
            Explore Services
          </a>
          <a href="#contact" className="border border-gray-400 hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}