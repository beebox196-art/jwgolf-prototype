import Image from "next/image";
import Link from "next/link";
import CrystalCard from "@/components/CrystalCard";
import BlurText from "@/components/BlurText";
import GoldButton from "@/components/GoldButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex-1 flex-col">
      {/* ── Hero Section ── Editorial magazine feel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Hero image — full bleed, desaturated */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="James Whittaker Golf - Hand and ball on tee"
            fill
            className="object-cover object-center opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Overline */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-inter">PGA Professional · Titleist Ambassador</span>
              <div className="w-12 h-[1px] bg-accent" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-playfair font-bold tracking-tight leading-[1.05]">
              <span className="block mb-3 text-white">Your Golf Game Is</span>
              <span className="accent-gradient-text">
                <BlurText text="One Clear Fix Away" speed={50} delay={400} />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-inter">
              James Whittaker, PGA Professional.<br />
              5 brain surgeries. 50+ Tour pros fitted. Leeds &amp; District Union Head Coach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/contact#booking">
                <GoldButton variant="primary" size="lg">
                  Book Your Assessment
                </GoldButton>
              </Link>
              <Link href="/about#story">
                <GoldButton variant="glass" size="lg">
                  Hear My Story
                </GoldButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Social proof bar — bottom of hero */}
        <div className="absolute bottom-0 w-full">
          <div className="border-y border-white/[0.06] py-6 bg-black/50 backdrop-blur-sm">
            <div className="section-container">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-accent text-lg font-semibold">PGA</span>
                  <span className="text-sm text-gray-400 font-inter leading-snug">PGA Professional<br />University of Birmingham</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-lg font-semibold">Leeds</span>
                  <span className="text-sm text-gray-400 font-inter leading-snug">Leeds &amp; District Union<br />Head Coach</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-lg">🏟️</span>
                  <span className="text-sm text-gray-400 font-inter leading-snug">Moor Allerton · Howley Hall<br />Belfry · Oulton Hall</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-lg">📰</span>
                  <span className="text-sm text-gray-400 font-inter leading-snug">Today&apos;s Golfer · Nat Club Golfer<br />Golfshake</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-lg">🏆</span>
                  <span className="text-sm text-gray-400 font-inter leading-snug">50+ European Tour<br />Pros Fitted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem / Solution ── Editorial split */}
      <section className="section-padding bg-black">
        <div className="section-container">
          {/* Section overline */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-inter">The Problem</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-min">
            {/* "Overwhelms You" — left column */}
            <ScrollReveal direction="left" className="lg:col-span-1 lg:row-span-2">
              <CrystalCard className="h-full p-8">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  Most Golf Coaching <br />
                  <span className="text-gray-500">Overwhelms You</span>
                </h2>
                <div className="space-y-5 mt-8">
                  <CrystalCard variant="green" className="p-4 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 flex-shrink-0 text-sm font-bold">
                      ✕
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 font-inter">Too Many Swing Thoughts</h3>
                      <p className="text-gray-500 text-sm font-inter">Conflicting advice that leaves you confused about what to actually work on.</p>
                    </div>
                  </CrystalCard>
                  <CrystalCard variant="green" className="p-4 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 flex-shrink-0 text-sm font-bold">
                      ✕
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 font-inter">Conflicting Advice</h3>
                      <p className="text-gray-500 text-sm font-inter">Different instructors telling you different things, creating inconsistency.</p>
                    </div>
                  </CrystalCard>
                  <CrystalCard variant="green" className="p-4 flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 flex-shrink-0 text-sm font-bold">
                      ✕
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 font-inter">No Clear Path</h3>
                      <p className="text-gray-500 text-sm font-inter">Club-selected drills without a clear progression or measurable results.</p>
                    </div>
                  </CrystalCard>
                </div>
              </CrystalCard>
            </ScrollReveal>

            {/* "One Clear Fix" — right column */}
            <ScrollReveal direction="right" delay={200}>
              <CrystalCard variant="gold" className="h-full p-8" hover="glow">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  <span className="accent-gradient-text">The One Clear Fix</span><br />
                  <span className="text-white">Method</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg font-inter">
                  You don&apos;t need 20 swing thoughts. You need <strong className="text-white">ONE clear fix</strong>.
                  <br /><br />
                  That&apos;s my philosophy. That&apos;s my process. That&apos;s exactly how I got 50+ European Tour professionals to trust me with their game.
                </p>
                <ol className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent text-lg font-bold flex-shrink-0 font-inter">1</div>
                    <div>
                      <h3 className="font-semibold text-white font-inter">Diagnose</h3>
                      <p className="text-sm text-gray-500 font-inter">Trackman data and video — the single thing holding your game back.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent text-lg font-bold flex-shrink-0 font-inter">2</div>
                    <div>
                      <h3 className="font-semibold text-white font-inter">One Clear Fix</h3>
                      <p className="text-sm text-gray-500 font-inter">One simple instruction you can apply immediately — not twenty thoughts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent text-lg font-bold flex-shrink-0 font-inter">3</div>
                    <div>
                      <h3 className="font-semibold text-white font-inter">Measurable Marker</h3>
                      <p className="text-sm text-gray-500 font-inter">A clear number or target so you can see the fix working.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent text-lg font-bold flex-shrink-0 font-inter">4</div>
                    <div>
                      <h3 className="font-semibold text-white font-inter">Practise Until Next Time</h3>
                      <p className="text-sm text-gray-500 font-inter">A structured plan so the fix sticks — then we build on it next session.</p>
                    </div>
                  </li>
                </ol>
                <div className="mt-8 pt-8 border-t border-white/[0.08]">
                  <Link href="/about#method">
                    <GoldButton variant="secondary" size="md" className="w-full">
                      Learn The Method
                    </GoldButton>
                  </Link>
                </div>
              </CrystalCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-inter">Services</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <div className="section-header">
            <h2 className="section-title font-playfair">Coaching Services</h2>
            <p className="section-subtitle font-inter">
              Whether you want to fix your swing in one session or build a complete game,
              I&apos;ve got a plan for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
            {/* In-Person — 2×1 */}
            <ScrollReveal className="md:col-span-2">
              <CrystalCard className="h-full p-8" hover="glow">
                <div className="text-4xl mb-4">🏌️</div>
                <h3 className="text-2xl font-playfair font-bold mb-3 text-white">In-Person Coaching</h3>
                <p className="text-gray-400 mb-6 font-inter">
                  Trackman-powered analysis. One clear takeaway. Real improvement in your local Leeds coaching facility.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6 font-inter">
                  <li>✓ Trackman data &amp; video</li>
                  <li>✓ One clear fix</li>
                  <li>✓ Personal practice plan</li>
                  <li>✓ Follow-up support</li>
                </ul>
                <Link href="/contact#booking">
                  <GoldButton variant="secondary" size="md" className="w-full">
                    Book In-Person
                  </GoldButton>
                </Link>
              </CrystalCard>
            </ScrollReveal>

            {/* Online — 1×2, accent border */}
            <ScrollReveal delay={100} className="md:row-span-2">
              <CrystalCard variant="gold" className="h-full p-8" hover="glow">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent text-white">Most Popular</span>
                </div>
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-playfair font-bold mb-3 text-white">Online Coaching</h3>
                <p className="text-gray-400 mb-6 font-inter">
                  Professional coaching from anywhere. Upload your swing, get your One Clear Fix within 48 hours.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6 font-inter">
                  <li>✓ Video analysis</li>
                  <li>✓ Personal feedback video</li>
                  <li>✓ Custom practice plan</li>
                  <li>✓ Ongoing support</li>
                </ul>
                <div className="mt-auto">
                  <Link href="/contact#online">
                    <GoldButton variant="primary" size="md" className="w-full">
                      Try Online Coaching
                    </GoldButton>
                  </Link>
                </div>
              </CrystalCard>
            </ScrollReveal>

            {/* Fitting — 1×1 */}
            <ScrollReveal delay={200}>
              <CrystalCard className="h-full p-6" hover="glow">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-white">Custom Fitting</h3>
                <p className="text-gray-500 text-sm mb-4 font-inter">
                  The same fitting the pros get. Trackman-certified with tools to optimize your equipment.
                </p>
                <Link href="/contact#fitting">
                  <GoldButton variant="glass" size="sm" className="w-full">
                    Book Fitting
                  </GoldButton>
                </Link>
              </CrystalCard>
            </ScrollReveal>

            {/* Playing — 1×1 */}
            <ScrollReveal delay={300}>
              <CrystalCard className="h-full p-6" hover="glow">
                <div className="text-3xl mb-3">🌳</div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-white">Playing Lessons</h3>
                <p className="text-gray-500 text-sm mb-4 font-inter">
                  Learn on the course. Strategy, course management, and real-game application.
                </p>
                <Link href="/contact#playing">
                  <GoldButton variant="glass" size="sm" className="w-full">
                    Book Playing Lesson
                  </GoldButton>
                </Link>
              </CrystalCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Resilience — one understated line, in his own voice ── */}
      <section className="border-t border-white/[0.06] bg-black">
        <div className="section-container">
          <div className="py-14 max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-lg md:text-xl text-gray-400 italic font-playfair leading-relaxed">
                &ldquo;I rebuilt my own golf swing from zero after five brain surgeries. I know what
                under pressure really means — you can only hold one thought. That&apos;s why I teach one clear fix at a time.&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link href="/about#story" className="inline-block mt-6 text-accent hover:text-accent-light text-sm tracking-wider uppercase font-inter">
                Read the full story on About
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Free Assessment CTA ── */}
      <section className="section-padding bg-accent relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)`,
          }}
        />

        <div className="section-container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-white">
              Get Your Free Swing Assessment
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-inter">
              Upload your swing video. I&apos;ll give you ONE clear fix to work on. No commitment, just value.
              <br />
              Used by golfers from 50+ European Tour pros to absolute beginners.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-xl mx-auto">
              <CrystalCard className="p-8">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-surface border border-white/[0.08] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-surface border border-white/[0.08] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <GoldButton variant="primary" size="md" className="flex-1 bg-white text-accent hover:bg-gray-100">
                      Upload Swing Video
                    </GoldButton>
                    <GoldButton variant="secondary" size="md" className="flex-1 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                      Book a Call
                    </GoldButton>
                  </div>
                </form>
                <p className="text-sm text-gray-400 mt-4 font-inter">
                  I&apos;ll get back to you within 24 hours with your free assessment.
                </p>
              </CrystalCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-inter">Testimonials</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <div className="section-header">
            <h2 className="section-title font-playfair">What Golfers Say</h2>
            <p className="section-subtitle font-inter">
              From 50+ European Tour professionals to local Leeds golfers,
              my methods deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal>
              <CrystalCard className="p-8 h-full" hover="glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-inter">Mark Thompson</h4>
                    <p className="text-sm text-gray-500 font-inter">Handicap: 18 → 6</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 italic mb-4 font-inter">
                  &ldquo;James is a fantastic coach. My game has greatly improved during my time with him. He shows great patience and has fantastic technical knowledge of the game.&rdquo;
                </p>
                <div className="flex text-accent text-xl">★★★★★</div>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <CrystalCard className="p-8 h-full" hover="glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-inter">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500 font-inter">Lady Member, Leeds GC</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 italic mb-4 font-inter">
                  &ldquo;As a beginner to the game, James has been able to guide me in terms of my swing and approach play to the green. I would highly recommend this fantastic professional to anyone who wants to improve their game.&rdquo;
                </p>
                <div className="flex text-accent text-xl">★★★★★</div>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <CrystalCard className="p-8 h-full" hover="glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-inter">Tom Williams</h4>
                    <p className="text-sm text-gray-500 font-inter">Tour Professional</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 italic mb-4 font-inter">
                  &ldquo;A fantastic golf coach who has a fantastic ability to observe and provide solutions that do improve your game. If you are looking to raise your game then James is the man to go to.&rdquo;
                </p>
                <div className="flex text-accent text-xl">★★★★★</div>
              </CrystalCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-inter">Credentials</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <div className="section-header">
            <h2 className="section-title font-playfair">Credentials</h2>
            <p className="section-subtitle font-inter">
              The same credentials the pros trust
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScrollReveal>
              <CrystalCard className="p-6 text-center" hover="glow">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-lg font-playfair font-bold mb-2 text-white">Titleist Ambassador</h3>
                <p className="text-sm text-gray-500 font-inter">Equipment expert &amp; fitter</p>
              </CrystalCard>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <CrystalCard className="p-6 text-center" hover="glow">
                <div className="text-3xl mb-4">PGA</div>
                <h3 className="text-lg font-playfair font-bold mb-2 text-white">PGA Professional</h3>
                <p className="text-sm text-gray-500 font-inter">Certified coach</p>
              </CrystalCard>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <CrystalCard className="p-6 text-center" hover="glow">
                <div className="text-3xl mb-4">Leeds</div>
                <h3 className="text-lg font-playfair font-bold mb-2 text-white">Leeds Head Coach</h3>
                <p className="text-sm text-gray-500 font-inter">Union appointed</p>
              </CrystalCard>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <CrystalCard className="p-6 text-center" hover="glow">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-playfair font-bold mb-2 text-white">50+ Tour Pros</h3>
                <p className="text-sm text-gray-500 font-inter">Elite custom fitting</p>
              </CrystalCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}