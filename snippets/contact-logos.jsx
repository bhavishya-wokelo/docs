export const ASSET_BASE_URL = "https://wkemails.blob.core.windows.net/fe-application/new-website"

const logos = [
  "/hero-carousel/new-logos/bain.svg",
  "/hero-carousel/new-logos/berkshire.svg",
  "/hero-carousel/new-logos/P&G-logo.svg",
  "/hero-carousel/new-logos/th-global.svg",
  "/hero-carousel/new-logos/bcapital.svg"
]

export { logos }

export const LogoGrid = () => {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '0 16px'
    }}>
      {logos.map((logo) => (
        <img
          src={`${ASSET_BASE_URL}${logo}`}
          alt="partner logo"
          style={{
            maxHeight: '36px'
          }}
          key={logo}
          loading="eager"
        />
      ))}
    </div>
  )
}