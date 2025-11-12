// components/Navbar.js
"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'เกี่ยวกับฉัน', href: '#about' },
    { name: 'ทักษะ', href: '#skills' },
    { name: 'ผลงาน', href: '#portfolio' },
    { name: 'เรซูเม่', href: '#resume' },
    { name: 'ติดต่อ', href: '#contact' },
  ]

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg shadow-sm dark:bg-slate-900/80">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center dark:text-indigo-400">
          <Sparkles className="mr-2" />
          Takwa Sasoleng
        </Link>

        {/* เมนูสำหรับ Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-indigo-400">
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <Link href="#contact" className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg dark:bg-indigo-700 dark:hover:bg-indigo-600">
          ติดต่อฉัน
        </Link>

        {/* ปุ่ม Hamburger (สำหรับ Mobile) */}
        <button
          id="mobile-menu-button"
          className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* ===== 
          จุดที่น่าจะผิดอยู่ตรงนี้
          เมนูสำหรับ Mobile (ต้องมี {isMobileMenuOpen && ...} หุ้มไว้) 
      ===== */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-md dark:bg-slate-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex justify-between items-center px-6 py-3 border-t border-slate-200 dark:border-slate-700">
            <span className="text-slate-600 dark:text-slate-300">โหมด:</span>
            <ThemeToggle />
          </div>
          <Link href="#contact" className="block px-6 py-4 bg-indigo-50 text-indigo-600 font-medium text-center dark:bg-indigo-900/30 dark:text-indigo-400" onClick={closeMenu}>
            ติดต่อฉัน
          </Link>
        </div>
      )}
    </header>
  )
}