import React, { useState } from 'react';
import { Send, ExternalLink, MapPin, Mail, Phone } from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 bg-slate-950/95 backdrop-blur border-b border-blue-900/30 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-400">TF</div>
          <div className="flex gap-8">
            <a href="#work" className="text-sm hover:text-blue-400 transition">Work</a>
            <a href="#skills" className="text-sm hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="text-sm hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            Social Media Marketing & Strategy
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Fresh grad from NZIE with hands-on experience in campaign strategy, content creation, and Meta Ads. I build campaigns that combine logical thinking with emotional resonance.
          </p>
          <div className="flex gap-4">
            <a href="#work" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              View Work
            </a>
            <a href="#contact" className="border border-blue-600 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-900/20 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-blue-900/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://i.imgur.com/Zpt2KGW.jpg" alt="Tristan" className="rounded-lg aspect-square object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a motivated and career-focused social media marketing graduate with hands-on training in content creation, platform strategy, analytics, and brand communication.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I bring a strong work ethic, adaptability, and a genuine passion for social media and audience engagement. Through my studies, I've developed practical skills in planning campaigns, creating engaging content, and understanding online trends.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed font-semibold">
              I have also grown various clip pages for YouTubers and streamers, generating 20,000,000+ Views.
            </p>
          </div>
        </div>
      </section>

      {/* Work / Case Studies */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-24 border-t border-blue-900/30">
        <h2 className="text-4xl font-bold mb-16 text-blue-400">Featured Work</h2>

        {/* Make-A-Wish Case Study */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-8">
            <div>
              <div className="inline-block bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-blue-900">
                Capstone Project
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Make-A-Wish NZ Monthly Giving Campaign</h3>
              <p className="text-gray-300 mb-6">
                Developed a donor acquisition strategy targeting monthly giving for the Make-A-Wish Monthly Giving Programme. Used SPECH framework (Social, Political, Economic, Cultural, Historical) to align messaging with prospect personas.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-blue-400 mb-1">Campaign Goal</p>
                  <p className="text-gray-400">100 new $25/month donors</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-400 mb-1">Key Insight</p>
                  <p className="text-gray-400">Shifted from guilt-based messaging to logic-first transparency. Positioned $25/month as efficient, predictable solution.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-400 mb-1">Deliverables</p>
                  <p className="text-gray-400">Instagram carousel (Canva), YouTube video ad (CapCut), Instagram story (Adobe Firefly)</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <img src="https://i.imgur.com/dG0me8z.jpg" alt="Make-A-Wish Campaign" className="rounded-lg w-full" />
            </div>
          </div>
        </div>

        {/* Barry's Bakery Case Study */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-8">
            <div className="order-2 md:order-1 bg-blue-900/20 border border-blue-900/30 rounded-lg p-6 space-y-4">
              <img src="https://i.imgur.com/HfCB7Vl.jpg" alt="Barry's Bakery Analysis" className="rounded-lg w-full" />
              <img src="https://i.imgur.com/AZhsgNS.jpg" alt="Barry's Bakery Analysis 2" className="rounded-lg w-full" />
              <img src="https://i.imgur.com/mBVrwhZ.jpg" alt="Barry's Bakery Analysis 3" className="rounded-lg w-full" />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-orange-900/30 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-orange-900">
                Portfolio Project
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Barry's Bakery Social Media Audit & Strategy</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive competitive audit and strategic recommendations for a local Auckland bakery. I acted as a social media analyst to evaluate a 28-day brand relaunch, processing complex campaign datasets to identify high-performing platforms and content types.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">Key Finding</p>
                  <p className="text-gray-400">Video storytelling outperformed static images by 300%</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">Projected ROI</p>
                  <p className="text-gray-400">597% based on strategic roadmap recommendations</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">Deliverable</p>
                  <p className="text-gray-400">Professional presentation with data-driven insights and strategic blueprint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Work */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-blue-900/30">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Design Work</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Custom designs created for various campaigns and projects. These showcase my ability to translate strategy into compelling visual assets across different formats.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-blue-900/30 rounded-lg overflow-hidden hover:border-blue-700/60 transition">
            <img src="https://i.imgur.com/TIQElhX.jpg" alt="Poster Design 1" className="w-full aspect-square object-cover" />
          </div>
          <div className="bg-slate-900/50 border border-blue-900/30 rounded-lg overflow-hidden hover:border-blue-700/60 transition">
            <img src="https://i.imgur.com/Jzj8lUp.jpg" alt="Poster Design 2" className="w-full aspect-square object-cover" />
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-blue-900/30">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Photography</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="https://i.imgur.com/5P52w8o.jpg" alt="Auckland view" className="rounded-lg aspect-video object-cover" />
          <img src="https://i.imgur.com/nNy3kip.jpg" alt="Nature trail" className="rounded-lg aspect-video object-cover" />
          <img src="https://i.imgur.com/upzeFPS.jpg" alt="Architecture" className="rounded-lg aspect-video object-cover" />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-blue-900/30">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Skills & Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-lg text-blue-300">Platforms & Strategy</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Meta Ads Manager</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Meta Business Suite</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Instagram & TikTok</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Campaign Strategy</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Audience Analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg text-blue-300">Design & Video</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Canva</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Adobe Premiere Pro</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Adobe Photoshop</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>CapCut</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Video Editing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg text-blue-300">Other</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Content Creation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Analytics</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Copywriting</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Performance Marketing</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Account Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-2xl mx-auto px-6 py-24 border-t border-blue-900/30">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">Let's Work Together</h2>
        <p className="text-gray-300 mb-12">
          Open to freelance projects, full-time roles, or collaborations. Drop a message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 border border-blue-900/30 p-8 rounded-lg backdrop-blur">
          <div>
            <label className="block text-sm font-medium text-blue-400 mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 bg-slate-900 border border-blue-900/30 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-400 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 bg-slate-900 border border-blue-900/30 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-400 mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows="5"
              className="w-full px-4 py-2 bg-slate-900 border border-blue-900/30 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition flex items-center justify-center gap-2 font-medium"
          >
            <Send size={18} />
            Send Message
          </button>

          {submitted && (
            <div className="bg-green-900/30 border border-green-700 text-green-400 p-4 rounded-lg text-sm">
              ✓ Message received! I'll get back to you soon.
            </div>
          )}
        </form>

        <div className="mt-12 pt-12 border-t border-blue-900/30">
          <p className="text-gray-300 mb-6 font-semibold">Contact Info</p>
          <div className="flex flex-col gap-4">
            <a href="tel:+64225708755" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition">
              <Phone size={20} />
              +64 22 570 8755
            </a>
            <a href="mailto:tnfranks25@gmail.com" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition">
              <Mail size={20} />
              tnfranks25@gmail.com
            </a>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={20} />
              North Shore, Auckland, New Zealand
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2025 Tristan Franks. All rights reserved.</p>
      </footer>
    </div>
  );
}
