"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Shield, Zap, ArrowRight, Check, AlertTriangle, Inbox, Sparkles } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero" }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-24">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              Google is killing Gmailify in 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-center leading-tight"
          >
            Don&apos;t lose your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-400">
              unified inbox
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-slate-400 text-center max-w-2xl mx-auto"
          >
            Keep your Yahoo, Outlook, and AOL emails flowing into Gmail—with spam protection, 
            smart categories, and everything you love. Even after Google shuts down Gmailify.
          </motion.p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 max-w-md mx-auto"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? "..." : "Get Early Access"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-teal-500/10 border border-teal-500/30 rounded-xl text-teal-400"
              >
                <Check className="w-5 h-5" />
                <span>You&apos;re on the list! We&apos;ll be in touch soon.</span>
              </motion.div>
            )}
            <p className="mt-3 text-sm text-slate-500 text-center">
              Join 847+ others preparing for the switch. No spam, ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Google just broke your email workflow
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              If you use Gmailify to manage Yahoo, Outlook, or AOL accounts, 
              you&apos;re about to lose features you depend on daily.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What you're losing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                What You&apos;re Losing
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span><strong>Spam protection</strong> — Back to inbox chaos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span><strong>Smart categories</strong> — No more auto-sorting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span><strong>Better mobile notifications</strong> — Missing important emails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span><strong>Unified inbox</strong> — Juggling multiple apps again</span>
                </li>
              </ul>
            </motion.div>

            {/* Google's "solution" */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 border border-slate-700 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-slate-400 mb-6">
                Google&apos;s &quot;Solution&quot;
              </h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1">😐</span>
                  <span>Set up manual forwarding with each provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">😐</span>
                  <span>Or just use the mobile app (no desktop!)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">😐</span>
                  <span>Lose all the smart features anyway</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">😐</span>
                  <span>Figure it out yourself before late 2026</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              The Better Way
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              InboxBridge keeps your workflow intact
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              One simple bridge that connects all your email accounts with the features 
              you actually need. No Google required.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Smart Spam Blocking",
                description: "AI-powered spam filtering that actually works. Keep the junk out of every account.",
                color: "teal",
              },
              {
                icon: Inbox,
                title: "Unified Inbox",
                description: "All your accounts, one clean view. Reply from any address, search everything at once.",
                color: "violet",
              },
              {
                icon: Zap,
                title: "Instant Sync",
                description: "Real-time email sync across all devices. Never miss an important message again.",
                color: "teal",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-teal-500/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Switch in 3 minutes
            </h2>
            <p className="text-lg text-slate-400">
              No technical skills required. We handle the hard part.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Connect Your Accounts", desc: "Link Yahoo, Outlook, AOL, or any IMAP account securely." },
              { step: "2", title: "Import Your History", desc: "We migrate your existing emails and folder structure." },
              { step: "3", title: "Enjoy Your Inbox", desc: "Everything works like before—but better." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-violet-500 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mail className="w-16 h-16 text-teal-400 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to future-proof your inbox?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Join the early access list. Get founding member pricing when we launch.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? "..." : "Join Waitlist"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-teal-500/10 border border-teal-500/30 rounded-xl text-teal-400"
              >
                <Check className="w-5 h-5" />
                <span>You&apos;re on the list!</span>
              </motion.div>
            )}

            <p className="mt-8 text-sm text-slate-500">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center text-slate-500 text-sm">
          © 2026 InboxBridge. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
