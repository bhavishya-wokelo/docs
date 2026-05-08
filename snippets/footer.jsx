
export const Footer =() => {
  const navConfig = [
  {
    label: "Platform",
    subItems: [
      { label: "Agentic Builder ™", href: "https://wokelo.ai/platform/agentic-builder" },
      { label: "Agent Marketplace", href: "https://wokelo.ai/platform/agent-marketplace" },
      { label: "Proprietary Data", href: "https://wokelo.ai/platform/proprietary-data" },
      { label: "Domain-Tuned LLMs", href: "https://wokelo.ai/platform/domain-tuned-llms" },
      { label: "Command Center", href: "https://wokelo.ai/platform/command-center" },
      { label: "APIs", href: "https://wokelo.ai/apis" },
    ],
  },
  {
    label: "Solutions",
    subItems: [
      { label: "Private Equity", href: "https://wokelo.ai/solutions/private-equity" },
      { label: "Investment Banking", href: "https://wokelo.ai/solutions/investment-banking" },
      { label: "Management Consulting", href: "https://wokelo.ai/solutions/management-consulting" },
      { label: "Venture Capital", href: "https://wokelo.ai/solutions/venture-capital" },
      { label: "Corporates", href: "https://wokelo.ai/solutions/corporates" },
      { label: "Asset Management", href: "https://wokelo.ai/solutions/asset-management" },
    ],
  },
  {
    label: "Company",
    subItems: [
      { label: "About Us", href: "https://wokelo.ai/company" },
      { label: "Insights", href: "https://wokelo.ai/blog" },
      { label: "Customers", href: "https://wokelo.ai/blog?filter=Customers" },
      { label: "Careers", href: "https://jobs.ashbyhq.com/wokelo-ai" },
      { label: "Terms and Conditions", href: "https://wokelo.ai/legal" },
      { label: "Privacy Policy", href: "https://wokelo.ai/legal?tab=privacy" },
    ],
  },
]

const FooterBackground = ({className}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gray blob */}
      <div
        className="absolute w-[446px] h-[1426px] rounded-[223px] bg-[#D1D3D3] opacity-[0.2]"
        style={{
          filter: "blur(150px)",
          transform: "translate(-50%, 50%) rotate(-50deg)",
          bottom: "-10%",
          left: "70%",
        }}
      />

      {/* Blue blob */}
      <div
        className="absolute w-[388px] h-[1748px] rounded-[194px] bg-[#239BB1] opacity-[0.2]"
        style={{
          filter: "blur(150px)",
          transform: "translate(-50%, 50%) rotate(50deg)",
          bottom: "0",
          left: "20%",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#181B20]/15" />
    </div>
  )
}


return (
    <footer style={{ position: "relative", padding: "60px 20px", color: "white" }}>
      
      <FooterBackground className="absolute top-0 left-0 -z-1" />

      {/* MAIN */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        
        {/* LEFT */}
        <div style={{ maxWidth: "400px" }}>
          <h4 style={{ fontSize: "28px", marginBottom: "16px" }}>
            Start Building with Wokelo APIs
          </h4>
          {/* <input
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
              marginTop: "10px",
            }}
          /> */}
        </div>

        {/* RIGHT NAV */}
        <div
        className="w-full"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent:'space-evenly',
            gap: "40px",
            maxWidth:'700px'
          }}
        >
          {navConfig.map((section) => (
            <div key={section.label}>
              <p style={{ fontWeight: 600, marginBottom: "20px" }}>
                {section.label}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" , marginTop:'20px' }}>
                {section.subItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          height: "1px",
          width: "100%",
          background: "rgba(255,255,255,0.1)",
          margin: "40px auto",
          maxWidth: "1200px",
        }}
      />

      {/* BOTTOM */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
          Wokelo © Copyright {new Date().getFullYear()}, All Rights Reserved
        </p>

        {/* SOCIALS */}
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="https://www.linkedin.com/company/wokelo-ai" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.448 20.4516H16.8936V14.8836C16.8936 13.5552 16.866 11.8464 15.0408 11.8464C13.188 11.8464 12.9048 13.2912 12.9048 14.7852V20.4516H9.3516V9H12.7644V10.56H12.8112C13.2876 9.66 14.448 8.712 16.1808 8.712C19.782 8.712 20.448 11.0808 20.448 14.166V20.4516ZM5.3364 7.4328C4.1916 7.4328 3.2724 6.5076 3.2724 5.3688C3.2724 4.23 4.1928 3.3048 5.3364 3.3048C5.88381 3.3048 6.40879 3.52226 6.79587 3.90933C7.18294 4.29641 7.4004 4.82139 7.4004 5.3688C7.4004 5.91621 7.18294 6.44119 6.79587 6.82827C6.40879 7.21534 5.88381 7.4328 5.3364 7.4328ZM7.1172 20.4528H3.5532V9H7.1172V20.4516V20.4528ZM22.2252 0H1.7712C0.792 0 0 0.774 0 1.728V22.272C0 23.226 0.792 24 1.7712 24H22.2216C23.1996 24 24 23.2272 24 22.272V1.728C24 0.7752 23.1996 0 22.2216 0H22.2252Z" fill="white"/>
</svg>

          </a>
          <a href="https://x.com/WokeloAI" target="_blank">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.42857 0C1.5375 0 0 1.5375 0 3.42857V20.5714C0 22.4625 1.5375 24 3.42857 24H20.5714C22.4625 24 24 22.4625 24 20.5714V3.42857C24 1.5375 22.4625 0 20.5714 0H3.42857ZM19.3446 4.5L13.7839 10.8536L20.325 19.5H15.2036L11.1964 14.2554L6.60536 19.5H4.06071L10.0071 12.7018L3.73393 4.5H8.98393L12.6107 9.29464L16.8 4.5H19.3446ZM17.3196 17.9786L8.21786 5.94107H6.70179L15.9054 17.9786H17.3143H17.3196Z" fill="white"/>
</svg>

          </a>
        </div>
      </div>

      {/* MOBILE LOGO */}
      <div
        style={{
          marginTop: "40px",
          maxWidth: "1200px",
          marginInline: "auto",
        }}
      >
        <img
          src="images/logo-large.svg"
          alt="Wokelo logo"
          style={{ width: "100%" }}
        />
      </div>
    </footer>
  )
}