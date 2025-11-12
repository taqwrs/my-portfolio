"use client"
import Link from 'next/link'
import { Briefcase, FileText, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="text-center min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-4 dark:text-white">
        สวัสดี! ฉันคือ <span className="gradient-text">ตักวา สะสอเล็ง</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 dark:text-slate-300">
        นักพัฒนาซอฟต์แวร์และนักออกแบบ UX/UI
        <span className="font-semibold text-indigo-500"> กำลังมองหาตำแหน่งงานแรก</span>
      </p>
      <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 dark:text-slate-400">
        จบการศึกษาปริญญาตรี 14 พฤศจิกายน 2568<br />
        มีประสบการณ์จากการฝึกสหกิจศึกษาและโปรเจคส่วนตัว
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="#portfolio" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
          <Briefcase size={20} className="mr-2" />
          ดูผลงานของฉัน
        </Link>
        <Link href="#resume" className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl border border-slate-200 transform hover:-translate-y-1 flex items-center justify-center dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700">
          <FileText size={20} className="mr-2" />
          ดูเรซูเม่
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link href="#about" className="flex flex-col items-center text-slate-500 hover:text-indigo-500 transition-colors dark:text-slate-400">
          <span className="text-sm mb-2">เลื่อนลง</span>
          <ChevronDown size={24} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}