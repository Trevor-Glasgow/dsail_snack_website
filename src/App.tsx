function App() {
  return (
    <div className="min-h-screen bg-snack-cream">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-snack-cream/95 backdrop-blur-sm border-b border-snack-brown/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl text-snack-brown">
            D'Sail Snacks
          </a>
          <ul className="flex items-center gap-8">
            <li><a href="#products" className="text-snack-brown/80 hover:text-snack-brown font-medium transition">Products</a></li>
            <li><a href="#about" className="text-snack-brown/80 hover:text-snack-brown font-medium transition">About</a></li>
            <li><a href="#contact" className="text-snack-brown/80 hover:text-snack-brown font-medium transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-snack-amber/20 via-transparent to-snack-olive/10 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-snack-brown leading-tight tracking-tight">
              Snacks you can{' '}
              <span className="text-snack-amber">feel good</span>
              {' '}about.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-snack-brown/80 font-body max-w-xl">
              Real ingredients. Bold flavor. No compromises. We make snacks that taste amazing and keep you going.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-snack-amber text-snack-brown font-display font-semibold rounded-full hover:bg-snack-amber/90 transition shadow-lg shadow-snack-amber/25"
              >
                See our snacks
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-snack-brown/30 text-snack-brown font-display font-semibold rounded-full hover:border-snack-brown/50 hover:bg-snack-brown/5 transition"
              >
                Our story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-snack-brown text-center mb-4">
            Our lineup
          </h2>
          <p className="text-snack-brown/70 text-center max-w-xl mx-auto mb-14">
            Simple, delicious snacks made with ingredients you can pronounce.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sea Salt & Olive Oil', tag: 'Crispy & light', color: 'from-snack-olive/20 to-snack-olive/5' },
              { name: 'Honey & Sea Salt', tag: 'Sweet & savory', color: 'from-snack-amber/20 to-snack-amber/5' },
              { name: 'Everything Spice', tag: 'Bold & crunchy', color: 'from-snack-brown/20 to-snack-brown/5' },
            ].map((product) => (
              <div
                key={product.name}
                className={`rounded-2xl p-8 bg-gradient-to-br ${product.color} border border-snack-brown/10 hover:border-snack-brown/20 transition`}
              >
                <div className="w-14 h-14 rounded-xl bg-snack-amber/30 mb-4" aria-hidden />
                <h3 className="font-display text-xl font-semibold text-snack-brown">{product.name}</h3>
                <p className="mt-2 text-snack-brown/70">{product.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-snack-brown mb-6">
              Born from a simple idea
            </h2>
            <p className="text-snack-brown/80 leading-relaxed mb-4">
              We started D'Sail because we were tired of snacks full of fillers and fake flavors. We wanted something real—something we'd be proud to share with friends and family.
            </p>
            <p className="text-snack-brown/80 leading-relaxed">
              Every batch is made with care, using quality ingredients and no shortcuts. That's the D'Sail way.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-snack-amber to-snack-brown/80 shadow-2xl shadow-snack-brown/20" aria-hidden />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-snack-brown text-snack-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Get in touch
          </h2>
          <p className="text-snack-cream/80 mb-8">
            Questions, wholesale inquiries, or just want to say hi? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@dsailsnacks.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-snack-amber text-snack-brown font-display font-semibold rounded-full hover:bg-snack-amber/90 transition"
          >
            hello@dsailsnacks.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-snack-brown/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-semibold text-snack-brown">D'Sail Snacks</span>
          <span className="text-snack-brown/60 text-sm">© {new Date().getFullYear()} D'Sail Snacks. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
