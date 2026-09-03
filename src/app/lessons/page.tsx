import Image from "next/image";
import Link from "next/link";
import CrystalCard from "@/components/CrystalCard";
import BlurText from "@/components/BlurText";
import GoldButton from "@/components/GoldButton";
import ScrollReveal from "@/components/ScrollReveal";
import AuroraBackground from "@/components/AuroraBackground";

export default function LessonsPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-15 md:opacity-25">
          <Image
            src="/images/coaching/james-with-bag.jpg"
            alt="James Whitaker Golf Coaching"
            fill
            className="object-cover object-right grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="section-container relative z-10 text-center py-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-inter">Services</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-white">
            <BlurText text="Coaching Services" speed={50} delay={300} />
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter">
            From one-click swing analysis to complete game transformation — I&apos;ve got a plan for every golfer
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-black">
        <div className="section-container max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
              Which Coaching Path Is Right For You?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-inter">
              My coaching philosophy is simple: <strong className="text-white">One clear fix at a time</strong>.
              Not twenty swing thoughts. Not overwhelming instruction. Just clarity,
              actionable steps, and measurable progress.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <CrystalCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="font-bold text-accent mb-2 font-playfair">Proven</h3>
                  <p className="text-sm text-gray-500 font-inter">
                    50+ European Tour professionals have trusted me with their games
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-bold text-accent mb-2 font-playfair">One Fix Method</h3>
                  <p className="text-sm text-gray-500 font-inter">
                    Not twenty swing thoughts. Just one clear instruction that works
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📊</div>
                  <h3 className="font-bold text-accent mb-2 font-playfair">Trackman Powered</h3>
                  <p className="text-sm text-gray-500 font-inter">
                    Data-driven coaching with the same technology the pros use
                  </p>
                </div>
              </div>

              <CrystalCard variant="gold" className="p-6">
                <p className="text-gray-300 italic font-inter">
                  &ldquo;I&apos;ve spent my entire career helping golfers improve — from 50+ European Tour pros
                  to absolute beginners. My goal is always the same: <strong>one clear fix, one victory at a time</strong>.&rdquo;
                </p>
                <p className="text-accent mt-2 font-bold font-playfair">— James Whitaker, PGA</p>
              </CrystalCard>
            </CrystalCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-4xl mx-auto">
          <div className="section-header">
            <h2 className="section-title font-playfair">Clear Pricing, No Surprises</h2>
            <p className="section-subtitle font-inter">
              Professional coaching from a PGA certified coach
            </p>
          </div>

          <ScrollReveal>
            <CrystalCard variant="gold" className="p-8" hover="glow">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-accent">All Pricing Includes</h3>
              <div className="mb-8">
                <ul className="space-y-2 text-sm text-gray-400 font-inter">
                  <li>✓ Trackman-powered analysis</li>
                  <li>✓ One clear fix teaching method</li>
                  <li>✓ Personal practice plan</li>
                  <li>✓ 48-hour turnaround on online coaching</li>
                  <li>✓ Follow-up support</li>
                </ul>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-accent/30">
                      <th className="py-4 text-accent font-bold font-playfair">Service</th>
                      <th className="py-4 text-accent font-bold text-right font-playfair">Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400 font-inter">
                    <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 text-white">Individual Tuition (per hour)</td>
                      <td className="py-4 text-right font-bold text-accent">£50</td>
                    </tr>
                    <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 text-white">Half Hour Tuition</td>
                      <td className="py-4 text-right font-bold text-accent">£25</td>
                    </tr>
                    <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 text-white">3 hrs or 6 x 1/2 hour</td>
                      <td className="py-4 text-right font-bold text-accent">£120</td>
                    </tr>
                    <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 text-white">10 hrs tuition</td>
                      <td className="py-4 text-right font-bold text-accent">£360</td>
                    </tr>
                    <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 text-white">Custom Fitting</td>
                      <td className="py-4 text-right font-bold text-accent">FREE</td>
                    </tr>
                    <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 text-white">Playing Lesson (on course management)</td>
                      <td className="py-4 text-right font-bold text-accent">£120</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-white">Online Coaching Session</td>
                      <td className="py-4 text-right font-bold text-accent">£50 per lesson</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-6 italic font-inter">
                * Group booking available. All sessions include your One Clear Fix.
              </p>
            </CrystalCard>
          </ScrollReveal>
        </div>
      </section>

      {/* In-Person Coaching */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <ScrollReveal direction="left">
              <CrystalCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-accent" />
                  <span className="text-xs tracking-[0.3em] uppercase text-accent font-inter">In-Person Coaching</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  Fix Your Swing <br />
                  <span className="text-accent">In One Session</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed font-inter">
                  Trackman-powered analysis. One clear takeaway. Real improvement.
                  <br /><br />
                  Your session includes comprehensive swing analysis, personal practice plan, and
                  follow-up support to ensure your fix sticks.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { title: "Trackman Data", desc: "Ball speed, launch angle, spin rate, and more" },
                    { title: "High-Speed Video", desc: "Slow-motion analysis of your swing" },
                    { title: "One Clear Fix", desc: "One simple instruction you can apply immediately" },
                    { title: "Practice Plan", desc: "Drills to make the fix stick" },
                    { title: "Follow-Up", desc: "24-hour email support after your session" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <span className="font-semibold text-white font-playfair">{item.title}</span>
                        <p className="text-sm text-gray-500 font-inter">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <CrystalCard variant="green" className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-playfair text-white">Location: Leeds, Yorkshire</h3>
                  <p className="text-gray-500 text-sm font-inter">
                    Private coaching facility with Trackman, high-speed camera, and indoor/outdoor hitting areas.
                  </p>
                </CrystalCard>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <CrystalCard variant="gold" className="p-8" hover="glow">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-white">Session Packages</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/[0.08] hover:border-accent/30 transition-colors">
                    <div>
                      <h4 className="text-xl font-bold text-white font-playfair">Individual Tuition</h4>
                      <p className="text-sm text-gray-500 font-inter">Hourly session with Trackman analysis</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">£50</div>
                      <div className="text-sm text-gray-500 font-inter">60 minutes</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-xl border border-accent/30 hover:border-accent/50 transition-colors transform hover:scale-[1.01] shadow-lg shadow-accent/5 relative">
                    <div className="absolute -top-3 right-4">
                      <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-accent font-playfair">3-Hour Package</h4>
                      <p className="text-sm text-gray-400 font-inter">Best value — 3 hours or 6 x 30min sessions</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">£120</div>
                      <div className="text-sm text-gray-500 font-inter">180 minutes total</div>
                      <div className="text-xs text-accent-light font-semibold mt-1">
                        Save £30 (20% off)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/[0.08] hover:border-accent/30 transition-colors">
                    <div>
                      <h4 className="text-xl font-bold text-white font-playfair">10-Hour Package</h4>
                      <p className="text-sm text-gray-500 font-inter">Complete transformation — comprehensive coaching</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">£360</div>
                      <div className="text-sm text-gray-500 font-inter">600 minutes total</div>
                      <div className="text-xs text-accent-light font-semibold mt-1">
                        Save £140 (28% off)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/contact#booking">
                    <GoldButton variant="primary" size="lg" className="w-full">
                      Book Your Session
                    </GoldButton>
                  </Link>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4 font-inter">
                  *Free swing assessment with any package booking
                </p>
              </CrystalCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Online Coaching */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <CrystalCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-accent" />
                  <span className="text-xs tracking-[0.3em] uppercase text-accent font-inter">Online Coaching</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  Professional Coaching <br />
                  <span className="text-accent">Anywhere You Are</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed font-inter">
                  Upload your swing. Get your One Clear Fix within 48 hours.
                  Professional coaching from anywhere in the world.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { num: "1", title: "Upload Your Swing", desc: "Record your swing from any angle (phone works great)" },
                    { num: "2", title: "Detailed Analysis", desc: "I analyze your swing and identify one clear fix" },
                    { num: "3", title: "Personal Video Feedback", desc: "I record a custom video explaining your one fix" },
                    { num: "4", title: "Practice Plan", desc: "Drills and exercises to make the fix stick" },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 text-sm font-bold">
                        {item.num}
                      </div>
                      <div>
                        <span className="font-semibold text-white font-playfair">{item.title}</span>
                        <p className="text-sm text-gray-500 font-inter">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/contact#online">
                    <GoldButton variant="secondary" size="lg" className="w-full">
                      Try Online Coaching
                    </GoldButton>
                  </Link>
                </div>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200} className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Online Coaching <br />
                <span className="text-accent">Packages</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed font-inter">
                Perfect for golfers who can&apos;t travel or want flexible coaching from anywhere.
                Same high-quality instruction as in-person, delivered digitally.
              </p>

              <div className="space-y-4">
                <CrystalCard className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white font-playfair">Online Coaching Session</h4>
                      <p className="text-sm text-gray-500 font-inter">One clear fix, delivered via video</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">£50</div>
                      <div className="text-sm text-gray-500 font-inter">48-hour turnaround</div>
                    </div>
                  </div>
                </CrystalCard>

                <CrystalCard variant="gold" className="p-6 relative" hover="glow">
                  {/* CONFIRM WITH JAMES: monthly subscription £250/month & 3-month £675 package are NOT in the scraped pricing (which only lists Online £50/lesson). Confirm before launch. */}
                  <div className="absolute -top-3 right-6">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-accent font-playfair">Monthly Subscription</h4>
                      <p className="text-sm text-gray-500 font-inter">5 analyses per month, priority response</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">£250</div>
                      <div className="text-sm text-gray-500 font-inter">per month</div>
                    </div>
                  </div>
                </CrystalCard>

                <CrystalCard className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white font-playfair">3-Month Package</h4>
                      <p className="text-sm text-gray-500 font-inter">15 analyses, ongoing support, progress tracking</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">£675</div>
                      <div className="text-sm text-gray-500 font-inter">15 analyses total</div>
                      <div className="text-xs text-accent-light font-semibold mt-1">
                        Save £75 (10% off)
                      </div>
                    </div>
                  </div>
                </CrystalCard>
              </div>

              <CrystalCard variant="green" className="mt-6 p-4">
                <p className="text-sm text-gray-500 font-inter">
                  ✅ All online coaching includes one clear fix, video feedback, and practice plan
                </p>
              </CrystalCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Free Custom Fitting — segmented lead magnet */}
      <section className="section-padding bg-accent relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
          }}
        />
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-black/30 text-white text-xs tracking-[0.2em] uppercase mb-6 font-inter">
                Free Custom Fitting
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
                Your Fitting Is Free.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-white/85 max-w-3xl mx-auto mb-8 leading-relaxed font-inter">
                When you buy your clubs through me, the fitting is <strong className="text-white">completely free</strong>.
                I don&apos;t charge for the fitting itself — because the right clubs are the point.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-10">
                <CrystalCard className="p-5">
                  <h4 className="font-bold text-white mb-2 font-playfair">What I Measure</h4>
                  <p className="text-sm text-white/80 font-inter">
                    Length, lie, loft, shaft flex &amp; weight, and grip — matched to your swing, not a size chart.
                  </p>
                </CrystalCard>
                <CrystalCard className="p-5">
                  <h4 className="font-bold text-white mb-2 font-playfair">Why It&apos;s Free</h4>
                  <p className="text-sm text-white/80 font-inter">
                    The right set-up sells itself. I&apos;d rather fit you properly than sell you the wrong clubs twice.
                  </p>
                </CrystalCard>
                <CrystalCard className="p-5">
                  <h4 className="font-bold text-white mb-2 font-playfair">Trackman Data</h4>
                  <p className="text-sm text-white/80 font-inter">
                    The same launch-monitor analysis the pros use, so your fitting is data-driven, not guesswork.
                  </p>
                </CrystalCard>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <Link href="/contact#fitting">
                <GoldButton variant="primary" size="lg" pulse className="bg-black text-accent hover:bg-black/80">
                  Book Your Free Fitting
                </GoldButton>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Custom Fitting */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <ScrollReveal direction="left">
              <CrystalCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-accent" />
                  <span className="text-xs tracking-[0.3em] uppercase text-accent font-inter">Custom Fitting</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  The Same Fitting <br />
                  <span className="text-accent">The Pros Get</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed font-inter">
                  50+ European Tour pros trust me with their clubs. Now it&apos;s your turn.
                  <br /><br />
                  I&apos;m a Titleist Certified Fitter with Trackman-certified equipment and
                  years of experience helping golfers of all levels find the perfect equipment.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { title: "Trackman-Certified", desc: "Data-driven fitting with the industry standard" },
                    { title: "Titleist Ambassador", desc: "Official fitting partner for Titleist and FootJoy" },
                    { title: "Complete Equipment Analysis", desc: "Driver, fairway woods, hybrids, irons, wedges, putter" },
                    { title: "Fitness Integration", desc: "How your body affects your equipment needs" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <span className="font-semibold text-white font-playfair">{item.title}</span>
                        <p className="text-sm text-gray-500 font-inter">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <CrystalCard variant="gold" className="p-8" hover="glow">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-white">Fitting Services</h3>

                <div className="space-y-4 mb-8">
                  {/* CONFIRM WITH JAMES: fitted-tier pricing below conflicts with scraped "Custom fitting FREE" figure. If fitting is free when clubs are purchased through James, these per-tier prices may be legacy. Confirm before launch. */}
                  {[
                    { title: "Full Bag Fitting", price: "£250", desc: "Complete equipment analysis and fitting for driver, fairway woods, hybrids, irons, wedges, and putter.", duration: "2-2.5 hours" },
                    { title: "Driver & Fairway Fitting", price: "£150", desc: "Professional fitting for driver and fairway woods/hybrids to maximize distance and accuracy.", duration: "1-1.5 hours" },
                    { title: "Iron Fitting", price: "£120", desc: "Complete iron fitting including shaft selection, flex, and lofts to optimize your distance gapping.", duration: "1 hour" },
                    { title: "Wedge & Putter Fitting", price: "£100", desc: "Professional fitting for wedges (loft, bounce, lies) and putters (length, lie, loft, grip) to improve your short game.", duration: "45 minutes" },
                  ].map((item) => (
                    <CrystalCard key={item.title} className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white font-playfair">{item.title}</h4>
                        <span className="text-xl font-bold text-accent">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2 font-inter">{item.desc}</p>
                      <div className="text-xs text-gray-600 font-inter">Duration: {item.duration}</div>
                    </CrystalCard>
                  ))}
                </div>

                <CrystalCard variant="green" className="p-4 mb-6">
                  <p className="text-sm text-gray-400 font-inter">
                    <span className="font-bold text-accent">✓</span> All fittings include Trackman data,
                    launch monitor analysis, and written report
                  </p>
                </CrystalCard>

                <div className="flex flex-col gap-3">
                  <Link href="/contact#fitting">
                    <GoldButton variant="primary" size="lg" className="w-full">
                      Book Your Fitting
                    </GoldButton>
                  </Link>
                </div>
              </CrystalCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Playing Lessons */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <CrystalCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-accent" />
                  <span className="text-xs tracking-[0.3em] uppercase text-accent font-inter">Playing Lessons</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  Learn On The <br />
                  <span className="text-accent">Course</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed font-inter">
                  Theory is important, but application is everything. Playing lessons
                  teach you how to take your swing changes to the course and handle
                  real-game situations with confidence.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { title: "Course Management", desc: "Learn how to play smart, not just hard" },
                    { title: "Mental Game", desc: "How to handle pressure and bad shots" },
                    { title: "Shot Selection", desc: "When to take risks and when to play safe" },
                    { title: "One Clear Fix Application", desc: "Apply your current fix to real-game scenarios" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="text-accent text-2xl leading-none">✓</span>
                      <div>
                        <span className="font-semibold text-white font-playfair">{item.title}</span>
                        <p className="text-sm text-gray-500 font-inter">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 rounded-lg p-4 text-center mb-6 border border-accent/20">
                  <span className="text-2xl font-bold text-accent">£120</span>
                  <span className="text-gray-500 ml-3 font-inter">per round</span>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/contact#playing">
                    <GoldButton variant="secondary" size="lg" className="w-full">
                      Book Playing Lesson
                    </GoldButton>
                  </Link>
                </div>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200} className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Going From <br />
                <span className="text-accent">Range to Course</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed font-inter">
                Most golfers hit better balls on the range than they do on the course.
                Why? Because the course presents challenges that practice doesn&apos;t simulate.
              </p>

              <div className="space-y-4">
                <CrystalCard className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white font-playfair">Typical Playing Lesson</h3>
                  <div className="space-y-2 text-sm text-gray-500 font-inter">
                    <p>• Warm-up and review of current swing thoughts</p>
                    <p>• Identify one clear fix for the round</p>
                    <p>• Play 9 holes with focused practice</p>
                    <p>• Real-time feedback on course management</p>
                    <p>• Post-round review and next steps</p>
                  </div>
                </CrystalCard>

                <CrystalCard className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white font-playfair">What You Need</h3>
                  <div className="space-y-2 text-sm text-gray-500 font-inter">
                    <p>• Your own clubs (fitted, if possible)</p>
                    <p>• Golf balls and tees</p>
                    <p>• Weather-appropriate clothing</p>
                    <p>• Water and snacks</p>
                    <p>• Willingness to learn and apply new concepts</p>
                  </div>
                </CrystalCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-black">
        <div className="section-container max-w-3xl mx-auto">
          <div className="section-header mb-12">
            <h2 className="section-title font-playfair">Frequently Asked Questions</h2>
            <p className="section-subtitle font-inter">Everything you need to know about my coaching</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Do I need to be a low handicap?", a: "Not at all! I coach golfers of all abilities — from beginners to 50+ European Tour professionals. My One Clear Fix Method works for everyone." },
              { q: "How quickly will I see improvement?", a: "Most golfers feel improvement after just one session. The key is applying the one clear fix consistently in practice. With regular sessions, you'll see measurable progress in your game." },
              { q: "Do you offer group lessons?", a: "Yes! I offer group lessons for clubs, societies, and corporate events. Please contact me for pricing and availability." },
              { q: "Where are in-person lessons held?", a: "Lessons are held at my private coaching facility in Leeds. I have both indoor and outdoor hitting areas with Trackman, high-speed cameras, and all the technology for comprehensive analysis." },
              { q: "What should I bring to my first lesson?", a: "Just your clubs, golf balls, and comfort. I'll provide everything else — including Trackman data, video analysis, and the One clear fix you need." },
              { q: "Can you help with mental game challenges?", a: "Absolutely. My epilepsy journey and recovery gave me unique insight into mental toughness and resilience. I incorporate mental game strategies into every coaching plan." },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <details className="bg-surface-card rounded-xl overflow-hidden border border-white/[0.08] group">
                  <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/[0.03] transition-colors font-playfair">
                    <span>{faq.q}</span>
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-500 font-inter">{faq.a}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <AuroraBackground className="absolute inset-0" />
        <div className="section-container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-white">
              Ready To Fix Your Game?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-inter">
              Choose from in-person coaching in Leeds, online coaching from anywhere,
              or custom club fitting with the same technology the pros use.
            </p>
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#booking">
              <GoldButton variant="primary" size="lg" pulse>
                Book A Session
              </GoldButton>
            </Link>
            <Link href="/contact#consultation">
              <GoldButton variant="glass" size="lg">
                Free Consultation
              </GoldButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}