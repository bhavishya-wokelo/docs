import { useState, useEffect } from "react"

export const LogoGridv2 = () => {
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
    {
      name: "Bain & Company",
      dark:  "/images/hero-carousel/Bain-white.svg",
      light: "/images/hero-carousel/Bain-dark.svg",
      w: 135, h: 40,
    },
    {
      name: "B Capital",
      dark:  "/images/hero-carousel/bcapital-white.svg",
      light: "/images/hero-carousel/bcapital-dark.svg",
      w: 164, h: 42,
    },
    {
      name: "Premji Invest",
      dark:  "/images/hero-carousel/premji-white.svg",
      light: "/images/hero-carousel/premji-dark.svg",
      w: 234, h: 50,
    },
  ]

  const row2 = [
    {
      name: "KPMG",
      dark:  "/images/hero-carousel/kpmg-white.svg",
      light: "/images/hero-carousel/kpmg-dark.svg",
      w: 102, h: 58,
    },
    {
      name: "Untapped",
      dark:  "/images/hero-carousel/untapped-white.svg",
      light: "/images/hero-carousel/untapped-dark.svg",
      w: 150, h: 32,
    },
    {
      name: "Finstrat Management",
      dark:  "/images/hero-carousel/finstrat-management-white.svg",
      light: "/images/hero-carousel/finstrat-management-dark.svg",
      w: 209, h: 58,
    },
    {
      name: "The Heritage Group",
      dark:  "/images/hero-carousel/heritage-group-white.svg",
      light: "/images/hero-carousel/heritage-group-dark.svg",
      w: 86, h: 58,
    },
  ]

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "48px",
    width: "100%",
  }

  return (
    <div
      className="logov2-wrap"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "30px",
        width: "100%",
      }}
    >
      <style>{`
        /* Scale logos down on smaller desktops so they never overflow the left column */
        @media (min-width: 1024px) and (max-width: 1299px) {
          .logov2-wrap { zoom: 0.68; }
        }
        @media (min-width: 1300px) and (max-width: 1499px) {
          .logov2-wrap { zoom: 0.78; }
        }
        @media (min-width: 1500px) and (max-width: 1699px) {
          .logov2-wrap { zoom: 0.88; }
        }
      `}</style>
      {/* Row 1 — 3 logos */}
      <div style={rowStyle}>
        {row1.map((logo) => (
          <img
            key={logo.name}
            src={isDark ? logo.dark : logo.light}
            alt={logo.name}
            loading="eager"
            style={{
              width: `${logo.w}px`,
              height: `${logo.h}px`,
              objectFit: "contain",
              flexShrink: 0,
              transition: "opacity 0.2s ease",
            }}
          />
        ))}
      </div>

      {/* Row 2 — 4 logos */}
      <div style={rowStyle}>
        {row2.map((logo) => (
          <img
            key={logo.name}
            src={isDark ? logo.dark : logo.light}
            alt={logo.name}
            loading="eager"
            style={{
              width: `${logo.w}px`,
              height: `${logo.h}px`,
              objectFit: "contain",
              flexShrink: 0,
              transition: "opacity 0.2s ease",
            }}
          />
        ))}
      </div>
    </div>
  )
}
