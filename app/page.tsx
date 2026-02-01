"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium z-[1001]">
        ✨ This is a free redesign mockup created by Ryan Cwynar — <a href="https://ryancwynar.com" className="underline hover:no-underline">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-[1000] px-4 md:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">Viking Landscape</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-green-700 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-green-700 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-green-700 transition-colors">Contact</a>
          </div>
          <a href="tel:9548574571" className="bg-green-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors text-sm whitespace-nowrap">
            (954) 857-4571
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-4 bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRIMjR2MmgxMnYtMnptMC04djJIMjR2LTJoMTJ6bTAgNEgyNHYyaDEydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-green-600/30 text-green-100 text-sm font-medium px-4 py-2 rounded-full mb-6">
              🌿 Serving Coral Springs, Boca Raton & Surrounds
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Landscaping That Makes Your Property Shine
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl">
              From lawn maintenance to landscape design and tree services — Viking Landscape has 30+ years of combined experience making South Florida properties beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors text-center">
                Get Free Quote
              </a>
              <a href="tel:9548574571" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Call (954) 857-4571
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Licensed & Insured</div>
                <div className="text-sm text-gray-600">Fully protected</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">5-Star Rated</div>
                <div className="text-sm text-gray-600">On Google Reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">30+ Years</div>
                <div className="text-sm text-gray-600">Combined experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Landscaping Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Complete lawn care and landscaping solutions for residential and commercial properties
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌱", title: "Lawn Mowing", desc: "Weekly or bi-weekly lawn maintenance to keep your grass looking pristine" },
              { icon: "🌳", title: "Tree Trimming", desc: "Professional pruning and shaping for healthy, beautiful trees" },
              { icon: "🏡", title: "Landscape Design", desc: "Custom designs that transform your outdoor space" },
              { icon: "💡", title: "LED Lighting", desc: "Beautiful landscape lighting for safety and ambiance" },
              { icon: "🌿", title: "Plant Installation", desc: "Expert selection and planting of flowers, shrubs, and trees" },
              { icon: "⛲", title: "Water Features", desc: "Fountains, ponds, and irrigation systems" },
              { icon: "🪓", title: "Tree Removal", desc: "Safe removal of dead, damaged, or unwanted trees" },
              { icon: "🧹", title: "Weed Control", desc: "Keep your beds and lawn free from invasive weeds" },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Viking Landscape Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                Viking Landscape Services is a trusted landscape contractor based in South Florida. We are headed by owners Casey Schaad and Jonathan Dugan, who bring a combined 30 years of experience to every project.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From routine mowing to landscape design and installation, we provide a variety of property-enhancing services for residential homes and commercial businesses throughout Coral Springs, Parkland, Boca Raton, and surrounding areas.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our crew is friendly, responsible, and always professional. We pride ourselves on detail-oriented work and exceeding customer expectations with quality service you won&apos;t find anywhere else.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white rounded-lg p-4 text-center flex-1">
                  <div className="text-3xl font-bold text-green-700">30+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center flex-1">
                  <div className="text-3xl font-bold text-green-700">5.0</div>
                  <div className="text-gray-600">Google Rating</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center flex-1">
                  <div className="text-3xl font-bold text-green-700">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Viking?</h3>
              <ul className="space-y-4">
                {[
                  "Licensed, bonded, and fully insured",
                  "Experienced team with decades of expertise",
                  "Competitive pricing with free estimates",
                  "Reliable service, rain or shine",
                  "Commercial and residential specialists",
                  "Available Monday - Sunday, 8am - 5pm",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free consultation and estimate. No obligation — just honest advice from landscaping experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9548574571" className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors">
              📞 Call (954) 857-4571
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Request Quote Online
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to get started? Reach out for a free consultation and estimate. We&apos;ll work with you to create the perfect outdoor space.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Phone</div>
                    <a href="tel:9548574571" className="text-green-700 text-lg hover:underline">(954) 857-4571</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Service Area</div>
                    <div className="text-gray-600">Coral Springs, Parkland, Boca Raton & South Florida</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Hours</div>
                    <div className="text-gray-600">Monday - Sunday: 8am - 5pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-500">
                    <option value="">Select Service</option>
                    <option value="lawn">Lawn Mowing & Maintenance</option>
                    <option value="landscape">Landscape Design & Installation</option>
                    <option value="tree">Tree Trimming & Removal</option>
                    <option value="lighting">Landscape Lighting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors">
                  Get My Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="font-bold text-xl">Viking Landscape</span>
              </div>
              <p className="text-gray-400">
                Professional landscaping services for Coral Springs, Boca Raton, and South Florida.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lawn Mowing</li>
                <li>Landscape Design</li>
                <li>Tree Trimming & Removal</li>
                <li>LED Landscape Lighting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 (954) 857-4571</li>
                <li>🕐 Mon-Sun: 8am - 5pm</li>
                <li>📍 Serving South Florida</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Viking Landscape Services Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var params = new URLSearchParams(window.location.search);
            var ref = params.get('ref');
            if (ref) {
              var img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />
    </div>
  );
}
