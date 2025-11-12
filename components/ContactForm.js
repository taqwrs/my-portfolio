// components/ContactForm.js
"use client"

import { Send, Mail, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // สร้าง mailto link (ยังคงเป็น front-end เท่านั้น)
    const mailtoLink = `mailto:takwa@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `ชื่อ: ${name}\nอีเมล: ${email}\n\nข้อความ:\n${message}`
    )}`

    // เปิด email client
    window.location.href = mailtoLink

    alert('ขอบคุณสำหรับข้อความ! ระบบกำลังเปิดอีเมลให้คุณ กรุณากดส่งอีเมลเพื่อติดต่อกับฉัน')
    e.target.reset()
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 dark:bg-slate-800">
      <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-300">ชื่อ-นามสกุล</label>
            <input type="text" id="name" name="name" required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-300">อีเมล</label>
            <input type="email" id="email" name="email" required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-300">หัวข้อ</label>
          <input type="text" id="subject" name="subject" required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2 dark:text-slate-300">ข้อความ</label>
          <textarea id="message" name="message" rows="5" required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white"></textarea>
        </div>
        <button type="submit"
          className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center dark:bg-indigo-700 dark:hover:bg-indigo-600">
          <Send size={20} className="mr-2" />
          ส่งข้อความ
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-slate-800 mb-2 dark:text-white">ช่องทางการติดต่ออื่นๆ</h3>
            <a href="mailto:takwa@example.com" className="text-indigo-600 hover:text-indigo-800 flex items-center dark:text-indigo-400 dark:hover:text-indigo-300">
              <Mail size={18} className="mr-2" />
              takwa@example.com
            </a>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com/taqwrs" target="_blank" className="text-slate-500 hover:text-indigo-600 transition-colors dark:text-slate-400 dark:hover:text-indigo-400" title="GitHub">
              <Github size={24} />
            </Link>
            <Link href="#" target="_blank" className="text-slate-500 hover:text-indigo-600 transition-colors dark:text-slate-400 dark:hover:text-indigo-400" title="LinkedIn">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}