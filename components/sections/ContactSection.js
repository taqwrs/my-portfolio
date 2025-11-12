"use client"
import ContactForm from '@/components/form/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center dark:text-white">ติดต่อฉัน</h2>
        <p className="text-lg text-slate-600 mb-8 text-center dark:text-slate-300">
          ฉันกำลังมองหาตำแหน่งงานแรกในฐานะ Junior Developer หรือ UX/UI Designer
          <br />ติดต่อฉันได้เลย!
        </p>

        <ContactForm />
      </div>
    </section>
  )
}