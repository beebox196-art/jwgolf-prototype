import Link from "next/link";

export default function LessonsPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1b4332]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b4332] via-[#0f0f0f] to-[#1a365d]" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4332]/80 to-[#1b4332]" />
        
        <div className="section-container relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Coaching Services
          </h1>
          <p className="text-xl text-[#f5f5dc]/90 max-w-3xl mx-auto">
            From one-click swing analysis to complete game transformation — I've got a plan for every golfer
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-black">
        <div className="section-container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Which Coaching Path Is Right For You?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            My coaching philosophy is simple: <strong>One clear fix at a time</strong>. 
            Not twenty swing thoughts. Not overwhelming instruction. Just clarity, 
            actionable steps, and measurable progress.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-bold text-[#d4af37] mb-2">Proven</h3>
                <p className="text-sm text-gray-400">
                  50+ European Tour professionals have trusted me with their games
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-[#d4af37] mb-2">One Fix Method</h3>
                <p className="text-sm text-gray-400">
                  Not twenty swing thoughts. Just one clear instruction that works
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-bold text-[#d4af37] mb-2">Trackman Powered</h3>
                <p className="text-sm text-gray-400">
                  Data-driven coaching with the same technology the pros use
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/20">
              <p className="text-gray-300 italic">
                "I've spent my entire career helping golfers improve — from 50+ European Tour pros 
                to absolute beginners. My goal is always the same: <strong>one clear fix, one victory at a time</strong>."
              </p>
              <p className="text-[#d4af37] mt-2 font-bold">— James Whittaker, PGA</p>
            </div>
          </div>
        </div>
      </section>

      {/* In-Person Coaching */}
      <section className="section-padding bg-gradient-to-b from-black to-[#0f0f0f]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in">
              <span className="badge badge-green mb-6 inline-block">In-Person Coaching</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fix Your Swing <br />
                <span className="text-[#1b4332]">In One Session</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Trackman-powered analysis. One clear takeaway. Real improvement.
                <br /><br />
                Your session includes comprehensive swing analysis, personal practice plan, and 
                follow-up support to ensure your fix sticks.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-white">Trackman Data</span>
                    <p className="text-sm text-gray-400">Ball speed, launch angle, spin rate, and more</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-white">High-Speed Video</span>
                    <p className="text-sm text-gray-400">Slow-motion analysis of your swing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-white">One Clear Fix</span>
                    <p className="text-sm text-gray-400">One simple instruction you can apply immediately</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-white">Practice Plan</span>
                    <p className="text-sm text-gray-400">Drills to make the fix stick</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-white">Follow-Up</span>
                    <p className="text-sm text-gray-400">24-hour email support after your session</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#1b4332]/20 rounded-xl border border-[#1b4332]/30 mb-8">
                <h3 className="text-xl font-bold mb-2">Location: Leeds, Yorkshire</h3>
                <p className="text-gray-400 text-sm">
                  Private coaching facility with Trackman, high-speed camera, and indoor/outdoor hitting areas.
                </p>
              </div>
            </div>

            <div className="animate-fade-in delay-100">
              <div className="card bg-black/60 border-[#1b4332]/40">
                <h3 className="text-2xl font-bold mb-6 text-white">.getSession Packages</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-[#1b4332]/20 rounded-xl border border-[#1b4332]/30 hover:border-[#d4af37]/50 transition-colors">
                    <div>
                      <h4 className="text-xl font-bold text-white">Single Session</h4>
                      <p className="text-sm text-gray-400">Perfect for a swing check or one clear fix</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#d4af37]">£150</div>
                      <div className="text-sm text-gray-400">60 minutes</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/40 hover:border-[#d4af37]/60 transition-colors transform hover:scale-102 shadow-xl shadow-[#d4af37]/10">
                    <div>
                      <div className="absolute -top-3 right-4">
                        <span className="bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-[#d4af37]">3-Package</h4>
                      <p className="text-sm text-gray-400">Best value — build momentum with 3 sessions</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">£400</div>
                      <div className="text-sm text-gray-400">180 minutes total</div>
                      <div className="text-xs text-[#1b4332] font-semibold mt-1">
                        Save £50 (8% off)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#1b4332]/20 rounded-xl border border-[#1b4332]/30 hover:border-[#d4af37]/50 transition-colors">
                    <div>
                      <h4 className="text-xl font-bold text-white">6-Package</h4>
                      <p className="text-sm text-gray-400">Complete transformation — comprehensive coaching</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#d4af37]">£750</div>
                      <div className="text-sm text-gray-400">360 minutes total</div>
                      <div className="text-xs text-[#1b4332] font-semibold mt-1">
                        Save £150 (17% off)
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/contact#booking" className="btn-primary w-full block text-center py-5 text-xl">
                  Book Your Session
                </Link>

                <p className="text-center text-sm text-gray-500 mt-4">
                  *Free swing assessment with any package booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Coaching */}
      <section className="section-padding bg-gradient-to-b from-[#0f0f0f] to-[#1a365d]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="card bg-black/60 border-[#1a365d]/40">
                <span className="badge badge-green mb-6 inline-block">Online Coaching</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Professional Coaching <br />
                  <span className="text-[#1a365d]">Anywhere You Are</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                 _upload your swing. Get your One Clear Fix within 48 hours. 
                  Professional coaching from anywhere in the world.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1a365d]/20 flex items-center justify-center text-[#1a365d] flex-shrink-0 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <span className="font-semibold text-white">Upload Your Swing</span>
                      <p className="text-sm text-gray-400">Record your swing from any angle (phone works great)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1a365d]/20 flex items-center justify-center text-[#1a365d] flex-shrink-0 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <span className="font-semibold text-white">Detailed Analysis</span>
                      <p className="text-sm text-gray-400">I analyze your swing and identify one clear fix</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1a365d]/20 flex items-center justify-center text-[#1a365d] flex-shrink-0 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <span className="font-semibold text-white">Personal Video Feedback</span>
                      <p className="text-sm text-gray-400">I record a custom video explaining your one fix</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1a365d]/20 flex items-center justify-center text-[#1a365d] flex-shrink-0 text-sm font-bold">
                      4
                    </div>
                    <div>
                      <span className="font-semibold text-white">Practice Plan</span>
                      <p className="text-sm text-gray-400">Drills and exercises to make the fix stick</p>
                    </div>
                  </div>
                </div>

                <Link href="/contact#online" className="btn-secondary w-full block text-center py-5 text-xl border-[#1a365d] hover:bg-[#1a365d]">
                  Try Online Coaching
                </Link>
              </div>
            </div>

            <div className="animate-fade-in delay-200 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Online Coaching <br />
                <span className="text-[#1a365d]">Packages</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Perfect for golfers who can't travel or want flexible coaching from anywhere.
                Same high-quality instruction as in-person, delivered digitally.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-[#1a365d]/20 rounded-xl border border-[#1a365d]/30 hover:border-[#d4af37]/50 transition-colors">
                  <div>
                    <h4 className="text-xl font-bold text-white">Single Analysis</h4>
                    <p className="text-sm text-gray-400">One clear fix, delivered via video</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#d4af37]">£99</div>
                    <div className="text-sm text-gray-400">48-hour turnaround</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/40 hover:border-[#d4af37]/60 transition-colors transform hover:scale-102 shadow-xl shadow-[#d4af37]/10">
                  <div>
                    <div className="absolute -top-3 right-6">
                      <span className="bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full">
                        Best Value
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#d4af37]">Monthly Subscription</h4>
                    <p className="text-sm text-gray-400">5 analyses per month, priority response</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">£299</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-[#1a365d]/20 rounded-xl border border-[#1a365d]/30 hover:border-[#d4af37]/50 transition-colors">
                  <div>
                    <h4 className="text-xl font-bold text-white">3-Month Package</h4>
                    <p className="text-sm text-gray-400">15 analyses, ongoing support, progress tracking</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#d4af37]">£799</div>
                    <div className="text-sm text-gray-400">15 analyses total</div>
                    <div className="text-xs text-[#1a365d] font-semibold mt-1">
                      Save £98 (11% off)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#1a365d]/10 rounded-lg">
                <p className="text-sm text-gray-400">
                  ✅ All online coaching includes one clear fix, video feedback, and practice plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Fitting */}
      <section className="section-padding bg-gradient-to-b from-[#1a365d] to-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in">
              <span className="badge badge-green mb-6 inline-block">Custom Fitting</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Same Fitting <br />
                <span className="text-[#d4af37]">The Pros Get</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                50+ European Tour pros trust me with their clubs. Now it's your turn.
                <br /><br />
                I'm a Titleist Certified Fitter with Trackman-certified equipment and 
                years of experience helping golfers of all levels find the perfect equipment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-white">Trackman-Certified</span>
                    <p className="text-sm text-gray-400">Data-driven fitting with the industry standard</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-white">Titleist Ambassador</span>
                    <p className="text-sm text-gray-400">Official fitting partner for Titleist and FootJoy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-white">Complete Equipment Analysis</span>
                    <p className="text-sm text-gray-400">Driver, fairway woods, hybrids, irons, wedges, putter</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-white">Fitness Integration</span>
                    <p className="text-sm text-gray-400">How your body affects your equipment needs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-100">
              <div className="card bg-black/60 border-[#d4af37]/40">
                <h3 className="text-2xl font-bold mb-6 text-white">Fitting Services</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-[#d4af37]/5 rounded-lg border border-[#d4af37]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">Full Bag Fitting</h4>
                      <span className="text-xl font-bold text-[#d4af37]">£250</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      Complete equipment analysis and fitting for driver, fairway woods, 
                      hybrids, irons, wedges, and putter.
                    </p>
                    <div className="text-xs text-gray-500">Duration: 2-2.5 hours</div>
                  </div>

                  <div className="p-4 bg-[#d4af37]/5 rounded-lg border border-[#d4af37]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">Driver & Fairway Fitting</h4>
                      <span className="text-xl font-bold text-[#d4af37]">£150</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      Professional fitting for driver and fairway woods/hybrids to 
                      maximize distance and accuracy.
                    </p>
                    <div className="text-xs text-gray-500">Duration: 1-1.5 hours</div>
                  </div>

                  <div className="p-4 bg-[#d4af37]/5 rounded-lg border border-[#d4af37]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">Iron Fitting</h4>
                      <span className="text-xl font-bold text-[#d4af37]">£120</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      Complete iron fitting including shaft selection, flex, and 
                      lofts to optimize your distance gapping.
                    </p>
                    <div className="text-xs text-gray-500">Duration: 1 hour</div>
                  </div>

                  <div className="p-4 bg-[#d4af37]/5 rounded-lg border border-[#d4af37]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">Wedge & Putter Fitting</h4>
                      <span className="text-xl font-bold text-[#d4af37]">£100</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                     专业 fitting for wedges (loft, bounce, lies) and putters 
                      (length, lie, loft, grip) to improve your short game.
                    </p>
                    <div className="text-xs text-gray-500">Duration: 45 minutes</div>
                  </div>
                </div>

                <div className="p-4 bg-[#d4af37]/10 rounded-lg mb-6">
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-[#d4af37]">✓</span> All fittings include Trackman data, 
                    launch monitor analysis, and written report
                  </p>
                </div>

                <Link href="/contact#fitting" className="btn-primary w-full block text-center py-5 text-xl">
                  Book Your Fitting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Playing Lessons */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="card bg-[#1b4332]/20 border-[#1b4332]/40">
                <span className="badge badge-green mb-6 inline-block">Playing Lessons</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Learn On The <br />
                  <span className="text-[#1b4332]">Course</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Theory is important, but application is everything. Playing lessons 
                  teach you how to take your swing changes to the course and handle 
                  real-game situations with confidence.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-[#1b4332] text-2xl">✓</span>
                    <div>
                      <span className="font-semibold text-white">Course Management</span>
                      <p className="text-sm text-gray-400">Learn how to play smart, not just hard</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1b4332] text-2xl">✓</span>
                    <div>
                      <span className="font-semibold text-white">Mental Game</span>
                      <p className="text-sm text-gray-400">How to handle pressure and bad shots</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1b4332] text-2xl">✓</span>
                    <div>
                      <span className="font-semibold text-white">Shot Selection</span>
                      <p className="text-sm text-gray-400">When to take risks and when to play safe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1b4332] text-2xl">✓</span>
                    <div>
                      <span className="font-semibold text-white">One Clear Fix Application</span>
                      <p className="text-sm text-gray-400">Apply your current fix to real-game scenarios</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1b4332]/30 rounded-lg p-4 text-center">
                  <span className="text-2xl font-bold text-[#d4af37]">£120</span>
                  <span className="text-gray-400 ml-3">per round</span>
                </div>

                <Link href="/contact#playing" className="btn-secondary w-full block text-center mt-6 py-4">
                  Book Playing Lesson
                </Link>
              </div>
            </div>

            <div className="animate-fade-in delay-200 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Going From <br />
                <span className="text-[#d4af37]">Range to Course</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Most golfers hit better balls on the range than they do on the course. 
                Why? Because the course presents challenges that practice doesn't simulate.
              </p>

              <div className="space-y-4">
                <div className="p-6 bg-[#d4af37]/5 rounded-xl border border-[#d4af37]/20">
                  <h3 className="text-xl font-bold mb-3 text-white">Typical Playing Lesson</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• Warm-up and review of current swing thoughts</p>
                    <p>• Identify one clear fix for the round</p>
                    <p>• Play 9 holes with focused practice</p>
                    <p>• Real-time feedback on course management</p>
                    <p>• Post-round review and next steps</p>
                  </div>
                </div>

                <div className="p-6 bg-[#d4af37]/5 rounded-xl border border-[#d4af37]/20">
                  <h3 className="text-xl font-bold mb-3 text-white">What You Need</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• Your own clubs (fitted, if possible)</p>
                    <p>• Golf balls and tees</p>
                    <p>• Weather-appropriate clothing</p>
                    <p>• Water and snacks</p>
                    <p>• Willingness to learn and apply new concepts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="section-header mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about my coaching</p>
          </div>

          <div className="space-y-4">
            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>Do I need to be a low handicap?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                Not at all! I coach golfers of all abilities — from beginners to 50+ European Tour 
                professionals. My One Clear Fix Method works for everyone.
              </div>
            </details>

            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>How quickly will I see improvement?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                Most golfers feel improvement after just one session. The key is applying 
                the one clear fix consistently in practice. With regular sessions, 
                you'll see measurable progress in your game.
              </div>
            </details>

            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>Do you offer group lessons?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                Yes! I offer group lessons for clubs, societies, and corporate events. 
                Please contact me for pricing and availability.
              </div>
            </details>

            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>Where are in-person lessons held?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                Lessons are held at my private coaching facility in Leeds. I have both 
                indoor and outdoor hitting areas with Trackman, high-speed cameras, 
                and all the technology for comprehensive analysis.
              </div>
            </details>

            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>What should I bring to my first lesson?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                Just your clubs, golf balls, and comfort. I'll provide everything else — 
                including Trackman data, video analysis, and theOne clear fix you need.
              </div>
            </details>

            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>Can you help with mental game challenges?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                Absolutely. My epilepsy journey and recovery gave me unique insight into 
                mental toughness and resilience. I incorporate mental game strategies 
                into every coaching plan.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1b4332] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready To Fix Your Game?
          </h2>
          <p className="text-xl text-[#f5f5dc]/90 max-w-2xl mx-auto mb-10">
            Choose from in-person coaching in Leeds, online coaching from anywhere, 
            or custom club fitting with the same technology the pros use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#booking" className="btn-primary px-10 py-5">
              Book A Session
            </Link>
            <Link href="/contact#consultation" className="btn-secondary px-10 py-5">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
