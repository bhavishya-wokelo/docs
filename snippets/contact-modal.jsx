import { useState, useEffect, useRef } from "react"

import { LogoTicker } from "/snippets/LogoTicker.jsx"


const ContactModal = () => {

  const ASSET_BASE_URL = "https://wkemails.blob.core.windows.net/fe-application/new-website/hero-carousel/new-logos"

const logos = [
  "/bain.svg",
  "/berkshire.svg",
  "/P&G-logo.svg",
  "/th-global.svg",
  "/bcapital.svg"
 ]

 const logoItems = logos.map(logo => (
   <img
     src={`${ASSET_BASE_URL}${logo}`}
     alt="partner logo"
     className="w-auto px-10 max-h-12 object-contain"
     key={logo}
   />
 ))

 const mobileLogoItems = logos.map(logo => (
   <img
     src={`https://wkemails.blob.core.windows.net/fe-application/new-website/hero-carousel/new-logos${logo}`}
     alt="partner logo"
     className="w-auto px-10 max-h-12 object-contain"
     key={logo}
   />
 ))

 const [isOpen, setIsOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    industry: "",
    useCase: ""
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
  if (typeof window === "undefined") return

  const params = new URLSearchParams(window.location.search)
  if (params.get("contact") === "true") {
    setIsOpen(true)
  }
}, [])

  useEffect(() => {
  if (typeof window === "undefined") return

  const handlePopState = () => {
    const params = new URLSearchParams(window.location.search)
    setIsOpen(params.get("contact") === "true")
  }

  window.addEventListener("popstate", handlePopState)
  return () => window.removeEventListener("popstate", handlePopState)
}, [])

  const closeModal = () => {
    const params = new URLSearchParams(window.location.search)
    params.delete("contact")
    const query = params.toString()
    const newUrl = query
  ? `${window.location.pathname}?${query}`
  : window.location.pathname
    window.history.pushState({}, "", newUrl)
    setIsOpen(false)
    setShowThankYou(false)
    setFormData({ email: "", name: "", company: "", industry: "", useCase: "" })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.name) {
      newErrors.name = "Name is required"
    }
    if (!formData.company) {
      newErrors.company = "Company is required"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    const payload = {
      username: formData.email,
      firstname: formData.name.split(" ")[0] || formData.name,
      lastname: formData.name.split(" ").slice(1).join(" ") || "",
      organisation: formData.company,
      industry: formData.industry,
      usecase: formData.useCase,
      source: "api-docs",
      country_code: "",
      phone_number: ""
    }

    try {
      const response = await fetch("https://request-access.azurewebsites.net/api/create-or-update-deal/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      const data = await response.json()
      console.log("API Response:", data)
      setShowThankYou(true)
    } catch (err) {
      console.error("API Error:", err)
      setErrors({ submit: "Something went wrong. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])


  return (
    <>
    {isOpen && (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="bg-[#181818] rounded-t-[12px] rounded-b-[12px] w-[90%] max-w-[1300px] flex overflow-hidden max-h-[90dvh] min-h-[70dvh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] border-b border-[#494F56] md:border border-[#494F56]"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Content - Left Side with Scroll */}
        <main className="p-4 md:p-10 md:w-1/2 flex flex-col w-full overflow-y-auto">
          {showThankYou ? (
            <div className="flex flex-col h-full justify-center items-center">
              <div className="text-center">
                <p className="text-3xl font-medium text-white/90 mb-2">
                  Thank you for your interest.
                </p>
                <p className="text-white/70">
                  We look forward to your demo. You'll find the next steps in your inbox.
                </p>
                <div className="mt-10">
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-[#222528] border-[0.5px] border-[#6A7370] py-2 px-5 text-white font-semibold text-[16px] cursor-pointer hover:bg-[#171717] focus-within:bg-[#171717] active:bg-[#2E2E2E]"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between w-full gap-4 mb-8 md:mb-10 shrink-0">
                <div>
                  <h1 className="font-semibold text-[1.75rem] leading-9 md:text-[3rem] md:font-semibold md:leading-[55px] tracking-[-0.5px] text-white mb-1 md:mb-4">
                    Start Building with Wokelo APIs
                  </h1>
                  <p className="text-[1.125rem] text-white/70">
                   Access AI-native APIs designed for your agentic workflows and tools without the overhead of legacy data infrastructure.
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1 rounded-full bg-[#404040] md:hidden cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="w-full">
                {errors.submit && (
                  <div className="mb-4 p-3 rounded bg-red-500/20 border border-red-500/50 text-red-400 text-sm">
                    {errors.submit}
                  </div>
                )}
                <div className="mb-3 md:mb-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Business email address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full h-12 bg-[#21262D] rounded-lg px-3 py-4 text-base md:text-sm text-white placeholder:text-muted-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="mb-3 md:mb-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full h-12 bg-[#21262D] rounded-lg px-3 py-4 text-base md:text-sm text-white placeholder:text-muted-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="mb-3 md:mb-5">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name *"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className={`w-full h-12 bg-[#21262D] rounded-lg px-3 py-4 text-base md:text-sm text-white placeholder:text-muted-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${errors.company ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                </div>
                <div className="mb-3 md:mb-5">
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full h-12 bg-[#21262D] rounded-lg px-3 py-4 text-base md:text-sm text-white/70 placeholder:text-muted-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"
                  >
                    <option value="">Industry</option>
                    <option value="academia">Academia</option>
                    <option value="accelerator">Accelerator / Incubator</option>
                    <option value="asset-manager">Asset Manager</option>
                    <option value="corporate-strategy">Corporate Strategy</option>
                    <option value="corporate-venture-capital">Corporate Venture Capital</option>
                    <option value="family-office">Family Office</option>
                    <option value="fund-of-funds">Fund of Funds</option>
                    <option value="hedge-funds">Hedge Funds</option>
                    <option value="investment-banking">Investment Banking</option>
                    <option value="management-consulting">Management Consulting</option>
                    <option value="private-equity">Private Equity</option>
                    <option value="startup">Startup</option>
                    <option value="venture-capital-pre-seed">Venture Capital (pre-seed / seed)</option>
                    <option value="venture-capital-series-a">Venture Capital (series A+)</option>
                    <option value="venture-debt">Venture Debt</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="useCase"
                    placeholder="Describe use case"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full h-12 bg-[#21262D] rounded-lg px-3 py-4 text-base md:text-sm text-white placeholder:text-muted-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] w-full h-10 px-6 bg-white text-[#181B20] py-2 font-semibold text-[16px] cursor-pointer hover:bg-[#DCDADA] focus-within:bg-[#DCDADA] active:bg-[#F1F1F1] [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Request API access"
                    )}
                  </button>
                </div>

                <p className="text-white/70 text-xs max-md:text-xs">
                  By clicking "Request API access," you agree to Wokelo's{" "}
                  <a href="https://www.wokelo.ai/legal?tab=privacy" className="underline" style={{ textUnderlineOffset: "0.18em" }}>
                    Privacy Policy
                  </a>{" "}
                  and consent to receive product updates and insights.
                </p>
              </form>

              {/* Mobile Logo Ticker */}
              <div className="flex flex-col items-center w-full gap-y-[25px] mt-18 px-4 md:hidden">
                <h6 className="text-white/70">Trusted by Industry Leaders</h6>
                <LogoTicker className="w-full" config={{ ignorePause: true }}>
                  {mobileLogoItems}
                </LogoTicker>
              </div>
            </>
          )}
        </main>

        {/* Side Panel - Right Side Image Panel */}
        <aside className="relative hidden items-center flex flex-col w-1/2 overflow-hidden bg-white md:block">
           <img
             src="https://wkemails.blob.core.windows.net/fe-application/new-website/contact-modal-side.webp"
             alt="Contact Modal Side"
             className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="flex flex-col items-center w-full gap-y-[25px] absolute bottom-10">
            <h6 className="text-white/70">Trusted by Industry Leaders</h6>
              <LogoTicker className="w-full" config={{ ignorePause: true }}>
                {logoItems}
              </LogoTicker>
           </div>
        </aside>
      </div>
    </div>
  )
   }
  </>
)}

export { ContactModal }

export const ContactModalTrigger = ({ children, style }) => {
  const openModal = () => {
    const params = new URLSearchParams(window.location.search)
    params.set("contact", "true")
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, "", newUrl)
    window.dispatchEvent(new Event("popstate"))
  }

  return (
    <button onClick={openModal} style={style}>
      {children || "Get in Touch"}
    </button>
  )
}
