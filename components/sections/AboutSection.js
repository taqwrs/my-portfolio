"use client"
import Image from 'next/image'
import { GraduationCap, Briefcase, Code } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center dark:text-white">เกี่ยวกับฉัน</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-60 h-60 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/globe.svg"
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
  )
}