"use client"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: "Thermal Comfort Model",
    description: "เว็บโมเดลทำนายสภาวะความน่าสบายของผู้ป่วยภาวะภูมิไวเกิน พัฒนาด้วย Python และ Machine Learning",
    image: "https://placehold.co/600x400/93C5FD/3B82F6?text=Thermal+Comfort",
    githubUrl: "https://github.com/taqwrs/ThermalComfortPJ",
    tags: ["Python", "Machine Learning", "Web App"],
    badge: "Web App",
    badgeColor: "bg-indigo-600"
  },
  {
    title: "MedEquip System",
    description: "ระบบจัดการอุปกรณ์การแพทย์ พัฒนาระหว่างฝึกสหกิจศึกษา ทั้งส่วน Frontend (PG) และ Backend (API)",
    image: "https://placehold.co/600x400/A7F3D0/059669?text=MedEquip+System",
    githubUrl: "https://github.com/taqwrs/MedEquipPG",
    tags: ["Full Stack", "API", "Database"],
    badge: "Internship",
    badgeColor: "bg-green-600"
  },
  {
    title: "Productivity Application",
    description: "แอปพลิเคชันเพิ่มประสิทธิภาพการทำงาน พัฒนาระหว่างฝึกสหกิจศึกษา ทั้งส่วน Frontend และ Backend API",
    image: "https://placehold.co/600x400/FBCFE8/DB2777?text=Productivity+App",
    githubUrl: "https://github.com/taqwrs/ProductivityPG",
    tags: ["Web App", "API", "UX/UI Design"],
    badge: "Mini Project",
    badgeColor: "bg-pink-600"
  }
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center dark:text-white">ผลงานของฉัน</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md portfolio-card dark:bg-slate-800">
            <Link href={project.githubUrl} target="_blank" title="คลิกเพื่อดูบน GitHub">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  unoptimized
                />
                <div className={`absolute top-4 right-4 ${project.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {project.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm dark:text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full dark:bg-indigo-900/30 dark:text-indigo-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="https://github.com/taqwrs" target="_blank" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium dark:text-indigo-400 dark:hover:text-indigo-300">
          ดูโปรเจคทั้งหมดบน GitHub
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  )
}