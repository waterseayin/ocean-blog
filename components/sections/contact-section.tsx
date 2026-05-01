"use client";
import { profile } from "@/data/profile";
import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-400"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-3xl font-bold text-white md:text-5xl"
        >
          联系我
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-12 text-neutral-400"
        >
          有合作意向或技术交流？欢迎随时联系我。
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          <a
            href={`mailto:${profile.contact.email}`}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-purple-500/30 hover:bg-white/[0.05]"
          >
            <div className="mb-3 text-3xl">📧</div>
            <h3 className="mb-1 font-medium text-white">邮箱</h3>
            <p className="text-sm text-neutral-400 break-all">
              {profile.contact.email}
            </p>
          </a>
          <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-purple-500/30 hover:bg-white/[0.05]">
            <div className="mb-3 text-3xl">💬</div>
            <h3 className="mb-1 font-medium text-white">微信</h3>
            <p className="text-sm text-neutral-400">{profile.contact.wechat}</p>
          </div>
          <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-purple-500/30 hover:bg-white/[0.05]">
            <div className="mb-3 text-3xl">📍</div>
            <h3 className="mb-1 font-medium text-white">所在地</h3>
            <p className="text-sm text-neutral-400">{profile.contact.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
