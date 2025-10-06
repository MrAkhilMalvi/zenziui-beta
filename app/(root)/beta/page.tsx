"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function BetaPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black px-6">
      {/* Background floating shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-tr from-fuchsia-500 to-purple-600 blur-3xl opacity-30"
        />
        <motion.div
          animate={{ y: [0, 40, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500 to-purple-700 blur-3xl opacity-25"
        />
      </motion.div>

      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-xl w-full text-center space-y-6"
      >
        {/* Icon + headline */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-fuchsia-500 to-purple-600 text-white shadow-lg"
          >
            <Rocket className="w-8 h-8" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-600 text-transparent bg-clip-text"
        >
          Beta Version 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed"
        >
          You’re exploring the <span className="font-semibold">early access</span> version of our library.  
          We’re still building, polishing, and adding new features.  
          <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400"> Coming soon </span> — 
          a complete toolkit for building faster & better!
        </motion.p>

        {/* Highlight box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="p-4 rounded-xl border border-fuchsia-500/30 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shadow-md"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-fuchsia-600 dark:text-fuchsia-400 font-medium">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Valuable library in the making — stay tuned ✨
          </div>
        </motion.div>

        {/* Coming Soon Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-2 text-yellow-500 text-sm font-medium"
        >
          <Star className="w-4 h-4 fill-yellow-500" />
          <span>More powerful components rolling out soon</span>
          <Star className="w-4 h-4 fill-yellow-500" />
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Go to Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/MrAkhilMalvi"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            View on GitHub
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
