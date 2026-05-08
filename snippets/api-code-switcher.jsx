export const ApiCodeSwitcher = () => {
  const [activeTab, setActiveTab] = useState('enrichment');
  const [activeLang, setActiveLang] = useState('cURL');
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const codeExamples = {
    enrichment: {
      cURL: `curl --location 'https://api.wokelo.ai/api/enterprise/company/enrich/single/' \\
--header 'Authorization: Bearer Token' \\
--header 'Content-Type: application/json' \\
--data '{
    "company": [
        "tesla-motors"
    ],
    "sections": [
        "firmographics",
        "products"
    ]
}'`,
      Python: `import requests
import json

url = "https://api.wokelo.ai/api/enterprise/company/enrich/single/"

payload = json.dumps({
  "company": [
    "tesla-motors",
  ],
  "sections": [
    "firmographics",
    "products"
  ]
})
headers = {
  'Authorization': 'Bearer Token',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)`,
      TypeScript: `const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Token");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "company": [
    "tesla-motors",
  ],
  "sections": [
    "firmographics",
    "products"
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.wokelo.ai/api/enterprise/company/enrich/single/", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`
    },
    deep: {
      cURL: `curl --location 'https://api.wokelo.ai/api/enterprise/company/enrich/' \\
--header 'Authorization: Bearer Token' \\
--header 'Content-Type: application/json' \\
--data '{
    "companies": [
        "tesla-motors",
        "stripe"
    ],
    "sections": [
        "products_and_services",
        "product_launches"
    ]
}'`,
      Python: `import requests
import json

url = "https://api.wokelo.ai/api/enterprise/company/enrich/"

payload = json.dumps({
  "companies": [
    "tesla-motors",
    "stripe"
  ],
  "sections": [
    "products_and_services",
    "product_launches"
  ]
})
headers = {
  'Authorization': 'Bearer Token',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)`,
      TypeScript: `const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Token");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "companies": [
    "tesla-motors",
    "stripe"
  ],
  "sections": [
    "products_and_services",
    "product_launches"
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.wokelo.ai/api/enterprise/company/enrich/", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`
    },
    industry: {
      cURL: `curl --location 'https://api.wokelo.ai/api/enterprise/industry/enrich/' \\
--header 'Authorization: Bearer Token' \\
--header 'Content-Type: application/json' \\
--data '{
    "topic": "Enterprise SaaS security",
    "sections": [
        "market_size",
        "trends_and_innovations",
        "transactions_mna"
    ],
    "parameters": {
        "keywords": [
            "zero trust",
            "SIEM"
        ],
        "geography": [
            "USA"
        ],
        "definition": "B2B software focused on enterprise cybersecurity",
        "sample_companies": [
            "crowdstrike",
            "sentinel"
        ]
    }
}'`,
      Python: `import requests
import json

url = "https://api.wokelo.ai/api/enterprise/industry/enrich/"

payload = json.dumps({
  "topic": "Enterprise SaaS security",
  "sections": [
    "market_size",
    "trends_and_innovations",
    "transactions_mna"
  ],
  "parameters": {
    "keywords": [
      "zero trust",
      "SIEM"
    ],
    "geography": [
      "USA"
    ],
    "definition": "B2B software focused on enterprise cybersecurity",
    "sample_companies": [
      "crowdstrike",
      "sentinel"
    ]
  }
})
headers = {
  'Authorization': 'Bearer Token',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)`,
      TypeScript: `const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Token");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "topic": "Enterprise SaaS security",
  "sections": [
    "market_size",
    "trends_and_innovations",
    "transactions_mna"
  ],
  "parameters": {
    "keywords": [
      "zero trust",
      "SIEM"
    ],
    "geography": [
      "USA"
    ],
    "definition": "B2B software focused on enterprise cybersecurity",
    "sample_companies": [
      "crowdstrike",
      "sentinel"
    ]
  }
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.wokelo.ai/api/enterprise/industry/enrich/", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`
    },
    discovery: {
      cURL: `curl --location 'https://api.wokelo.ai/api/enterprise/market-map/enrich/' \\
--header 'Authorization: Bearer Token' \\
--header 'Content-Type: application/json' \\
--data '{
    "topic": "AI-powered CRM software",
    "parameters": {
        "detailed_query": "B2B CRM tools leveraging AI for sales automation",
        "keywords": [
            "AI",
            "CRM",
            "sales automation"
        ],
        "sample_companies": [
            "salesforce",
            "hubspot"
        ],
        "geography": [
            "USA"
        ],
        "company_type": "private",
        "employee_count": ["11-50"],
        "founded_year": {
            "min": 2015
        },
        "funding_stage": [],
        "total_funding": {},
        "last_funding_round": {},
        "revenue": {},
        "ebitda": {},
        "net_income": {},
        "ev_ebitda": {}
    }
}'`,
      Python: `import requests
import json

url = "https://api.wokelo.ai/api/enterprise/market-map/enrich/"

payload = json.dumps({
    "topic": "AI-powered CRM software",
    "parameters": {
        "detailed_query": "B2B CRM tools leveraging AI for sales automation",
        "keywords": [
            "AI",
            "CRM",
            "sales automation"
        ],
        "sample_companies": [
            "salesforce",
            "hubspot"
        ],
        "geography": [
            "USA"
        ],
        "company_type": "private",
        "employee_count": ["11-50"],
        "founded_year": {
            "min": 2015
        },
        "funding_stage": [],
        "total_funding": {},
        "last_funding_round": {},
        "revenue": {},
        "ebitda": {},
        "net_income": {},
        "ev_ebitda": {}
    }
})
headers = {
    'Authorization': 'Bearer Token',
    'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)`,
      TypeScript: `const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Token");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
    "topic": "AI-powered CRM software",
    "parameters": {
        "detailed_query": "B2B CRM tools leveraging AI for sales automation",
        "keywords": [
            "AI",
            "CRM",
            "sales automation"
        ],
        "sample_companies": [
            "salesforce",
            "hubspot"
        ],
        "geography": [
            "USA"
        ],
        "company_type": "private",
        "employee_count": ["11-50"],
        "founded_year": {
            "min": 2015
        },
        "funding_stage": [],
        "total_funding": {},
        "last_funding_round": {},
        "revenue": {},
        "ebitda": {},
        "net_income": {},
        "ev_ebitda": {}
    }
});

const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://api.wokelo.ai/api/enterprise/market-map/enrich/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));`
    },
    news: {
      cURL: `curl --location 'https://api.wokelo.ai/api/enterprise/company/news/?company=tesla' \\
--header 'Authorization: Bearer Token' \\
--header 'Content-Type: application/json'`,
      Python: `import requests
import json

url = "https://api.wokelo.ai/api/enterprise/company/news/?company=tesla"

payload = {}
headers = {
  'Authorization': 'Bearer Token',
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)`,
      TypeScript: `const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Token");
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api.wokelo.ai/api/enterprise/company/news/?company=tesla", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`
    },
    workflow: {
      cURL: `curl --location 'https://api.wokelo.ai/api/workflow_manager/start/' \\
--header 'Authorization: Bearer Token' \\
--header 'Content-Type: application/json' \\
--data '{
    "workflow": "company_primer",
    "permalink": "wokelo-ai",
    "workbook_name": "wokelo-ai"
}'`,
      Python: `import requests
import json

url = "https://api.wokelo.ai/api/workflow_manager/start/"

payload = json.dumps({
    "workflow": "company_primer",
    "permalink": "wokelo-ai",
    "workbook_name": "wokelo-ai"
})
headers = {
    'Authorization': 'Bearer Token',
    'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)`,
      TypeScript: `const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Token");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
    "workflow": "company_primer",
    "permalink": "wokelo-ai",
    "workbook_name": "wokelo-ai"
});

const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://api.wokelo.ai/api/workflow_manager/start/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));`
    }
  };

  const tabs = [
    { id: 'enrichment', label: 'Company Instant Enrichment', href: '/api-reference/company-research' },
    { id: 'deep', label: 'Company Deep Intelligence', href: '/api-reference/company-research' },
    { id: 'industry', label: 'Industry Deep Intelligence', href: '/api-reference/industry-research' },
    { id: 'discovery', label: 'Company Discovery', href: '/api-reference/get-company-list' },
    { id: 'news', label: 'News Monitoring', href: '/api-reference/initiate-news-report' },
    { id: 'workflow', label: 'Workflow Automation', href: '/api-reference/custom-workflows' }
  ];

  const languages = ['cURL', 'Python', 'TypeScript'];

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab][activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @media screen and (max-width: 768px) {
          .api-code-switcher-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '280px minmax(0, 1fr)',
      gap: '1.2rem',
      alignItems: 'start',
    }}
    className="api-code-switcher-grid"
    >
      {/* Left: API tabs */}
      <div style={{ display: 'grid', gap: '0.75rem' }}>
  {tabs.map((tab) => {
    const isActive = activeTab === tab.id;

    return (
    <div
  onClick={() => { if (!isActive) setActiveTab(tab.id); }}
  className={`
    mint-block mint-w-full mint-rounded-[14px] mint-p-4 mint-border mint-leading-[1.35]
    mint-transition-all mint-duration-150 mint-cursor-pointer mint-select-none
    ${isActive
      ? "dark:mint-text-white mint-text-black"
      : "mint-bg-[#F6F6F6] mint-border-[#D4D4D4] dark:mint-bg-transparent dark:mint-text-white dark:mint-border-[rgba(109,109,109,0.42)]"
    }
  `}
  style={
    isActive
      ? {
          borderColor: "rgba(32,212,207,0.55)",
          background: isDark
            ? "linear-gradient(180deg, rgba(32,212,207,0.08) 0%, rgba(32,212,207,0.13) 100%)"
            : "linear-gradient(180deg, rgba(230,245,245,0.9) 0%, rgba(210,235,235,0.95) 100%)",
          boxShadow: "0 0 0 1px rgba(32,212,207,0.14)",
          backdropFilter: "blur(10px)",
        }
      : undefined
  }
>
  {tab.label}
</div>

    );
  })}
</div>

      {/* Right: Code block */}
        <div style={{
          overflow: 'hidden',
          borderRadius: '20px',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
          background: isDark ? '#0B0C0E' : '#F5F5F5',
          // boxShadow: isDark ? '0 28px 80px rgba(0, 0, 0, 0.28)' : '0 28px 80px rgba(0, 0, 0, 0.12)',
          backdropFilter: 'blur(12px)',
          minHeight: '520px',
          maxHeight: '520px',
        }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)',
          background: isDark ? 'rgba(33, 31, 29, 0.86)' : 'rgba(240, 240, 240, 0.9)',
          padding: '0.9rem 1rem 0',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.15rem',
            fontSize: '0.94rem',
          }}>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                style={{
                  display: 'inline-flex',
                  paddingBottom: '0.9rem',
                  color: activeLang === lang ? (isDark ? '#ffffff' : '#000000') : (isDark ? 'rgba(255, 255, 255, 0.54)' : 'rgba(0, 0, 0, 0.45)'),
                  borderBottom: activeLang === lang ? '2px solid #20d4cf' : '2px solid transparent',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeLang === lang ? '2px solid #20d4cf' : '2px solid transparent',
                  marginBottom: '-1px',
                  cursor: 'pointer',
                  fontSize: 'inherit',
                  fontFamily: 'inherit',
                  transition: 'color 0.15s, border-color 0.15s',
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          <span
            onClick={handleCopy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '36px',
              padding: '0 0.95rem',
              borderRadius: '12px',
              border: copied ? '1px solid #41af97' : (isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'),
              background: copied ? 'rgba(65, 175, 151, 0.2)' : (isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)'),
              color: copied ? '#41af97' : (isDark ? 'rgba(255, 255, 255, 0.76)' : 'rgba(0, 0, 0, 0.65)'),
              fontSize: '0.92rem',
              cursor: 'pointer',
              marginTop:'-15px',
              transition: 'all 0.15s ease',
            }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </span>
        </div>

        <pre style={{
          margin: 0,
          padding: '1.35rem 1.15rem 1.5rem',
          background: isDark ? '#0B0C0E' : 'transparent',
          overflowX: 'auto',
          overflowY: 'auto',
          minHeight: '450px',
          maxHeight: '450px',
        }}>
          <code style={{
            fontSize: '0.86rem',
            lineHeight: 1.82,
            color: isDark ? '#9dc2ff' : '#1a1a1a',
            whiteSpace: 'pre',
          }}>
            {codeExamples[activeTab][activeLang]}
          </code>
        </pre>
      </div>
    </div>
    </>
  );
};



