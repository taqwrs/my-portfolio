"use client"
import Link from 'next/link'
import { GraduationCap, Briefcase, Download } from 'lucide-react'

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 md:py-32 bg-white rounded-2xl shadow-xl -mx-6 px-6 md:px-12 dark:bg-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center dark:text-white">เรซูเม่ของฉัน</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 dark:text-white flex items-center">
              <GraduationCap size={24} className="mr-2 text-indigo-500" />
              การศึกษา
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-indigo-500 pl-4">
                <h4 className="font-bold text-slate-800 dark:text-white">ปริญญาตรี วิทยาการคอมพิวเตอร์</h4>
                <p className="text-slate-600 dark:text-slate-300">มหาวิทยาลัย...</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">คาดว่าจะจบการศึกษา: 14 พฤศจิกายน 2568</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 dark:text-white flex items-center">
              <Briefcase size={24} className="mr-2 text-indigo-500" />
              ประสบการณ์
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-indigo-500 pl-4">
                <h4 className="font-bold text-slate-800 dark:text-white">ฝึกสหกิจศึกษา - Developer</h4>
                <p className="text-slate-600 dark:text-slate-300">บริษัท...</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">พัฒนาระบบ MedEquip และ Productivity Application</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-50 rounded-xl p-8 dark:bg-slate-700">
            <h3 className="text-xl font-bold text-slate-800 mb-4 dark:text-white">ดาวน์โหลดเรซูเม่</h3>
            <p className="text-slate-600 mb-6 dark:text-slate-300">
              คุณสามารถดาวน์โหลดเรซูเม่ของฉันในรูปแบบ PDF ได้ที่นี่
            </p>
            <Link
              href="/resume_takwa.pdf"
              download="resume_takwa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 dark:bg-indigo-700 dark:hover:bg-indigo-600"
            >
              <Download size={20} className="mr-2" />
              ดาวน์โหลดเรซูเม่ PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}