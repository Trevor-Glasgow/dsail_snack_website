function App() {
  return (
    <div className="min-h-screen bg-snack-cream">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-snack-cream/95 backdrop-blur-sm border-b border-snack-brown/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center shrink-0 leading-none">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Sati - Plant-Powered Protein"
              className="h-20 w-auto block align-middle"
            />
          </a>
          <ul className="flex items-center gap-8">
            <li><a href="#products" className="text-snack-brown/80 hover:text-snack-brown font-medium transition">Products</a></li>
            <li><a href="#about" className="text-snack-brown/80 hover:text-snack-brown font-medium transition">About</a></li>
            <li><a href="#contact" className="text-snack-brown/80 hover:text-snack-brown font-medium transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-snack-amber/20 via-transparent to-snack-olive/10 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="max-w-2xl flex-shrink-0">
            <p className="font-display text-sm md:text-base font-semibold text-snack-olive uppercase tracking-wider mb-3">
              Snack with purpose
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-snack-brown leading-tight tracking-tight">
              More than{' '}
              <span className="text-snack-amber">empty crunch.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-snack-brown/80 font-body max-w-xl">
              Savory, plant-based protein crisps for the moments that demand more. We took the familiar crisp texture you love and infused it with real plant protein and bold flavor. No sugar overload. No bland health food — just satisfying crunch and lasting fullness, whether you're dipping, grazing at your desk, or grabbing something tasty between meetings.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-snack-amber text-snack-brown font-display font-semibold rounded-full hover:bg-snack-amber/90 transition shadow-lg shadow-snack-amber/25"
              >
                See the lineup
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-snack-brown/30 text-snack-brown font-display font-semibold rounded-full hover:border-snack-brown/50 hover:bg-snack-brown/5 transition"
              >
                Our story
              </a>
            </div>
          </div>
          <div className="w-full max-w-lg flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}hero-lifestyle.png`}
              alt="Enjoying Sati Mediterranean Za'atar protein crisps with hummus"
              className="w-full h-auto rounded-2xl shadow-xl shadow-snack-brown/15"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-snack-brown text-center mb-4">
            Savory. Substantial. Sati.
          </h2>
          <p className="text-snack-brown/70 text-center max-w-xl mx-auto mb-14">
            Plant protein, bold flavor, and satisfying fullness in a crisp format that enhances everyday snacking.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mediterranean Za'atar", tag: 'Herbaceous, savory & crunchy — our flagship', color: 'from-snack-olive/25 to-snack-olive/5', featured: true, image: 'product-zaatar.png', imageAlt: "Sati Mediterranean Za'atar Savory Protein Crisps" },
              { name: 'Sea Salt & Olive Oil', tag: 'Classic Mediterranean, light & crispy', color: 'from-snack-olive/20 to-snack-olive/5', featured: false, image: 'product-sea-salt.png', imageAlt: 'Sati Sea Salt & Olive Oil Savory Protein Crisps' },
              { name: 'Lemon & Herb', tag: 'Bright, fresh & protein-packed', color: 'from-snack-amber/20 to-snack-amber/5', featured: false, image: null, imageAlt: '' },
            ].map((product) => (
              <div
                key={product.name}
                className={`rounded-2xl p-8 bg-gradient-to-br ${product.color} border ${product.featured ? 'border-snack-olive/40 ring-2 ring-snack-olive/20' : 'border-snack-brown/10'} hover:border-snack-brown/20 transition overflow-hidden flex flex-col`}
              >
                {product.featured && (
                  <span className="inline-block text-xs font-display font-semibold text-snack-olive uppercase tracking-wider mb-3">Flagship</span>
                )}
                <div className="aspect-square rounded-xl mb-4 bg-snack-cream/80 overflow-hidden flex-shrink-0">
                  {product.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${product.image}`}
                      alt={product.imageAlt}
                      className="w-full h-full object-contain object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-snack-amber/20" aria-hidden />
                  )}
                </div>
                <div className="mt-auto">
                  <h3 className="font-display text-xl font-semibold text-snack-brown">{product.name}</h3>
                  <p className="mt-2 text-snack-brown/70">{product.tag}</p>
                </div>
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
              Built for today's snacking moments
            </h2>
            <p className="text-snack-brown/80 leading-relaxed mb-4">
              Sati bridges the gap between empty crunch and bland health snacks by delivering plant protein, bold flavor, and satisfying fullness in a crisp format that enhances everyday snacking.
            </p>
            <p className="text-snack-brown/80 leading-relaxed">
              We're launching in Chicago first — where diverse food culture and a health-aware population make the ideal home for purposeful snacking.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}hero-lifestyle.png`}
              alt="Sati protein crisps with hummus and Mediterranean-inspired setting"
              className="max-w-md w-full h-auto rounded-3xl shadow-2xl shadow-snack-brown/20 object-cover"
            />
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
            Questions, wholesale inquiries, sampling, or creator partnerships? We'd love to hear from you.
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
