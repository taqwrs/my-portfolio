// components/FadeIn.js
"use client"

import { useState, useRef, useEffect } from 'react'

export default function FadeIn({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true)
        // หยุด observe หลังจาก visible แล้ว
        observer.unobserve(domRef.current)
      }
    }, { threshold: 0.1 })

    observer.observe(domRef.current)

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      {children}
    </div>
  )
}