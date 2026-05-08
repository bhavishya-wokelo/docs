import { useState, useEffect } from "react"

export const MobileLogos = () => {
  const [isDark, setIsDark] = useState(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    if (typeof document === "undefined") return
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])


  const row1 = [
    { name: "B Capital",    dark: "/images/hero-carousel/bcapital-white.svg", light: "/images/hero-carousel/bcapital-dark.svg", w: 150, h: 30 },
    { name: "Premji Invest",dark: "/images/hero-carousel/premji-white.svg",   light: "/images/hero-carousel/premji-dark.svg",   w: 175, h: 36 },
  ]


  const row2 = [
    { name: "Bain & Company",     dark: "/images/hero-carousel/Bain-white.svg",               light: "/images/hero-carousel/Bain-dark.svg",               w: 122, h: 32 },
    { name: "KPMG",               dark: "/images/hero-carousel/kpmg-white.svg",                light: "/images/hero-carousel/kpmg-dark.svg",                w:  66, h: 42 },
    { name: "The Heritage Group", dark: "/images/hero-carousel/heritage-group-white.svg",      light: "/images/hero-carousel/heritage-group-dark.svg",      w:  56, h: 42 },
  ]


  const row3 = [
    { name: "Untapped",            dark: "/images/hero-carousel/untapped-white.svg",            light: "/images/hero-carousel/untapped-dark.svg",            w: 113, h: 25 },
    { name: "Finstrat Management", dark: "/images/hero-carousel/finstrat-management-white.svg", light: "/images/hero-carousel/finstrat-management-dark.svg", w: 123, h: 32 },
  ]

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
    width: "100%",
  }

  const imgStyle = (w, h) => ({
    width: `${w}px`,
    height: `${h}px`,
    objectFit: "contain",
    flexShrink: 0,
    transition: "opacity 0.2s ease",
  })

  const renderRow = (logos) =>
    logos.map((logo) => (
      <img
        key={logo.name}
        src={isDark ? logo.dark : logo.light}
        alt={logo.name}
        loading="eager"
        style={imgStyle(logo.w, logo.h)}
      />
    ))

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "28px",
      width: "100%",
    }}>
      <div style={rowStyle}>{renderRow(row1)}</div>
      <div style={rowStyle}>{renderRow(row2)}</div>
      <div style={rowStyle}>{renderRow(row3)}</div>
    </div>
  )
}
