import Image from "next/image";
import Link from "next/link";
import CrystalCard from "@/components/CrystalCard";
import BlurText from "@/components/BlurText";
import GoldButton from "@/components/GoldButton";
import ScrollReveal from "@/components/ScrollReveal";
import AuroraBackground from "@/components/AuroraBackground";

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-15 md:opacity-25">
          <Image
            src="/images/brand.png"
            alt="James Whittaker - PGA Professional"
            fill
            className="object-cover object-right grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="section-container relative z-10 text-center py-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-inter">The Story</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 accent-gradient-text">
            <BlurText text="The Resilient Coach" speed={50} delay={300} />
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter">
            James Whittaker&apos;s journey from 5 brain surgeries to helping 50+ European Tour professionals
          </p>
        </div>
      </section>

      {/* The One Clear Fix Method */}
      <section id="method" className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <ScrollReveal direction="left">
              <CrystalCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-accent" />
                  <span className="text-xs tracking-[0.3em] uppercase text-accent font-inter">The Method</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  One Clear Fix. <br />
                  <span className="text-gray-500">Not Twenty.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed font-inter">
                  Most golf coaching overwhelms you with too many swing thoughts, conflicting advice,
                  and no clear path to improvement.
                </p>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed font-inter">
                  My approach is different. I believe golf is complicated enough. You don&apos;t need
                  more information—you need clarity.
                </p>

                <CrystalCard className="p-6 bg-white/[0.02]">
                  <h3 className="text-2xl font-playfair font-bold mb-4">The Philosophy</h3>
                  <p className="text-gray-400 mb-6 font-inter">
                    Back in 2009, I was diagnosed with epilepsy that required five brain surgeries.
                    I spent more time in hospitals than on golf courses. My recovery wasn&apos;t about
                    fixing everything at once—it was about one day, one exercise, one victory at a time.
                  </p>
                  <p className="text-gray-400 font-inter">
                    That same principle applies to golf. You don&apos;t need twenty swing thoughts.
                    You need <strong className="text-white">ONE clear fix</strong>. That&apos;s the One Clear Fix Method.
                  </p>
                </CrystalCard>
              </CrystalCard>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal direction="right" delay={100}>
                <CrystalCard variant="gold" className="p-8" hover="glow">
                  <h3 className="text-2xl font-playfair font-bold mb-6 accent-gradient-text">How It Works</h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl flex-shrink-0 font-bold font-inter">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 font-playfair">Identify The Issue</h4>
                        <p className="text-gray-500 text-sm font-inter">
                          No guesswork. I use Trackman data, high-speed video, and my experience
                          to identify the single most important thing holding your game back.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl flex-shrink-0 font-bold font-inter">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 font-playfair">One Clear Fix</h4>
                        <p className="text-gray-500 text-sm font-inter">
                          Not twenty swing thoughts. One simple, actionable instruction you can
                          immediately apply. Something that sticks and actually works.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl flex-shrink-0 font-bold font-inter">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 font-playfair">Practice SMART</h4>
                        <p className="text-gray-500 text-sm font-inter">
                          Not just drills. A structured practice plan that builds muscle memory
                          and makes the fix stick under pressure.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl flex-shrink-0 font-bold font-inter">
                        4
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 font-playfair">Progress, Not Perfection</h4>
                        <p className="text-gray-500 text-sm font-inter">
                          One day, one fix, one victory at a time. Measurable, visible progress
                          that builds confidence and momentum.
                        </p>
                      </div>
                    </div>
                  </div>
                </CrystalCard>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <CrystalCard variant="green" className="p-6">
                  <h4 className="text-lg font-bold mb-3 font-playfair text-white">The Result?</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-inter">
                    Golfers go from overwhelmed to focused. Confused to clear. Stuck to progress.
                    And it happens faster than you think.
                  </p>
                </CrystalCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Resilience Story — AuroraBackground */}
      <section id="story" className="section-padding relative overflow-hidden">
        <AuroraBackground className="absolute inset-0" />

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-accent" />
                <span className="text-xs tracking-[0.3em] uppercase text-accent font-inter">The Story</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
                Five Brain Surgeries. <br />
                <span className="accent-gradient-text">
                  <BlurText text="One Unstoppable Mentality" speed={40} delay={300} />
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <CrystalCard className="p-8 mb-8 bg-black/60" hover="glow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed font-inter">
                      In 2009, my life changed forever. Diagnosed with epilepsy that required five brain surgeries,
                      I spent more time in hospitals than on golf courses.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-inter">
                      Doctors gave me a 50/50 chance of returning to normal life. I was told to expect
                      memory problems, seizures, and a life limited by fear.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-inter">
                      But I had a golf club in my hand and a fire in my belly.
                    </p>

                    <h3 className="text-2xl font-playfair font-bold mb-4 text-accent mt-8">The Epilepsy Journey</h3>
                    <div className="space-y-4">
                      {[
                        { num: "1", title: "Diagnosis", desc: "2009 — The beginning of my journey" },
                        { num: "2", title: "First Brain Surgery", desc: "6 months later — To remove the seizure focus" },
                        { num: "3", title: "The Recovery", desc: "Years of rehabilitation, learning to walk, talk, think again" },
                        { num: "4", title: "Return to Golf", desc: "Back on the course, determined to prove I still belonged" },
                        { num: "5", title: "Life Returns", desc: "Living with epilepsy, but not defined by it" },
                      ].map((item) => (
                        <div key={item.num} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 text-sm font-bold font-inter">
                            {item.num}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold font-playfair text-white">{item.title}</h4>
                            <p className="text-sm text-gray-500 font-inter">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl font-playfair font-bold mt-8 mb-4 text-accent">What I Learned</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed font-inter">
                      These experiences taught me something profound about resilience:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <CrystalCard variant="gold" className="p-4">
                        <h4 className="font-bold text-accent mb-2 font-playfair">Progress beats Perfection</h4>
                        <p className="text-sm text-gray-500 font-inter">Recovery happens one day, one exercise, one victory at a time</p>
                      </CrystalCard>
                      <CrystalCard variant="gold" className="p-4">
                        <h4 className="font-bold text-accent mb-2 font-playfair">Focus on What Matters</h4>
                        <p className="text-sm text-gray-500 font-inter">Filter out the noise. One clear fix, not twenty thoughts</p>
                      </CrystalCard>
                      <CrystalCard variant="gold" className="p-4">
                        <h4 className="font-bold text-accent mb-2 font-playfair">Mental Toughness Matters</h4>
                        <p className="text-sm text-gray-500 font-inter">Facing brain surgery 5 times teaches you about adversity</p>
                      </CrystalCard>
                      <CrystalCard variant="gold" className="p-4">
                        <h4 className="font-bold text-accent mb-2 font-playfair">Resilience Is Learnable</h4>
                        <p className="text-sm text-gray-500 font-inter">You can build the mental toughness to succeed</p>
                      </CrystalCard>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed font-inter">
                      Today, I bring that same resilience to every coaching session. Your slice doesn&apos;t
                      scare me. Your swing thoughts don&apos;t overwhelm me. I know what real adversity looks like.
                    </p>
                  </div>

                  <div className="md:col-span-1">
                    <CrystalCard className="p-6 bg-black/40">
                      <h4 className="text-xl font-playfair font-bold mb-4 text-white">My Journey Timeline</h4>
                      <div className="space-y-4">
                        {[
                          { year: "2009", title: "Diagnosis", desc: "Epilepsy treatment begins" },
                          { year: "2010", title: "First Surgery", desc: "Brain surgery #1" },
                          { year: "2011-2014", title: "Recovery", desc: "4 more brain surgeries, rehabilitation" },
                          { year: "2015", title: "Back to Golf", desc: "Returned to the course I love" },
                          { year: "2016-Present", title: "Coaching Career", desc: "50+ Tour pros, Titleist, Leeds Head Coach" },
                        ].map((item) => (
                          <div key={item.year} className="flex gap-3">
                            <span className="text-accent font-bold text-sm font-inter">{item.year}</span>
                            <div>
                              <p className="font-semibold text-sm text-white font-inter">{item.title}</p>
                              <p className="text-xs text-gray-500 font-inter">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CrystalCard>
                  </div>
                </div>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <CrystalCard variant="gold" className="p-8 text-center mt-8">
                <h3 className="text-2xl font-playfair font-bold mb-4 text-accent">This Is Why I Coach Differently</h3>
                <p className="text-lg text-gray-300 italic font-inter">
                  &ldquo;I know what real adversity looks like. Your golf struggles? They don&apos;t scare me.
                  I&apos;ve faced brain surgery five times. If I can overcome that, you can overcome your slice.&rdquo;
                </p>
              </CrystalCard>
            </ScrollReveal>

            <div className="mt-8 text-center">
              <Link href="/contact#booking">
                <GoldButton variant="primary" size="lg" pulse>
                  Book A Session
                </GoldButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-inter">Credentials</span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <div className="section-header">
            <h2 className="section-title font-playfair">Career Highlights</h2>
            <p className="section-subtitle font-inter">
              The credentials the pros trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal>
              <CrystalCard className="p-6" hover="glow">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-white">Titleist Ambassador</h3>
                <p className="text-sm text-gray-500 mb-2 font-inter">
                  Equipment expert and fitting specialist for one of golf&apos;s most prestigious brands.
                </p>
                <p className="text-xs text-gray-600 font-inter">✔ Trust fitter for 50+ European Tour pros</p>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <CrystalCard className="p-6" hover="glow">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-white">PGA Professional</h3>
                <p className="text-sm text-gray-500 mb-2 font-inter">
                  Certified by the Professional Golfers&apos; Association, University of Birmingham graduate.
                </p>
                <p className="text-xs text-gray-600 font-inter">✔ Taught at The Belfry, Oulton Hall</p>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <CrystalCard className="p-6" hover="glow">
                <div className="text-4xl mb-4">🏌️</div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-white">Leeds &amp; District Union Head Coach</h3>
                <p className="text-sm text-gray-500 mb-2 font-inter">
                  Appointed head coach for the Leeds &amp; District Union, training the next generation of golfers.
                </p>
                <p className="text-xs text-gray-600 font-inter">✔ Former Head Pro at Moor Allerton &amp; Howley Hall</p>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <CrystalCard className="p-6" hover="glow">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-white">50+ European Tour Pros Fitted</h3>
                <p className="text-sm text-gray-500 mb-2 font-inter">
                  Trust from 50+ European Tour professionals who know the difference between good and great fitting.
                </p>
                <p className="text-xs text-gray-600 font-inter">✔ Trackman-certified equipment analysis</p>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <CrystalCard className="p-6" hover="glow">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-white">Published Writer</h3>
                <p className="text-sm text-gray-500 font-inter">
                  Featured in Today&apos;s Golfer, National Club Golfer, and golf tip videos for Golfshake.com
                </p>
              </CrystalCard>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <CrystalCard className="p-6" hover="glow">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-white">Swing Specialist</h3>
                <p className="text-sm text-gray-500 mb-2 font-inter">
                  Modern teaching methods from tee to green.
                </p>
                <p className="text-xs text-gray-600 font-inter">✔ Session by Session Tuition available</p>
              </CrystalCard>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <CrystalCard variant="gold" className="mt-12 p-8 text-center" hover="glow">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-accent">Why Tour Pros Trust Me</h3>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-inter">
                European Tour professionals know that equipment is everything. When they trust me with their clubs,
                it&apos;s because I deliver the same precision, attention to detail, and results that they expect.
              </p>
            </CrystalCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Statement */}
      <section className="section-padding relative overflow-hidden">
        <AuroraBackground className="absolute inset-0" />
        <div className="section-container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 text-white">
              One Clear Fix At A Time
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-inter">
              That&apos;s my coaching philosophy. That&apos;s my process. That&apos;s exactly how I got 50+ European Tour
              professionals to trust me with their game.
            </p>
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#booking">
              <GoldButton variant="primary" size="lg" pulse>
                Book Your Session
              </GoldButton>
            </Link>
            <Link href="/about#story">
              <GoldButton variant="glass" size="lg">
                Read My Story
              </GoldButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}