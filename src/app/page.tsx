import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a365d] to-[#1b4332]" />
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#d4af37" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="1920" height="1080" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <span className="block mb-4">Your Golf Game Is</span>
              <span className="gold-gradient-text">One Clear Fix Away</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              James Whittaker, PGA Professional. <br className="hidden md:block" />
              5 brain surgeries. 50+ Tour pros fitted. <br className="hidden md:block" />
              Leeds & District Union Head Coach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/contact#booking" className="btn-primary">
                Book Your Assessment
              </Link>
              <Link href="/about#story" className="btn-secondary">
                Hear My Story
              </Link>
            </div>
          </div>
        </div>

        {/* Credibility Badges */}
        <div className="absolute bottom-0 w-full">
          <div className="social-proof-bar">
            <div className="section-container">
              <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                <div className="social-proof-item">
                  <div className="social-proof-icon">🏆</div>
                  <span className="font-semibold">50+ Tour Pros Fitted</span>
                </div>
                <div className="social-proof-item">
                  <div className="social-proof-icon">🥇</div>
                  <span className="font-semibold">Titleist Ambassador</span>
                </div>
                <div className="social-proof-item">
                  <div className="social-proof-icon"> Yorkshire</div>
                  <span className="font-semibold">Leeds Head Coach</span>
                </div>
                <div className="social-proof-item">
                  <div className="social-proof-icon">📰</div>
                  <span className="font-semibold">Published Writer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem/Solution Section */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Most Golf Coaching <br className="hidden md:block" />
                <span className="text-gray-500">Overwhelms You</span>
              </h2>
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0">
                    ✕
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Too Many Swing Thoughts</h3>
                    <p className="text-gray-400">Conflicting advice that leaves you confused about what to actually work on.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0">
                    ✕
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Conflicting Advice</h3>
                    <p className="text-gray-400">Different instructors telling you different things, creating inconsistency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0">
                    ✕
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">No Clear Path</h3>
                    <p className="text-gray-400">Club-selected drills without a clear progression or measurable results.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-200">
              <div className="card">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 gold-gradient-text">
                  The One Clear Fix <br />
                  <span className="text-white">Method</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  You don't need 20 swing thoughts. You need <strong>ONE clear fix</strong>.
                  <br /><br />
                  That's my philosophy. That's my process. That's exactly how I got 50+ European Tour professionals to trust me with their game.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold text-2xl">✓</span>
                    <span className="text-gray-200">One thing to work on, not twenty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold text-2xl">✓</span>
                    <span className="text-gray-200">Clear, actionable steps you can apply immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold text-2xl">✓</span>
                    <span className="text-gray-200">Measurable progress you can see and feel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold text-2xl">✓</span>
                    <span className="text-gray-200">Mental resilience built on overcoming adversity</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link href="/about#method" className="btn-primary">
                    Learn The Method
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-black to-black/90">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Coaching Services</h2>
            <p className="section-subtitle">
              Whether you want to fix your swing in one session or build a complete game,
              I've got a plan for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card animate-fade-in">
              <div className="text-5xl mb-4">🏌️</div>
              <h3 className="text-xl font-bold mb-3">In-Person Coaching</h3>
              <p className="text-gray-400 mb-6">
                Trackman-powered analysis. One clear takeaway. Real improvement in your local Leeds coaching facility.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li>✓ Trackman data & video</li>
                <li>✓ One clear fix</li>
                <li>✓ Personal practice plan</li>
                <li>✓ Follow-up support</li>
              </ul>
              <Link href="/contact#booking" className="btn-secondary w-full block text-center">
                Book In-Person
              </Link>
            </div>

            <div className="card animate-fade-in delay-100 border-accent-gold/30">
              <div className="absolute top-4 right-4">
                <span className="badge badge-gold">Most Popular</span>
              </div>
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3">Online Coaching</h3>
              <p className="text-gray-400 mb-6">
                Professional coaching from anywhere. Upload your swing, get your One Clear Fix within 48 hours.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li>✓ Video analysis</li>
                <li>✓ Personal feedback video</li>
                <li>✓ Custom practice plan</li>
                <li>✓ Ongoing support</li>
              </ul>
              <Link href="/contact#online" className="btn-primary w-full block text-center">
                Try Online Coaching
              </Link>
            </div>

            <div className="card animate-fade-in delay-200">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Custom Fitting</h3>
              <p className="text-gray-400 mb-6">
                The same fitting the pros get. Trackman-certified with tools to optimize your equipment.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li>✓ Full bag analysis</li>
                <li>✓ Trackman data only</li>
                <li>✓ Performance recommendations</li>
                <li>✓ Equipment optimization</li>
              </ul>
              <Link href="/contact#fitting" className="btn-secondary w-full block text-center">
                Book Fitting
              </Link>
            </div>

            <div className="card animate-fade-in delay-300">
              <div className="text-5xl mb-4">🌳</div>
              <h3 className="text-xl font-bold mb-3">Playing Lessons</h3>
              <p className="text-gray-400 mb-6">
                Learn on the course. Strategy, course management, and real-game application.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li>✓ On-course coaching</li>
                <li>✓ Strategy development</li>
                <li>✓ Course management</li>
                <li>✓ Mental game focus</li>
              </ul>
              <Link href="/contact#playing" className="btn-secondary w-full block text-center">
                Book Playing Lesson
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Epilepsy Resilience Story Teaser */}
      <section className="section-padding bg-gradient-to-b from-black to-[#1b4332]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b4332]/20 to-[#1a365d]/20" />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="badge badge-green">The Resilience Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Five Brain Surgeries Taught Me <br className="hidden md:block" />
              <span className="gold-gradient-text">What Real Resilience Looks Like</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I've faced brain surgery 5 times. I've spent more time in hospitals than on golf courses.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              And in that struggle, I learned something crucial: <strong>progress beats perfection</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-10">
              <div className="card bg-white/5">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-lg font-bold mb-2">Mental Toughness</h3>
                <p className="text-sm text-gray-400">
                  Five brain surgeries taught me to face adversity head-on. Your slice doesn't scare me.
                </p>
              </div>
              <div className="card bg-white/5">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold mb-2">One Thing At A Time</h3>
                <p className="text-sm text-gray-400">
                  Recovery happens one day, one exercise, one victory. Golf is the same.
                </p>
              </div>
              <div className="card bg-white/5">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-bold mb-2">Incremental Progress</h3>
                <p className="text-sm text-gray-400">
                  I don't believe in overwhelm. Just clear, measurable progress one step at a time.
                </p>
              </div>
            </div>
            <Link href="/about#story" className="btn-secondary">
              Read My Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Free Assessment Section */}
      <section className="section-padding bg-[#1b4332] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#d4af37]/30 to-[#1b4332]/30" />
        
        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gold-gradient-text">
            Get Your Free Swing Assessment
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Upload your swing video. I'll give you ONE clear fix to work on. No commitment, just value.
            <br />
            Used by golfers from 50+ European Tour pros to absolute beginners.
          </p>
          
          <div className="max-w-xl mx-auto">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" className="flex-1 btn-primary">
                  Upload Swing Video
                </button>
                <button type="button" className="flex-1 btn-secondary">
                  Book a Call
                </button>
              </div>
            </form>
            <p className="text-sm text-white/70 mt-4">
              I'll get back to you within 24 hours with your free assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What Golfers Say</h2>
            <p className="section-subtitle">
              From 50+ European Tour professionals to local Leeds golfers,
              my methods deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <h4 className="font-bold text-white">Mark Thompson</h4>
                  <p className="text-sm text-gray-400">Handicap: 18 → 6</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 italic mb-4">
                "I've had lessons from every coach in Leeds. James is the first one who actually made me understand. 
                One fix at a time. No overwhelm. Just progress."
              </p>
              <div className="flex text-accent-gold">★★★★★</div>
            </div>

            <div className="testimonial-card animate-fade-in delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <h4 className="font-bold text-white">Sarah Johnson</h4>
                  <p className="text-sm text-gray-400">Lady Member, Leeds GC</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 italic mb-4">
                "James's approach to coaching is completely different. He doesn't try to fix everything at once. 
                He gives you one thing to work on, and you actually improve."
              </p>
              <div className="flex text-accent-gold">★★★★★</div>
            </div>

            <div className="testimonial-card animate-fade-in delay-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <h4 className="font-bold text-white">Tom Williams</h4>
                  <p className="text-sm text-gray-400">Tour Professional</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 italic mb-4">
                "Working with James on my short game was a game-changer. His attention to detail and 
                ability to communicate complex concepts simply is remarkable."
              </p>
              <div className="flex text-accent-gold">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-black/50">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Credentials</h2>
            <p className="section-subtitle">
              The samecredentials the pros trust
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Titleist Ambassador</h3>
              <p className="text-sm text-gray-400">Equipment expert</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">(direction)</div>
              <h3 className="text-xl font-bold mb-2">PGA Professional</h3>
              <p className="text-sm text-gray-400">Certified coach</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4"> Leeds</div>
              <h3 className="text-xl font-bold mb-2">Leeds Head Coach</h3>
              <p className="text-sm text-gray-400">Union appointed</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Trackman Certified</h3>
              <p className="text-sm text-gray-400">Data-driven coaching</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
