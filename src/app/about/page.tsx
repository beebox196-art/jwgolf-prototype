import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
        
        <div className="section-container relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gold-gradient-text">
            The Resilient Coach
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            James Whittaker's journey from 5 brain surgeries to helping 50+ European Tour professionals
          </p>
        </div>
      </section>

      {/* The One Clear Fix Method */}
      <section id="method" className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="badge badge-green mb-6 inline-block">The Method</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                One Clear Fix. <br />
                <span className="text-gray-500">Not Twenty.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Most golf coaching overwhelm you with too many swing thoughts, conflicting advice, 
                and no clear path to improvement.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                My approach is different. I believe golf is complicated enough. You don't need 
                more information—you need clarity.
              </p>
              
              <div className="card bg-white/5 mb-8">
                <h3 className="text-2xl font-bold mb-4">The Philosophy</h3>
                <p className="text-gray-300 mb-6">
                  Back in 2009, I was diagnosed with epilepsy that required five brain surgeries. 
                  I spent more time in hospitals than on golf courses. My recovery wasn't about 
                  fixing everything at once—it was about one day, one exercise, one victory at a time.
                </p>
                <p className="text-gray-300">
                  That same principle applies to golf. You don't need twenty swing thoughts. 
                  You need <strong>ONE clear fix</strong>. That's the One Clear Fix Method.
                </p>
              </div>
            </div>

            <div className="animate-fade-in delay-100">
              <div className="card bg-gradient-to-br from-[#1b4332]/20 to-black/40 border-[#1b4332]/30">
                <h3 className="text-2xl font-bold mb-6 text-[#1b4332] gold-gradient-text">How It Works</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1b4332] flex items-center justify-center text-white text-xl flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Identify The Issue</h4>
                      <p className="text-gray-400 text-sm">
                        No guesswork. I use Trackman data, high-speed video, and my experience 
                        to identify the single most important thing holding your game back.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1b4332] flex items-center justify-center text-white text-xl flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">One Clear Fix</h4>
                      <p className="text-gray-400 text-sm">
                        Not twenty swing thoughts. One simple, actionable instruction you can 
                        immediately apply. Something that sticks and actually works.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1b4332] flex items-center justify-center text-white text-xl flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Practice SMART</h4>
                      <p className="text-gray-400 text-sm">
                        Not just drills. A structured practice plan that builds muscle memory 
                        and makes the fix stick under pressure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1b4332] flex items-center justify-center text-white text-xl flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Progress, Not Perfection</h4>
                      <p className="text-gray-400 text-sm">
                        One day, one fix, one victory at a time. measurable, visible progress 
                        that builds confidence and momentum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#1b4332]/20 rounded-xl border border-[#1b4332]/30">
                <h4 className="text-lg font-bold mb-3">The Result?</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Golfers go from overwhelmed to focused. Confused to clear. Stuck to progress.
                  And it happens faster than you think.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resilience Story */}
      <section id="story" className="section-padding bg-gradient-to-b from-black to-[#1b4332]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="badge badge-purple mb-6 inline-block">The Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Five Brain Surgeries. <br />
              <span className="gold-gradient-text">One Unstoppable mentally</span>
            </h2>

            <div className="card bg-black/60 backdrop-blur-sm border border-white/10 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    In 2009, my life changed forever. Diagnosed with epilepsy that required five brain surgeries, 
                    I spent more time in hospitals than on golf courses.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Doctors gave me a 50/50 chance of returning to normal life. I was told to expect 
                    memory problems, seizures, and a life limited by fear.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    But I had a golf club in my hand and a fire in my belly.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">The Epilepsy Journey</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#7b3fa0]/20 flex items-center justify-center text-[#7b3fa0] flex-shrink-0 text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="text-lg font-bold"> diagnosis</h4>
                        <p className="text-sm text-gray-400">2009 - The beginning of my journey</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#7b3fa0]/20 flex items-center justify-center text-[#7b3fa0] flex-shrink-0 text-sm font-bold">
                        2
                      </div>
                    <div>
                      <h4 className="text-lg font-bold">First Brain Surgery</h4>
                      <p className="text-sm text-gray-400">6 months later - To remove the seizure focus</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#7b3fa0]/20 flex items-center justify-center text-[#7b3fa0] flex-shrink-0 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">The Recovery</h4>
                      <p className="text-sm text-gray-400">Years of rehabilitation, learning to walk, talk, think again</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#7b3fa0]/20 flex items-center justify-center text-[#7b3fa0] flex-shrink-0 text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">重返 Golf</h4>
                      <p className="text-sm text-gray-400">Back on the course, determined to prove I still belonged</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#7b3fa0]/20 flex items-center justify-center text-[#7b3fa0] flex-shrink-0 text-sm font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="text-lg font-bold"> Life Returns</h4>
                      <p className="text-sm text-gray-400">Living with epilepsy, but not defined by it</p>
                    </div>
                  </div>
                  </div>

                  <h3 className="text-2xl font-bold mt-8 mb-4 text-[#d4af37]">What I Learned</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    These experiences taught me something profound about resilience:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg">
                      <h4 className="font-bold text-[#d4af37] mb-2">Progress beats Perfection</h4>
                      <p className="text-sm text-gray-400">Recovery happens one day, one exercise, one victory at a time</p>
                    </div>
                    <div className="p-4 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg">
                      <h4 className="font-bold text-[#d4af37] mb-2">Focus on What Matters</h4>
                      <p className="text-sm text-gray-400">Filter out the noise. One clear fix, not twenty thoughts</p>
                    </div>
                    <div className="p-4 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg">
                      <h4 className="font-bold text-[#d4af37] mb-2">Mental Toughness Matters</h4>
                      <p className="text-sm text-gray-400"> Facing brain surgery 5 times teaches you about adversity</p>
                    </div>
                    <div className="p-4 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg">
                      <h4 className="font-bold text-[#d4af37] mb-2">Resilience Is Learnable</h4>
                      <p className="text-sm text-gray-400"> everything, you can build the mental toughness to succeed</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    Today, I bring that same resilience to every coaching session. Your slice doesn't 
                    scare me. Your swing thoughts don't overwhelm me. I know what real adversity looks like.
                  </p>
                </div>

                <div className="md:col-span-1 bg-black/40 p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">My Journey Timeline</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-[#7b3fa0] font-bold">2009</span>
                      <div>
                        <p className="font-semibold">Diagnosis</p>
                        <p className="text-sm text-gray-400">Epilepsy treatment begins</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#7b3fa0] font-bold">2010</span>
                      <div>
                        <p className="font-semibold">First Surgery</p>
                        <p className="text-sm text-gray-400">Brain surgery #1</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#7b3fa0] font-bold">2011-2014</span>
                      <div>
                        <p className="font-semibold">Recovery</p>
                        <p className="text-sm text-gray-400">4 more brain surgeries, rehabilitation</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#7b3fa0] font-bold">2015</span>
                      <div>
                        <p className="font-semibold">Back to Golf</p>
                        <p className="text-sm text-gray-400">Returned to the course I love</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#7b3fa0] font-bold">2016-Present</span>
                      <div>
                        <p className="font-semibold">Coaching Career</p>
                        <p className="text-sm text-gray-400">50+ Tour pros, Titleist, Leeds Head Coach</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-8 bg-gradient-to-r from-[#7b3fa0]/20 to-[#1b4332]/20 rounded-xl border border-[#7b3fa0]/30 text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#7b3fa0]">This Is Why I Coach Differently</h3>
              <p className="text-lg text-gray-300 italic">
                "I know what real adversity looks like. Your golf struggles? They don't scare me.
                I've faced brain surgery five times. If I can overcome that, you can overcome your slice."
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact#booking" className="inline-block btn-primary px-10 py-5 text-xl">
                Book A Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">career Highlights</h2>
            <p className="section-subtitle">
              The equivalent credentials the pros trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Titleist Ambassador</h3>
              <p className="text-sm text-gray-400 mb-4">
                Equipment expert and fitting specialist for one of golf's most prestigious brands.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">England</div>
              <h3 className="text-xl font-bold mb-2">Leeds & District Union Head Coach</h3>
              <p className="text-sm text-gray-400 mb-4">
                Appointed head coach for the Leeds & District Union, training the next generation of golfers.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-2">50+ European Tour Pros Fitted</h3>
              <p className="text-sm text-gray-400 mb-4">
                Trust from 50+ European Tour professionals who know the difference between good and great fitting.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">Published Writer</h3>
              <p className="text-sm text-gray-400 mb-4">
                Featured in Today's Golfer, National Club Golfer, and other major publications.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">PGA Professional</h3>
              <p className="text-sm text-gray-400 mb-4">
                Certified by the Professional Golfers' Association with years of teaching experience.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Trackman Certified</h3>
              <p className="text-sm text-gray-400 mb-4">
                Data-driven coaching using Trackman technology to measure and improve performance.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/5 rounded-xl border border-[#d4af37]/20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">Why Tour Pros Trust Me</h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              European Tour professionals know that equipment is everything. When they trust me with their clubs, 
              it's because I deliver the same precision, attention to detail, and results that they expect.
            </p>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="section-padding bg-[#1b4332] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            One Clear Fix At A Time
          </h2>
          <p className="text-xl md:text-2xl text-[#f5f5dc]/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            That's my coaching philosophy. That's my process. That's exactly how I got 50+ European Tour 
            professionals to trust me with their game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#booking" className="btn-primary px-10 py-5">
              Book Your Session
            </Link>
            <Link href="/about#story" className="btn-secondary px-10 py-5">
              Read My Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
