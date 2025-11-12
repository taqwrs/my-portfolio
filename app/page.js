// app/page.js
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import {
  Briefcase,
  FileText,
  ChevronDown,
  GraduationCap,
  Code,
  Code2,
  Palette,
  ArrowRight,
  Download,
  Send,
  Mail,
  Github,
  Linkedin,
  UploadCloud,
} from 'lucide-react'

// เราจะสร้าง ContactForm เป็น Client Component แยก
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section id="home" className="text-center min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden">
        {/* ... (โค้ด Background decoration เหมือนเดิม) ... */}
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

      {/* ===== About Me Section ===== */}
      <FadeIn>
        <section id="about" className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center dark:text-white">เกี่ยวกับฉัน</h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-60 h-60 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                      {/* **สำคัญ:** ให้นำรูปโปรไฟล์ของคุณ (เช่น profile.jpg) ไปไว้ในโฟลเดอร์ `public`
                        แล้วเปลี่ยน 'src' ข้างล่างนี้
                      */}
                      <Image
                        src="/globe.svg" // เปลี่ยนเป็น path รูปของคุณ
                        alt="ตักวา สะสอเล็ง"
                        width={240}
                        height={240}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold">Developer & Designer</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg text-slate-600 mb-6 leading-relaxed dark:text-slate-300">
                  ฉันเป็นนักศึกษาปริญญาตรีสาขาวิทยาการคอมพิวเตอร์ ที่กำลังจะสำเร็จการศึกษาในเดือนพฤศจิกายน 2568
                  ฉันมีความสนใจในการพัฒนาซอฟต์แวร์และการออกแบบ UX/UI
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed dark:text-slate-300">
                  จากการฝึกสหกิจศึกษา ฉันได้มีโอกาสทำงานจริงในโครงการพัฒนาซอฟต์แวร์
                  และยังได้พัฒนาทักษะการออกแบบ UX/UI ผ่านโปรเจคส่วนตัวต่างๆ
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed dark:text-slate-300">
                  ฉันกำลังมองหาตำแหน่งงานแรกในฐานะ Junior Developer หรือ UX/UI Designer
                  ที่จะได้เรียนรู้และพัฒนาทักษะต่อไป
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center">
                    <GraduationCap size={20} className="text-indigo-500 mr-2" />
                    <span className="font-medium">กำลังจะจบปริญญาตรี</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={20} className="text-indigo-500 mr-2" />
                    <span className="font-medium">ประสบการณ์สหกิจศึกษา</span>
                  </div>
                  <div className="flex items-center">
                    <Code size={20} className="text-indigo-500 mr-2" />
                    <span className="font-medium">พัฒนาโปรเจคส่วนตัว</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== Skills Section ===== */}
      <FadeIn>
        <section id="skills" className="py-20 md:py-32 bg-white rounded-2xl shadow-xl -mx-6 px-6 md:px-12 dark:bg-slate-800">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center dark:text-white">ทักษะและเครื่องมือ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 dark:text-white flex items-center">
                <Code2 size={24} className="mr-2 text-indigo-500" />
                ทักษะการเขียนโปรแกรม
              </h3>
              {/* ... (โค้ด Skill bars เหมือนเดิม) ... */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300">Python</span>
                    <span className="text-slate-700 dark:text-slate-300">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                {/* ... (เพิ่ม skill อื่นๆ) ... */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300">JavaScript</span>
                    <span className="text-slate-700 dark:text-slate-300">80%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300">HTML/CSS</span>
                    <span className="text-slate-700 dark:text-slate-300">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300">SQL/Database</span>
                    <span className="text-slate-700 dark:text-slate-300">75%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 dark:text-white flex items-center">
                <Palette size={24} className="mr-2 text-indigo-500" />
                การออกแบบและเครื่องมือ
              </h3>
              {/* ... (โค้ด Tools เหมือนเดิม) ... */}
              <div className="grid grid-cols-2 gap-4">
                {/* ... (โค้ด Tools เหมือนเดิม) ... */}
                <div className="flex items-center p-3 bg-slate-100 rounded-lg dark:bg-slate-700">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mr-3 dark:bg-slate-600">
                    <span className="font-bold text-indigo-600">F</span>
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Figma</span>
                </div>
                <div className="flex items-center p-3 bg-slate-100 rounded-lg dark:bg-slate-700">
                  <div className="w-10 h-10 bg-[#61DAFB] rounded-lg flex items-center justify-center shadow-sm mr-3">
                    <span className="font-bold text-white">R</span>
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">React</span>
                </div>
                {/* ... (เพิ่ม tool อื่นๆ) ... */}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== Portfolio Section ===== */}
      <FadeIn>
        <section id="portfolio" className="py-20 md:py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center dark:text-white">ผลงานของฉัน</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* ... (โค้ด Card เหมือนเดิม แต่ใช้ Next/Image) ... */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md portfolio-card dark:bg-slate-800">
              <Link href="https://github.com/taqwrs/ThermalComfortPJ" target="_blank" title="คลิกเพื่อดูบน GitHub">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://placehold.co/600x400/93C5FD/3B82F6?text=Thermal+Comfort"
                    alt="Thermal Comfort Project"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    unoptimized
                  />
                  {/* ... (โค้ดที่เหลือ) ... */}
                </div>
                {/* ... (โค้ดที่เหลือ) ... */}
              </Link>
            </div>
            {/* ... (เพิ่ม Card อื่นๆ) ... */}
          </div>
          <div className="text-center mt-12">
            <Link href="https://github.com/taqwrs" target="_blank" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium dark:text-indigo-400 dark:hover:text-indigo-300">
              ดูโปรเจคทั้งหมดบน GitHub
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* ===== Resume Section ===== */}
      <FadeIn>
        <section id="resume" className="py-20 md:py-32 bg-white rounded-2xl shadow-xl -mx-6 px-6 md:px-12 dark:bg-slate-800">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center dark:text-white">เรซูเม่ของฉัน</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* ... (โค้ด Education & Experience เหมือนเดิม) ... */}
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

            {/* ===== ส่วนดาวน์โหลดเรซูเม่ (ที่แก้ไขแล้ว) ===== */}
            <div className="mt-12 text-center">
              <div className="bg-slate-50 rounded-xl p-8 dark:bg-slate-700">
                <h3 className="text-xl font-bold text-slate-800 mb-4 dark:text-white">ดาวน์โหลดเรซูเม่</h3>
                <p className="text-slate-600 mb-6 dark:text-slate-300">
                  คุณสามารถดาวน์โหลดเรซูเม่ของฉันในรูปแบบ PDF ได้ที่นี่
                </p>

                {/* **สำคัญ:** ให้นำไฟล์เรซูเม่ของคุณ (เช่น resume_takwa.pdf)
                  ไปวางไว้ในโฟลเดอร์ `public` ที่ root project ของคุณ
                */}
                <Link
                  href="/resume_takwa.pdf" // Path ไปยังไฟล์ในโฟลเดอร์ public
                  download="resume_takwa.pdf" // บังคับให้ดาวน์โหลด
                  target="_blank" // เปิดในแท็บใหม่ (เผื่อ browser block)
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
      </FadeIn>

      {/* ===== Contact Section ===== */}
      <FadeIn>
        <section id="contact" className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center dark:text-white">ติดต่อฉัน</h2>
            <p className="text-lg text-slate-600 mb-8 text-center dark:text-slate-300">
              ฉันกำลังมองหาตำแหน่งงานแรกในฐานะ Junior Developer หรือ UX/UI Designer
              <br />ติดต่อฉันได้เลย!
            </p>

            {/* เราจะย้าย Form ไปที่ Client Component */}
            <ContactForm />

          </div>
        </section>
      </FadeIn>
    </>
  )
}