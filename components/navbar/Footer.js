// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 dark:bg-slate-900 dark:border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Takwa Sasoleng.</p>
      </div>
    </footer>
  )
}