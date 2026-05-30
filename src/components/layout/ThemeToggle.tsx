"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark

    document.documentElement.classList.toggle("dark", shouldUseDark)

    const frame = window.requestAnimationFrame(() => {
      setIsDark(shouldUseDark)
      setIsMounted(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  function toggleTheme() {
    const nextIsDark = !isDark

    document.documentElement.classList.toggle("dark", nextIsDark)
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light")
    setIsDark(nextIsDark)
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      aria-pressed={isMounted ? isDark : false}
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 flex h-12 items-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-2xl shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-slate-900 dark:text-white dark:shadow-black/40 dark:hover:bg-blue-600"
    >
      {isMounted && isDark ? "Light" : "Dark"}
    </button>
  )
}
