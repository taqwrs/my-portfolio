// components/ContactForm.js
"use client"

import { Send, Mail, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function ContactForm() {
  // เปลี่ยนเป็นอีเมลจริงของคุณ
  const EMAIL = 'takwa.5022@gmail.com'

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // ใช้ตัวแปร EMAIL แทน
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `ชื่อ: ${name}\nอีเมล: ${email}\n\nข้อความ:\n${message}`
    )}`

    window.location.href = mailtoLink

    alert('ขอบคุณสำหรับข้อความ! ระบบกำลังเปิดอีเมลให้คุณ กรุณากดส่งอีเมลเพื่อติดต่อกับฉัน')
    e.target.reset()
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 dark:bg-slate-800">
      <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
        {/* ... form fields เหมือนเดิม ... */}
      </form>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-slate-800 mb-2 dark:text-white">ช่องทางการติดต่ออื่นๆ</h3>
            {/* เปลี่ยนอีเมลที่นี่ด้วย */}
            <a href={`mailto:${EMAIL}`} className="text-indigo-600 hover:text-indigo-800 flex items-center dark:text-indigo-400 dark:hover:text-indigo-300">
              <Mail size={18} className="mr-2" />
              {EMAIL}
            </a>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com/taqwrs" target="_blank" className="text-slate-500 hover:text-indigo-600 transition-colors dark:text-slate-400 dark:hover:text-indigo-400" title="GitHub">
              <Github size={24} />
            </Link>
            {/* แนะนำให้เพิ่ม LinkedIn จริง */}
            <Link href="https://www.linkedin.com/in/takwa-sasoleng-546a83312/" target="_blank" className="text-slate-500 hover:text-indigo-600 transition-colors dark:text-slate-400 dark:hover:text-indigo-400" title="LinkedIn">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}