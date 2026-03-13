"use client"
import { Code2, Palette } from 'lucide-react'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white rounded-2xl shadow-xl -mx-6 px-6 md:px-12 dark:bg-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center dark:text-white">ทักษะและเครื่องมือ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-6 dark:text-white flex items-center">
            <Code2 size={24} className="mr-2 text-indigo-500" />
            ทักษะการเขียนโปรแกรม
          </h3>
          <div className="space-y-4">
            {[
              { name: 'Python', level: 85 },
              { name: 'JavaScript', level: 85 },
              { name: 'HTML/CSS', level: 90 },
              { name: 'SQL/Database', level: 90 }
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className="text-slate-700 dark:text-slate-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-6 dark:text-white flex items-center">
            <Palette size={24} className="mr-2 text-indigo-500" />
            การออกแบบและเครื่องมือ
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Figma', bgColor: 'bg-white', textColor: 'text-indigo-600', letter: 'F' },
              { name: 'React', bgColor: 'bg-[#61DAFB]', textColor: 'text-white', letter: 'R' },
              { name: 'Node.js', bgColor: 'bg-[#339933]', textColor: 'text-white', letter: 'N' },
              { name: 'MySQL', bgColor: 'bg-[#4479A1]', textColor: 'text-white', letter: 'M' },
              { name: 'Git', bgColor: 'bg-[#F05032]', textColor: 'text-white', letter: 'G' },
              { name: 'Postman', bgColor: 'bg-[#FFD02F]', textColor: 'text-white', letter: 'P' }
            ].map((tool, index) => (
              <div key={index} className="flex items-center p-3 bg-slate-100 rounded-lg dark:bg-slate-700">
                <div className={`w-10 h-10 ${tool.bgColor} rounded-lg flex items-center justify-center shadow-sm mr-3 dark:bg-slate-600`}>
                  <span className={`font-bold ${tool.textColor}`}>{tool.letter}</span>
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}