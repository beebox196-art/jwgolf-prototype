import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#d4af37]">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/90 to-[#aa8c2c]" />
        
        <div className="section-container relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
                Get In Touch
          </h1>
          <p className="text-xl text-[#0f0f0f]/90 max-w-3xl mx-auto">
            Book your session, request a fitting, or get answers to your questions
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-4xl mb-6">
                📅
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Book A Session</h3>
              <p className="text-gray-400 mb-6">
                In-person coaching in Leeds or online coaching from anywhere
              </p>
              <a href="https://calendly.com/james-whittaker-golf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f5f5dc] transition-colors">
                <span>📅 Book Now</span>
              </a>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-4xl mb-6">
                📧
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Free Assessment</h3>
              <p className="text-gray-400 mb-6">
                Upload your swing and get ONE clear fix within 48 hours
              </p>
              <a href="mailto:booking@jameswhittakergolf.com" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f5f5dc] transition-colors">
                <span>📧 booking@jameswhittakergolf.com</span>
              </a>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-4xl mb-6">
                📍
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Leeds Facility</h3>
              <p className="text-gray-400 mb-6">
                Private coaching facility in Leeds, Yorkshire
              </p>
              <p className="text-[#d4af37]">Leeds, Yorkshire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="section-padding bg-gradient-to-b from-[#0f0f0f] to-[#1a365d]">
        <div className="section-container max-w-4xl mx-auto">
          <div className="section-header mb-12">
            <h2 className="section-title">Book Your Session</h2>
            <p className="section-subtitle">
              Complete the form below and I'll get back to you within 24 hours to 
              confirm your session time
            </p>
          </div>

          <form className="card bg-black/60 backdrop-blur-sm border-[#d4af37]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-input"
                  placeholder="James"
                />
              </div>
              <div>
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-input"
                  placeholder="Whittaker"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="james@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="07700 900000"
              />
            </div>

            <div className="mb-6">
              <label className="form-label">Booking Type</label>
              <select className="form-input">
                <option value="">Select a session type</option>
                <option value="in-person">In-Person Coaching (Leeds)</option>
                <option value="online">Online Coaching</option>
                <option value="fitting">Custom Fitting</option>
                <option value="playing">Playing Lesson</option>
                <option value="consultation">Free Consultation</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="form-label">Handicap</label>
              <select className="form-input">
                <option value="">Select your handicap</option>
                <option value="0-5">0-5 (Low Handicap)</option>
                <option value="6-10">6-10 (Mid Handicap)</option>
                <option value="11-18">11-18 (High Handicap)</option>
                <option value="19+">19+ (Beginner)</option>
                <option value="lady-low">Lady Low (0-5)</option>
                <option value="lady-mid">Lady Mid (6-10)</option>
                <option value="lady-high">Lady High (11-18)</option>
                <option value="lady-beginner">Lady Beginner (19+)</option>
                <option value="junior">Junior (Under 18)</option>
                <option value="senior">Senior (65+)</option>
                <option value="not-sure">Not sure / New to golf</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="form-label">What brings you to golf?</label>
              <select className="form-input">
                <option value="">Select an option</option>
                <option value="beginner">I'm a complete beginner</option>
                <option value="improve">I want to improve my game</option>
                <option value="fix-slice">I want to fix my slice</option>
                <option value="lower-handicap">I want to lower my handicap</option>
                <option value="fitting">I need equipment fitting</option>
                <option value="mental-game">I want help with the mental game</option>
                <option value="returning">I'm returning to golf after break</option>
                <option value="other">Other (please let me know in message)</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Tell me about your golf goals..."
              />
            </div>

            <div className="flex items-start gap-3 mb-8 p-4 bg-[#d4af37]/10 rounded-lg">
              <div className="w-5 h-5 rounded bg-[#d4af37]/30 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                ✓
              </div>
              <div className="text-sm text-gray-400">
                <p className="mb-2"><strong>Within 24 hours:</strong> I'll contact you to confirm your session time</p>
                <p><strong>Free swing assessment:</strong> With any coaching package booking</p>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-5 text-xl">
              Request Booking
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Or <Link href="https://calendly.com/james-whittaker-golf" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">
                book directly via Calendly
              </Link>
            </p>
          </form>
        </div>
      </section>

      {/* Free Video Assessment Form */}
      <section id="online" className="section-padding bg-gradient-to-b from-[#1a365d] to-[#d4af37]">
        <div className="section-container max-w-4xl mx-auto">
          <div className="section-header mb-12 text-center">
            <h2 className="section-title text-white">Free Video Assessment</h2>
            <p className="section-subtitle text-[#0f0f0f]/90">
              Upload your swing video. Get ONE clear fix to work on. 48-hour turnaround.
            </p>
          </div>

          <form className="card bg-black/60 backdrop-blur-sm border-[#d4af37]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="form-label text-white">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-input"
                  placeholder="James"
                />
              </div>
              <div>
                <label className="form-label text-white">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-input"
                  placeholder="Whittaker"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label text-white">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="james@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="form-label text-white">Handicap</label>
              <select className="form-input">
                <option value="">Select your handicap</option>
                <option value="0-5">0-5</option>
                <option value="6-10">6-10</option>
                <option value="11-18">11-18</option>
                <option value="19+">19+</option>
                <option value="lady-low">Lady Low (0-5)</option>
                <option value="lady-mid">Lady Mid (6-10)</option>
                <option value="lady-high">Lady High (11-18)</option>
                <option value="lady-beginner">Lady Beginner (19+)</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
                <option value="not-sure">Not sure</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="form-label text-white">Upload Swing Video</label>
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-[#d4af37]/50 transition-colors cursor-pointer">
                <div className="text-5xl mb-4">🎥</div>
                <p className="text-white font-medium">Click or drag video to upload</p>
                <p className="text-sm text-gray-500 mt-2">MP4, MOV, or M4V (max 50MB)</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label text-white">What would you like help with?</label>
              <select className="form-input">
                <option value="">Select what you need help with</option>
                <option value="full-swing">Full swing (driver, irons, woods)</option>
                <option value="short-game">Short game (chipping, pitching, bunker)</option>
                <option value="putting">Putting</option>
                <option value="course-management">Course management</option>
                <option value="mental-game">Mental game</option>
                <option value="other">Other (please specify below)</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="form-label text-white">Additional Questions or Goals</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Tell me what you want to improve..."
              />
            </div>

            <button type="submit" className="btn-primary w-full py-5 text-xl">
              Submit For Assessment
            </button>

            <p className="text-center text-sm text-white/70 mt-4">
              I'll analyze your swing and send you a personalized video within 48 hours.
            </p>
          </form>
        </div>
      </section>

      {/* Fitting Booking */}
      <section id="fitting" className="section-padding bg-black">
        <div className="section-container max-w-4xl mx-auto">
          <div className="section-header mb-12 text-center">
            <h2 className="section-title">Custom Club Fitting</h2>
            <p className="section-subtitle">
              The same fitting the pros get. Trackman-certified equipment analysis.
            </p>
          </div>

          <form className="card bg-black/60 backdrop-blur-sm border-[#d4af37]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="form-label">First Name</label>
                <input type="text" name="firstName" className="form-input" placeholder="James" />
              </div>
              <div>
                <label className="form-label">Last Name</label>
                <input type="text" name="lastName" className="form-input" placeholder="Whittaker" />
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" className="form-input" placeholder="james@example.com" />
            </div>

            <div className="mb-6">
              <label className="form-label">Phone Number</label>
              <input type="tel" name="phone" className="form-input" placeholder="07700 900000" />
            </div>

            <div className="mb-6">
              <label className="form-label">Fitting Type</label>
              <select className="form-input">
                <option value="">Select equipment to fit</option>
                <option value="full-bag">Full Bag Fitting</option>
                <option value="driver-fairway">Driver & Fairway Woods</option>
                <option value="irons">Iron Fitting</option>
                <option value="wedges-putter">Wedges & Putter</option>
                <option value="driver-only">Driver Only</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="form-label">Current Clubs</label>
              <select className="form-input">
                <option value="">Are your clubs currently fitted?</option>
                <option value="fitted">Yes, completely fitted</option>
                <option value="mostly-fitted">Mostly fitted</option>
                <option value="some-fitted">Some fitted</option>
                <option value="not-fitted">Not fitted at all</option>
                <option value="new-golfer">I'm new to golf</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="form-label">Goals For Fitting</label>
              <textarea
                name="fittingGoals"
                className="form-textarea"
                placeholder="What do you want to improve with your equipment..."
              />
            </div>

            <button type="submit" className="btn-primary w-full py-5 text-xl">
              Request Fitting Session
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              I'll contact you within 24 hours to confirm your fitting appointment.
            </p>
          </form>
        </div>
      </section>

      {/* Playing Lesson Booking */}
      <section id="playing" className="section-padding bg-[#1b4332]">
        <div className="section-container max-w-4xl mx-auto">
          <div className="section-header mb-12 text-center">
            <h2 className="section-title">Playing Lessons</h2>
            <p className="section-subtitle">
              Learn on the course. Apply your swing changes to real-game situations.
            </p>
          </div>

          <form className="card bg-black/60 backdrop-blur-sm border-[#d4af37]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="form-label text-white">First Name</label>
                <input type="text" name="firstName" className="form-input" placeholder="James" />
              </div>
              <div>
                <label className="form-label text-white">Last Name</label>
                <input type="text" name="lastName" className="form-input" placeholder="Whittaker" />
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label text-white">Email Address</label>
              <input type="email" name="email" className="form-input" placeholder="james@example.com" />
            </div>

            <div className="mb-6">
              <label className="form-label text-white">Phone Number</label>
              <input type="tel" name="phone" className="form-input" placeholder="07700 900000" />
            </div>

            <div className="mb-6">
              <label className="form-label text-white">Preferred Course</label>
              <select className="form-input">
                <option value="">Select your preferred course</option>
                <option value="leeds-gc">Leeds GC</option>
                <option value="royal-leamington">Royal Leamington Spa</option>
                <option value="hotwells">Hotwells Park</option>
                <option value="other">Other (please specify)</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="form-label text-white">Handicap</label>
              <select className="form-input">
                <option value="">Select your handicap</option>
                <option value="0-5">0-5</option>
                <option value="6-10">6-10</option>
                <option value="11-18">11-18</option>
                <option value="19+">19+</option>
                <option value="lady-low">Lady Low</option>
                <option value="lady-mid">Lady Mid</option>
                <option value="lady-high">Lady High</option>
                <option value="lady-beginner">Lady Beginner</option>
                <option value="junior">Junior</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="form-label text-white">What would you like to focus on?</label>
              <textarea
                name="playingLessonFocus"
                className="form-textarea text-white"
                placeholder="Course management, mental game, shot selection..."
              />
            </div>

            <button type="submit" className="btn-primary w-full py-5 text-xl">
              Request Playing Lesson
            </button>

            <p className="text-center text-sm text-white/70 mt-4">
              I'll contact you to confirm your playing lesson date and time.
            </p>
          </form>
        </div>
      </section>

      {/* General Contact Form */}
      <section id="consultation" className="section-padding bg-black">
        <div className="section-container max-w-4xl mx-auto">
          <div className="section-header mb-12 text-center">
            <h2 className="section-title">Free Consultation</h2>
            <p className="section-subtitle">
              Want to learn more before booking? Schedule a free 15-minute call.
            </p>
          </div>

          <form className="card bg-black/60 backdrop-blur-sm border-[#d4af37]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="form-label">First Name</label>
                <input type="text" name="firstName" className="form-input" placeholder="James" />
              </div>
              <div>
                <label className="form-label">Last Name</label>
                <input type="text" name="lastName" className="form-input" placeholder="Whittaker" />
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" className="form-input" placeholder="james@example.com" />
            </div>

            <div className="mb-6">
              <label className="form-label">Phone Number</label>
              <input type="tel" name="phone" className="form-input" placeholder="07700 900000" />
            </div>

            <div className="mb-6">
              <label className="form-label">Topic</label>
              <select className="form-input">
                <option value="">What would you like to discuss?</option>
                <option value="general">General questions</option>
                <option value="pricing">Pricing and packages</option>
                <option value="scheduling">Scheduling questions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="form-label">Question or Message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="How can I help?"
              />
            </div>

            <button type="submit" className="btn-secondary w-full py-5 text-xl">
              Request Call
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              I'll get back to you within 24 hours to schedule your free consultation.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="section-header mb-12">
            <h2 className="section-title">Contact FAQs</h2>
            <p className="section-subtitle">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>Do you offer trial lessons?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                Yes! I offer single sessions for anyone who wants to try my coaching 
                before committing to a package. Many golfers use this as a swing 
                assessment and come back for more.
              </div>
            </details>

            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>Is online coaching as effective as in-person?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                Absolutely. My online coaching uses the same One Clear Fix Method 
                as in-person sessions. The key difference is delivery — online 
                coaching gives you video analysis and personalized feedback without 
                requiring you to travel.
              </div>
            </details>

            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>What happens after I book?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                After booking, I'll send you a confirmation email with details about 
                your session. For in-person lessons, I'll provide facility directions. 
                For online coaching, I'll share upload instructions. For fittings, 
                I'll ask about your current equipment.
              </div>
            </details>

            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>Where are you located?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                I'm based in Leeds, Yorkshire. My private coaching facility has both 
                indoor and outdoor hitting areas, Trackman, high-speed cameras, and 
                all the technology for comprehensive swing analysis.
              </div>
            </details>

            <details className="bg-black rounded-xl overflow-hidden border border-white/10 group">
              <summary className="p-4 cursor-pointer flex justify-between items-center font-medium text-white hover:bg-white/5 transition-colors">
                <span>Can you travel for lessons?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-400">
                Yes! I offer travel services for groups, clubs, and special events. 
                Please contact me for availability and pricing for travel lessons.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="section-padding bg-[#0f0f0f]">
        <div className="section-container">
          <div className="card bg-[#1b4332]/20 border-[#d4af37]/30 overflow-hidden">
            <div className="aspect-video bg-[#1a365d] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-white mb-2">Leeds, Yorkshire</h3>
                <p className="text-gray-300"> idle coaching facility</p>
                <p className="text-sm text-gray-500 mt-4">
                  Exact address provided upon booking confirmation
                </p>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0f0f0f]">
              <div className="text-center">
                <h4 className="font-bold text-white mb-2">Parking</h4>
                <p className="text-sm text-gray-400">
                  Private parking available at facility
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-white mb-2">Public Transport</h4>
                <p className="text-sm text-gray-400">
                  10 minutes from Leeds city center
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-white mb-2">Accessibility</h4>
                <p className="text-sm text-gray-400">
                  Fully accessible facility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-[#d4af37]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Have A Question?
          </h2>
          <p className="text-xl text-[#0f0f0f]/90 max-w-2xl mx-auto mb-8">
                If you have a question that's not covered above, please don't hesitate 
                to contact me directly.
          </p>
          <a href="mailto:booking@jameswhittakergolf.com" className="inline-block px-8 py-4 bg-[#0f0f0f] text-[#d4af37] font-bold rounded-sm hover:bg-[#1a365d] transition-colors text-xl">
            booking@jameswhittakergolf.com
          </a>
          <p className="text-sm text-[#0f0f0f]/70 mt-4">
            Or call/text: 07700 900000
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1b4332] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Let's Fix Your Game
          </h2>
          <p className="text-xl text-[#f5f5dc]/90 max-w-2xl mx-auto mb-10">
            Book your session today and start your journey to better golf with 
            the One Clear Fix Method.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://calendly.com/james-whittaker-golf" className="btn-primary px-10 py-5">
              Book Directly
            </Link>
            <Link href="#booking" className="btn-secondary px-10 py-5">
              Fill Out Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
